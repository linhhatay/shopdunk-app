import { useQuery } from "@tanstack/react-query";
import { getMe } from "../../services/apiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getMe,
  });

  return { isLoading, user };
}
