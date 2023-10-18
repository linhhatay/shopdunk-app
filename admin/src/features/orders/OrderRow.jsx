import { format } from "date-fns";
import styled from "styled-components";
import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import { formatCurrency } from "../../utils/helpers";

const Product = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function OrderRow({
  order: {
    _id: orderId,
    orderNumber,
    createdAt,
    customer,
    status,
    orderDate,
    shippingAddress,
    totalAmount,
  },
}) {
  const statusToTagName = {
    Pending: "blue",
    InTransit: "green",
    Delivered: "silver",
  };

  return (
    <Table.Row role="row">
      <Stacked>
        <span>{`#${orderNumber} by Linh Nguyễn`}</span>
        <span>ln14092@gmail.com</span>
      </Stacked>

      <div>{format(new Date(orderDate), "MMM dd yyyy, h:mm a")}</div>

      <div>{shippingAddress}</div>

      <Tag type={statusToTagName[status]}>{status}</Tag>

      <Amount>{formatCurrency(totalAmount)}</Amount>
    </Table.Row>
  );
}

export default OrderRow;
