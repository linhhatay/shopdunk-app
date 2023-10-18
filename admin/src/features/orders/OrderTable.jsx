import OrderRow from "./OrderRow";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import { useOrders } from "./useOrders";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Empty from "../../ui/Empty";

function OrderTable() {
  const { orders, isLoading, error } = useOrders();
  if (isLoading) return <Spinner />;
  if (error) return <div>Errors...</div>;

  if (!orders) return <Empty resource={"orders"} />;

  return (
    <Menus>
      <Table columns="1.4fr 2fr 2.4fr 0.6fr 1fr 3.2rem">
        <Table.Header>
          <div>ID</div>
          <div>Date</div>
          <div>Ship to</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={orders.data.data}
          render={(order) => <OrderRow key={order._id} order={order} />}
        />
      </Table>
    </Menus>
  );
}

export default OrderTable;
