import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { IWidget } from "@/types";
import youwidgetApi from "@shared/api";

const fetchWidgets = () => async (): Promise<IWidget[]> => {
  const url = `/widgets`;
  const { data } = await youwidgetApi.get<IWidget[]>(url);
  return data;
};

export const useFetchWidgets = (): UseQueryResult<IWidget[], Error> => {
  return useQuery<IWidget[], Error>({
    queryKey: ["widgets"],
    queryFn: fetchWidgets(),
  });
};
