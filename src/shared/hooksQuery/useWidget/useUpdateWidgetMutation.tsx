import {
  useMutation,
  type UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import type { IWidget } from "@/types";
import youwidgetApi from "@shared/api";

const updateWidget =
  () =>
  async (body: IWidget): Promise<IWidget> => {
    const { data } = await youwidgetApi.put<IWidget>(
      `/widgets/${body.id}`,
      body,
    );
    return data;
  };

export const useUpdateWidgetMutation = (): UseMutationResult<
  IWidget,
  Error,
  IWidget,
  { previousWidgets: IWidget[] | undefined }
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateWidget"],
    mutationFn: updateWidget(),

    onMutate: async (updatedWidget: IWidget) => {
      await queryClient.cancelQueries({ queryKey: ["widgets"] });

      const previousWidgets = queryClient.getQueryData<IWidget[]>(["widgets"]);

      queryClient.setQueryData<IWidget[]>(["widgets"], (old) =>
        old?.map((widget) =>
          widget.id === updatedWidget.id
            ? { ...widget, ...updatedWidget }
            : widget,
        ),
      );

      return { previousWidgets };
    },

    onError: (error, _updatedWidget, context) => {
      if (context?.previousWidgets) {
        queryClient.setQueryData(["widgets"], context.previousWidgets);
      }
      console.error("Update widget failed:", error);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["widgets"] });
    },
  });
};
