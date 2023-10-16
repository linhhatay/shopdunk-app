import styled from "styled-components";
import { HiPencil, HiTrash, HiSquare2Stack } from "react-icons/hi2";

import CreateProductForm from "./CreateProductForm";
import { useDeleteProduct } from "./useDeleteProduct";
import { useCreateProduct } from "./useCreateProduct";
import { useDuplicateProduct } from "./useDuplicateProduct";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

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
  const { isDeleting, deleteProduct } = useDeleteProduct();
  const { isDuplicating, duplicateProduct } = useDuplicateProduct();
  const {
    _id: productId,
    name,
    imageCover,
    images,
    description,
    storageCapacity,
    colors,
    category,
    discount,
  } = product;

  function handleDuplicate() {
    duplicateProduct({
      name: `Copy of ${name}`,
      description,
      storageCapacity,
      colors,
      imageCover,
      images,
      category,
      discount,
    });
  }

  return (
    <Table.Row>
      <div></div>
      <Product>{name}</Product>
      <Img
        src={`http://localhost:8000/img/products/${imageCover}`}
        alt={name}
      />
      <Price>{category}</Price>
      {discount ? <Discount>{`${discount}%`}</Discount> : <span>&mdash;</span>}
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={productId} />

            <Menus.List id={productId}>
              <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
                Duplicate
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateProductForm productToEdit={product} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName={"products"}
                disabled={isDeleting}
                onConfirm={() => deleteProduct(productId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default ProductRow;
