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
    const { data } = await youwidgetApi.put<IWidget>(`/widgets`, body);
    return data;
  };

export const useUpdateWidgetsMutation = (): UseMutationResult<
  IWidget,
  Error,
  IWidget,
  unknown
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateWidget"],
    mutationFn: updateWidget(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["widgets"] });
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
};
