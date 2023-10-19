import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrders";
import { PAGE_SIZE } from "../../utils/constants";

export function useOrders() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  const sortByRaw = searchParams.get("sortBy") || "orderDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: orders,
    error,
  } = useQuery({
    queryKey: ["orders", filter, sortBy, page],
    queryFn: () =>
      getOrders({ filter, sortBy, pagination: { page, limit: PAGE_SIZE } }),
  });

  if (error) {
    throw new Error("Orders could not be found");
  }

  const pageCount = Math.ceil(orders?.count / PAGE_SIZE);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["orders", filter, sortBy, page + 1],
      queryFn: () =>
        getOrders({
          filter,
          sortBy,
          pagination: { page: page + 1, limit: PAGE_SIZE },
        }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["orders", filter, sortBy, page - 1],
      queryFn: () =>
        getOrders({
          filter,
          sortBy,
          pagination: { page: page - 1, limit: PAGE_SIZE },
        }),
    });
  }

  return {
    isLoading,
    orders,
    error,
  };
}
