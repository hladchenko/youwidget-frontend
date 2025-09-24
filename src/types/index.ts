export interface IChartDataPoint {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

export interface IWidget {
  id?: string;
  title: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  type?: "line-chart" | "bar-chart" | "text";
}

export interface INavigationItem {
  name: string;
  href: string;
  current: boolean;
}

export interface IUser {
  name: string;
  email: string;
  imageUrl: string;
}

export interface IFormInputs {
  title: string;
  description: string;
}
