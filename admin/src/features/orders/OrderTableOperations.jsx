import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function OrderTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "Pending", label: "Pending" },
          { value: "InTransit", label: "InTransit" },
          { value: "Delivered", label: "Delivered" },
        ]}
      />

      <SortBy
        options={[
          { value: "orderDate-desc", label: "Sort by date (recent first)" },
          { value: "orderDate-asc", label: "Sort by date (earlier first)" },
          {
            value: "totalAmount-desc",
            label: "Sort by amount (high first)",
          },
          { value: "totalAmount-asc", label: "Sort by amount (low first)" },
        ]}
      />
    </TableOperations>
  );
}

export default OrderTableOperations;
