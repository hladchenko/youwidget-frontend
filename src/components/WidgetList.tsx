import React from "react";
import WidgetFactory from "./WidgetFactory";
import type { IWidget } from "@/types";

interface WidgetListProps {
  widgets: IWidget[];
  onEditWidget: (widget: IWidget) => void;
  onDeleteWidget: (widget: IWidget) => void;
}

const WidgetList: React.FC<WidgetListProps> = ({
  widgets,
  onEditWidget,
  onDeleteWidget,
}) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
    >
      {widgets.map((widget) => (
        <WidgetFactory
          key={widget?.id}
          widget={widget}
          onEdit={onEditWidget}
          onDelete={onDeleteWidget}
        />
      ))}
    </ul>
  );
};

export default WidgetList;
