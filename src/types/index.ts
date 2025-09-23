export interface ChartDataPoint {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

export interface IWidget {
  id?: string;
  name: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  type?: "line-chart" | "bar-chart" | "text";
}

export interface WidgetConfig extends Partial<IWidget> {
  isEditable?: boolean;
}

export interface ChartWidgetProps extends WidgetConfig {
  type: "line-chart" | "bar-chart";
  data: ChartDataPoint[];
}

export interface TextWidgetProps extends WidgetConfig {
  type: "text";
  content: string;
}

export type WidgetProps = ChartWidgetProps | TextWidgetProps;

export interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

export interface User {
  name: string;
  email: string;
  imageUrl: string;
}
