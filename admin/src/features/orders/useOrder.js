import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../../services/apiOrders";
import { useParams } from "react-router-dom";

export function useOrder() {
  const { id: orderId } = useParams();

  const {
    isLoading,
    error,
    data: order,
  } = useQuery({
    queryKey: ["order"],
    queryFn: () => getOrder(orderId),
    retry: false,
  });

  return { isLoading, order, error };
}
