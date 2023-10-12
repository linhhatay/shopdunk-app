import { toast } from "react-hot-toast";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../../services/apiProducts";
import { useState } from "react";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateProductForm() {
  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      toast.success("New product successfully created");
      queryClient.invalidateQueries({ queryKey: "products" });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const { register, handleSubmit, reset } = useForm();
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
    formData.append("discount", discount);
    formData.append("storageCapacity", storageCapacity);

    formData.append("imageCover", imageCover[0]);

    colorData.forEach((color, index) => {
      formData.append(`colors[${index}][name]`, color.name);
      formData.append(`colors[${index}][price]`, color.price);
      formData.append(`colors[${index}][quantity]`, color.quantity);
    });
    mutate(formData);
  }

  const addVariantForm = () => {
    // Tạo một form biến thể mới và thêm vào danh sách
    const newIndex = variantForms.length;
    const newForm = (
      <div key={newIndex}>
        <FormRow>
          <Label htmlFor={`color${newIndex}`}>Color</Label>
          <Input
            type="text"
            id={`color${newIndex}`}
            {...register(`color[${newIndex}]`)}
            onChange={(e) => {
              // Cập nhật tên màu vào mảng colors khi thay đổi giá trị trường màu
              const newColors = [...colors];
              newColors[newIndex] = e.target.value;
              setColors(newColors);
            }}
          />
        </FormRow>

        <FormRow>
          <Label htmlFor={`price${newIndex}`}>Price</Label>
          <Input
            type="number"
            id={`price${newIndex}`}
            {...register(`price[${newIndex}]`)}
          />
        </FormRow>

        <FormRow>
          <Label htmlFor={`quantity${newIndex}`}>Quantity</Label>
          <Input
            type="number"
            id={`quantity${newIndex}`}
            {...register(`quantity[${newIndex}]`)}
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" {...register("name")} />
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Storage capacity</Label>
        <Input
          type="text"
          id="storageCapacity"
          {...register("storageCapacity")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="category">Category</Label>
        <Input
          type="text"
          id="category"
          defaultValue=""
          {...register("category")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          type="text"
          id="description"
          defaultValue=""
          {...register("description")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input type="number" id="discount" {...register("discount")} />
      </FormRow>

      <FormRow>
        <Label htmlFor="imageCover">Image Cover</Label>
        <FileInput
          type="file"
          id="imageCover"
          accept="image/*"
          {...register("imageCover")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="images">Images</Label>
        <FileInput id="images" accept="image/*" {...register("images")} />
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
          Add
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateProductForm;
