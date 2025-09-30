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
import type { IWidget } from "@/types";
import { getChartDataFromJson } from "@shared/utils";

interface LineChartWidgetProps {
  id: string;
  widget: IWidget;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  position?: number;
  rowWidgets?: Array<{ position: number; colSpan: number }>;
  gridCols?: number;
  onColSpanChange?: (newColSpan: number) => void;
}

const LineChartWidget = ({
  id,
  widget,
  onEdit,
  onDelete,
  position,
  rowWidgets,
  gridCols,
  onColSpanChange,
}: LineChartWidgetProps) => {
  const data = getChartDataFromJson(widget?.json_data);
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
      title={widget?.title}
      icon={ArrowTrendingUpIcon}
      content={Chart}
      isEditable={false}
      onEdit={onEdit}
      onDelete={onDelete}
      position={position}
      rowWidgets={rowWidgets}
      gridCols={gridCols}
      onColSpanChange={onColSpanChange}
    />
  );
};

export default LineChartWidget;
