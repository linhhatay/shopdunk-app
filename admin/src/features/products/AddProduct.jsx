import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateProductForm from "./CreateProductForm";

function AddProduct() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Modal>
        <Modal.Open opens="product-form">
          <Button>Add new product</Button>
        </Modal.Open>
        <Modal.Window name="product-form">
          <CreateProductForm />
        </Modal.Window>
      </Modal>
    </div>
  );

  // return (
  //   <div>
  //     <Button onClick={() => setIsOpenModal((show) => !show)}>
  //       Add new product
  //     </Button>
  //     {isOpenModal && (
  //       <Modal onClose={() => setIsOpenModal(false)}>
  //         <CreateProductForm onCloseModal={() => setIsOpenModal(false)} />
  //       </Modal>
  //     )}
  //   </div>
  // );
}

export default AddProduct;
