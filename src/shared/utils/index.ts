import type { IChartDataPoint } from "@/types";

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const generateChartData = (count: number = 7): IChartDataPoint[] => {
  return Array.from({ length: count }, (_, i) => ({
    name: `${String.fromCharCode(65 + i)}`,
    uv: Math.floor(Math.random() * 5000) + 1000,
    pv: Math.floor(Math.random() * 10000) + 500,
    amt: Math.floor(Math.random() * 3000) + 1000,
  }));
};

export const getChartDataFromJson = (jsonData?: string): IChartDataPoint[] =>
  jsonData ? JSON.parse(jsonData) : [];
