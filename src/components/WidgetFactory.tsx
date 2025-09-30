import React from "react";
import BarChartWidget from "./widgets/BarChartWidget";
import LineChartWidget from "./widgets/LineChartWidget";
import TextWidget from "./widgets/TextWidget";
import type { IWidget } from "@/types";

interface WidgetFactoryProps {
  widget: IWidget;
  onEdit: (widget: IWidget) => void;
  onDelete: (widget: IWidget) => void;
  position?: number;
  rowWidgets?: Array<{ position: number; colSpan: number }>;
  gridCols?: number;
  onColSpanChange?: (newColSpan: number) => void;
}

const widgetComponents = {
  "line-chart": LineChartWidget,
  "bar-chart": BarChartWidget,
  text: TextWidget,
};

export const WidgetFactory: React.FC<WidgetFactoryProps> = ({
  widget,
  onEdit,
  onDelete,
  position,
  rowWidgets,
  gridCols,
  onColSpanChange,
}) => {
  const widgetType = widget?.type || "text";
  const WidgetComponent = widgetComponents[widgetType];

  if (!WidgetComponent) {
    throw new Error(`Unknown widget type: ${widgetType}`);
  }

  const onEditHandler = () => onEdit(widget);
  const onDeleteHandler = () => onDelete(widget);

  return (
    <WidgetComponent
      id={widget?.id || ""}
      widget={widget}
      onEdit={onEditHandler}
      onDelete={onDeleteHandler}
      position={position}
      rowWidgets={rowWidgets}
      gridCols={gridCols}
      onColSpanChange={onColSpanChange}
    />
  );
};

export default WidgetFactory;
