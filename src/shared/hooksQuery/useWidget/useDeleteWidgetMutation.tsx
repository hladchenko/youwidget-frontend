import {
  useMutation,
  type UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import youwidgetApi from "@shared/api";

export const deleteWidget =
  () =>
  async (widgetId: string): Promise<void> => {
    await youwidgetApi.delete(`/widgets/${widgetId}`);
  };

export const useDeleteWidgetMutation = (): UseMutationResult<
  void,
  Error,
  string,
  unknown
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteWidget"],
    mutationFn: deleteWidget(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["widgets"] });
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
};
