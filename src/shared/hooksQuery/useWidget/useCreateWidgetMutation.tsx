import {
  useMutation,
  type UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import type { IWidget } from "@/types";
import youwidgetApi from "@shared/api";

export const createWidget = async (body: IWidget): Promise<IWidget> => {
  const { data } = await youwidgetApi.post<IWidget>(`/widgets`, body);
  return data;
};

export const useCreateWidgetMutation = (): UseMutationResult<
  IWidget,
  Error,
  IWidget,
  { previousWidgets: IWidget[] | undefined }
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createWidget"],
    mutationFn: createWidget,
    onMutate: async (newWidget: IWidget) => {
      await queryClient.cancelQueries({ queryKey: ["widgets"] });

      const previousWidgets = queryClient.getQueryData<IWidget[]>(["widgets"]);

      const optimisticWidget: IWidget = {
        ...newWidget,
        id: `temp-${Date.now()}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      queryClient.setQueryData<IWidget[]>(["widgets"], (old = []) => [
        optimisticWidget,
        ...old,
      ]);

      return { previousWidgets };
    },
    onSuccess: (data) => {
      queryClient.setQueryData<IWidget[]>(["widgets"], (old = []) =>
        old.map((widget) => (widget?.id?.startsWith("temp-") ? data : widget)),
      );
    },
    onError: (_error: Error, _newWidget, context) => {
      if (context?.previousWidgets) {
        queryClient.setQueryData(["widgets"], context.previousWidgets);
      }
    },
  });
};
