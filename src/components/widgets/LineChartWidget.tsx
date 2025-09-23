import { ArrowTrendingUpIcon } from "@heroicons/react/20/solid";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Widget from "@/components/widgets/Widget.tsx";
import { SAMPLE_LINE_CHART_DATA } from "@shared/constants/mockData";
import type { ChartDataPoint } from "@/types";

interface LineChartWidgetProps {
  id: string;
  title: string;
  data?: ChartDataPoint[];
  isEditable?: boolean;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const LineChartWidget = ({
  id,
  title,
  data = SAMPLE_LINE_CHART_DATA,
  isEditable = false,
  onEdit,
  onDelete,
}: LineChartWidgetProps) => {
  const Chart = (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
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
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <Widget
      id={id}
      title={title}
      icon={ArrowTrendingUpIcon}
      content={Chart}
      isEditable={isEditable}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};

export default LineChartWidget;
