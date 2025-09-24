import { ChartBarIcon } from "@heroicons/react/20/solid";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Widget from "@/components/widgets/Widget.tsx";
import type { IWidget } from "@/types";
import { getChartDataFromJson } from "@shared/utils";

interface BarChartWidgetProps {
  id: string;
  widget: IWidget;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const BarChartWidget = ({
  id,
  widget,
  onEdit,
  onDelete,
}: BarChartWidgetProps) => {
  const data = getChartDataFromJson(widget?.json_data);
  const Chart = (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="pv"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="uv"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );

  return (
    <Widget
      id={id}
      title={widget?.title}
      icon={ChartBarIcon}
      content={Chart}
      isEditable={false}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};

export default BarChartWidget;
