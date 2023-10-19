import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Spinner from "../../ui/Spinner";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

import ButtonText from "../../ui/ButtonText";
import Empty from "../../ui/Empty";
import OrderDataBox from "./OrderDataBox";
import { useOrder } from "./useOrder";
import { useMoveBack } from "../../hooks/useMoveBack";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function OrderDetail() {
  const { order, isLoading } = useOrder();
  // const { mutate: deleteBooking, isLoading: isDeleting } = useDeleteBooking();
  // const { mutate: checkout, isLoading: isCheckingOut } = useCheckout();

  const moveBack = useMoveBack();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  if (!order) return <Empty resource="order" />;

  const statusToTagName = {
    Pending: "blue",
    InTransit: "green",
    Delivered: "silver",
  };

  const { _id: orderId, orderNumber, status, paymentStatus } = order.data.data;

  // We return a fragment so that these elements fit into the page's layout
  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading type="h1">Booking #{orderNumber}</Heading>
          <Tag type={statusToTagName[status]}>{status}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <OrderDataBox order={order} />

      <ButtonGroup>
        {status === "Pending" && (
          <Button onClick={() => navigate(`/checkin/${orderId}`)}>
            Cancel Order
          </Button>
        )}

        {status === "Pending" && <Button>Transport</Button>}

        <Modal>
          {/* <Modal.Toggle opens="delete">
            <Button variation="danger">Delete booking</Button>
          </Modal.Toggle>
          <Modal.Window name="delete">
            <ConfirmDelete resource="booking" />
          </Modal.Window> */}
        </Modal>

        <Button variation="secondary">Back</Button>
      </ButtonGroup>
    </>
  );
}

export default OrderDetail;
