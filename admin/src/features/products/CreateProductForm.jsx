import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct, editProduct } from "../../services/apiProducts";
import { useState } from "react";
import FormRow from "../../ui/FormRow";

function CreateProductForm({ productToEdit = {} }) {
  const { _id: editId, ...editValues } = productToEdit;
  const isEditSession = Boolean(editId);
  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: isEditSession ? editProduct : createProduct,
    onSuccess: () => {
      toast.success(
        isEditSession
          ? "Product successfully updated"
          : "New product successfully created"
      );
      queryClient.invalidateQueries({ queryKey: "products" });
      if (isEditSession) reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;
  const [variantForms, setVariantForms] = useState([]);
  const [colors, setColors] = useState([]);

  function onSubmit(data) {
    const {
      name,
      category,
      description,
      imageCover,
      discount,
      storageCapacity,
    } = data;

    const colorData = colors.map((color, index) => ({
      name: color,
      price: data.price[index],
      quantity: data.quantity[index],
    }));

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("discount", Number(discount));
    formData.append("storageCapacity", storageCapacity);

    formData.append("imageCover", imageCover[0]);

    colorData.forEach((color, index) => {
      formData.append(`colors[${index}][name]`, color.name);
      formData.append(`colors[${index}][price]`, color.price);
      formData.append(`colors[${index}][quantity]`, color.quantity);
    });

    if (isEditSession) {
      // console.log({ ...data, editId });
      mutate({ ...data, editId });
      return;
    }

    mutate(formData);
  }

  function onError(errors) {}

  const addVariantForm = () => {
    // Tạo một form biến thể mới và thêm vào danh sách
    const newIndex = variantForms.length;
    const newForm = (
      <div key={newIndex}>
        <FormRow label={"Color"} error={errors?.[`color-${newIndex}`]?.message}>
          <Input
            type="text"
            id={`color${newIndex}`}
            {...register(`color-${newIndex}`, {
              required: "This field is required",
            })}
            onChange={(e) => {
              // Cập nhật tên màu vào mảng colors khi thay đổi giá trị trường màu
              const newColors = [...colors];
              newColors[newIndex] = e.target.value;
              setColors(newColors);
            }}
            disabled={isCreating}
          />
        </FormRow>

        <FormRow label={"Price"} error={errors?.[`price-${newIndex}`]?.message}>
          <Input
            type="number"
            id={`price${newIndex}`}
            {...register(`price-${newIndex}`, {
              required: "This field is required",
              min: {
                value: 1,
                message: "Price should be at least 1",
              },
            })}
            disabled={isCreating}
          />
        </FormRow>

        <FormRow label={"Quantity"}>
          <Input
            type="number"
            id={`quantity${newIndex}`}
            {...register(`quantity[${newIndex}]`)}
            defaultValue={10}
            disabled={isCreating}
          />
        </FormRow>

        <FormRow>
          <Button type="button" onClick={() => removeVariantForm(newIndex)}>
            Remove Variant
          </Button>
        </FormRow>
      </div>
    );

    setVariantForms([...variantForms, newForm]);
  };

  const removeVariantForm = (index) => {
    // Xóa form biến thể dựa vào index
    const updatedForms = [...variantForms];
    updatedForms.splice(index, 1);
    setVariantForms(updatedForms);

    // Xóa biến thể khỏi mảng colors
    const updatedColors = [...colors];
    updatedColors.splice(index, 1);
    setColors(updatedColors);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label={"Name"} error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
          disabled={isCreating}
        />
      </FormRow>

      <FormRow
        label={"Storage capacity"}
        error={errors?.storageCapacity?.message}
      >
        <Input
          type="text"
          id="storageCapacity"
          {...register("storageCapacity", {
            required: "This field is required",
          })}
          disabled={isCreating}
        />
      </FormRow>

      <FormRow label={"Category"} error={errors?.category?.message}>
        <Input
          type="text"
          id="category"
          defaultValue=""
          {...register("category", {
            required: "This field is required",
          })}
          disabled={isCreating}
        />
      </FormRow>

      <FormRow
        label={"Description for website"}
        error={errors?.description?.message}
      >
        <Textarea
          type="text"
          id="description"
          defaultValue=""
          {...register("description", {
            required: "This field is required",
          })}
          disabled={isCreating}
        />
      </FormRow>

      <FormRow label={"Discount"} error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          {...register("discount", {
            max: {
              value: 99,
              message: "Discount must be greater than 100",
            },
          })}
          defaultValue={0}
          disabled={isCreating}
        />
      </FormRow>

      <FormRow label={"Image Cover"} error={errors?.imageCover?.message}>
        <FileInput
          type="file"
          id="imageCover"
          accept="image/*"
          {...register("imageCover", {
            required: isEditSession ? false : "This field is required",
          })}
          disabled={isCreating}
        />
      </FormRow>

      <FormRow label={"Images"}>
        <FileInput
          id="images"
          accept="image/*"
          {...register("images")}
          disabled={isCreating}
        />
      </FormRow>

      <FormRow>
        <Button type="button" onClick={addVariantForm}>
          Add variant
        </Button>
      </FormRow>

      {variantForms.map((form, index) => (
        <div key={index}>{form}</div>
      ))}

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button type="submit" disabled={isCreating}>
          {isEditSession ? "Edit" : "Create"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateProductForm;
