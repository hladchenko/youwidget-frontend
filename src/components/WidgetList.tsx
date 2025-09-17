import React from "react";
import WidgetFactory from "./WidgetFactory";
import type { WidgetConfig } from "@/types";

interface WidgetListProps {
  widgets: WidgetConfig[];
  onEditWidget?: (id: string) => void;
  onDeleteWidget?: (id: string) => void;
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
      {widgets.map((config) => (
        <WidgetFactory
          key={config.id}
          config={config}
          onEdit={onEditWidget}
          onDelete={onDeleteWidget}
        />
      ))}
    </ul>
  );
};

export default WidgetList;
