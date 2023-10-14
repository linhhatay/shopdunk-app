import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { duplicateProduct as duplicateProductApi } from "../../services/apiProducts";

export function useDuplicateProduct() {
  const queryClient = useQueryClient();

  const { mutate: duplicateProduct, isLoading: isDuplicating } = useMutation({
    mutationFn: duplicateProductApi,
    onSuccess: () => {
      toast.success("New product successfully created");
      queryClient.invalidateQueries({ queryKey: "products" });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDuplicating, duplicateProduct };
}
