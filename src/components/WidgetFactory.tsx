import React from "react";
import BarChartWidget from "./widgets/BarChartWidget";
import LineChartWidget from "./widgets/LineChartWidget";
import TextWidget from "./widgets/TextWidget";
import type { IWidgetConfig } from "@/types";

interface WidgetFactoryProps {
  config: IWidgetConfig;
  onEdit: (config: IWidgetConfig) => void;
  onDelete: (config: IWidgetConfig) => void;
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
  const widgetType = config.type || "text";
  const WidgetComponent = widgetComponents[widgetType];

  if (!WidgetComponent) {
    throw new Error(`Unknown widget type: ${widgetType}`);
  }

  const onEditHandler = () => onEdit(config);
  const onDeleteHandler = () => onDelete(config);

  return (
    <WidgetComponent
      id={config.id || ""}
      title={config.title || "Untitled Widget"}
      isEditable={config.isEditable}
      onEdit={onEditHandler}
      onDelete={onDeleteHandler}
    />
  );
};

export default WidgetFactory;
