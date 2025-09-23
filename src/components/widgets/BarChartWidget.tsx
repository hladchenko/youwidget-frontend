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
import { SAMPLE_CHART_DATA } from "@shared/constants/mockData";
import type { ChartDataPoint } from "@/types";

interface BarChartWidgetProps {
  id: string;
  title: string;
  data?: ChartDataPoint[];
  isEditable?: boolean;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const BarChartWidget = ({
  id,
  title,
  data = SAMPLE_CHART_DATA,
  isEditable = false,
  onEdit,
  onDelete,
}: BarChartWidgetProps) => {
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
      title={title}
      icon={ChartBarIcon}
      content={Chart}
      isEditable={isEditable}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};

export default BarChartWidget;
