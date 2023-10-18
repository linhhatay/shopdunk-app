import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrders";

export function useOrders() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  const sortByRaw = searchParams.get("sortBy") || "orderDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  const {
    isLoading,
    data: orders,
    error,
  } = useQuery({
    queryKey: ["orders", filter, sortBy],
    queryFn: () => getOrders({ filter, sortBy }),
  });

  if (error) {
    console.log(error);
    throw new Error("Orders could not be found");
  }

  return { isLoading, orders, error };
}
