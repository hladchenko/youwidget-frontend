import React from "react";
import BarChartWidget from "./widgets/BarChartWidget";
import LineChartWidget from "./widgets/LineChartWidget";
import TextWidget from "./widgets/TextWidget";
import type { WidgetConfig } from "@/types";

interface WidgetFactoryProps {
  config: WidgetConfig;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const widgetComponents = {
  "line-chart": LineChartWidget,
  "bar-chart": BarChartWidget,
  text: TextWidget,
} as const;

export const WidgetFactory: React.FC<WidgetFactoryProps> = ({
  config,
  onEdit,
  onDelete,
}) => {
  const WidgetComponent = widgetComponents[config.type];

  if (!WidgetComponent) {
    throw new Error(`Unknown widget type: ${config.type}`);
  }

  return (
    <WidgetComponent
      id={config.id}
      title={config.title}
      isEditable={config.isEditable}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};

export default WidgetFactory;
