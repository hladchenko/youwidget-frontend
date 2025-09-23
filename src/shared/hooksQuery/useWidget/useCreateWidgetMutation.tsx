import {
  useMutation,
  type UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import type { IWidget } from "@/types";
import youwidgetApi from "@shared/api";

export const createWidget =
  () =>
  async (body: IWidget): Promise<IWidget> => {
    const { data } = await youwidgetApi.post<IWidget>(`/widgets`, body);
    return data;
  };

export const useCreateWidgetMutation = (): UseMutationResult<
  IWidget,
  Error,
  IWidget,
  unknown
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createWidget"],
    mutationFn: createWidget(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["widgets"] });
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
};
