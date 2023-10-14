import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { deleteProduct } from "../../services/apiProducts";
import { useState } from "react";
import CreateProductForm from "./CreateProductForm";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  height: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Product = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function ProductRow({ product }) {
  const [showForm, setShowForm] = useState(false);

  const { _id: productId, name, imageCover, category, discount } = product;
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      toast.success("Product successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <>
      <TableRow role="row">
        <div></div>
        <Product>{name}</Product>
        <Img
          src={`http://localhost:8000/img/products/${imageCover}`}
          alt={name}
        />
        <Price>{category}</Price>
        <Discount>{`${discount}%`}</Discount>
        <div>
          <button onClick={() => setShowForm((show) => !show)}>Edit</button>
          <button onClick={() => mutate(productId)} disabled={isDeleting}>
            Delete
          </button>
        </div>
      </TableRow>
      {showForm && <CreateProductForm productToEdit={product} />}
    </>
  );
}

export default ProductRow;
