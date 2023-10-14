import styled from "styled-components";
import { useState } from "react";

import CreateProductForm from "./CreateProductForm";
import { useDeleteProduct } from "./useDeleteProduct";

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
  const { isDeleting, deleteProduct } = useDeleteProduct();

  const { _id: productId, name, imageCover, category, discount } = product;

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
        {discount ? (
          <Discount>{`${discount}%`}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <button onClick={() => setShowForm((show) => !show)}>Edit</button>
          <button
            onClick={() => deleteProduct(productId)}
            disabled={isDeleting}
          >
            Delete
          </button>
        </div>
      </TableRow>
      {showForm && <CreateProductForm productToEdit={product} />}
    </>
  );
}

export default ProductRow;
