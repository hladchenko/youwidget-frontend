import {
  useMutation,
  type UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import youwidgetApi from "@shared/api";
import type { IWidget } from "@/types";

export const deleteWidget =
  () =>
  async (widgetId: string): Promise<void> => {
    await youwidgetApi.delete(`/widgets/${widgetId}`);
  };

export const useDeleteWidgetMutation = (): UseMutationResult<
  void,
  Error,
  string,
  { previousWidgets: IWidget[] | undefined }
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteWidget"],
    mutationFn: deleteWidget(),

    onMutate: async (widgetId: string) => {
      await queryClient.cancelQueries({ queryKey: ["widgets"] });

      const previousWidgets = queryClient.getQueryData<IWidget[]>(["widgets"]);

      queryClient.setQueryData<IWidget[]>(["widgets"], (old = []) =>
        old.filter((widget) => widget.id !== widgetId),
      );

      return { previousWidgets };
    },

    onError: (error, _widgetId, context) => {
      console.error(error);
      if (context?.previousWidgets) {
        queryClient.setQueryData(["widgets"], context.previousWidgets);
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["widgets"] });
    },
  });
};
