import React, { useState, useEffect } from "react";
import WidgetFactory from "./WidgetFactory";
import type { IWidget } from "@/types";

interface WidgetListProps {
  widgets: IWidget[];
  onEditWidget: (widget: IWidget) => void;
  onDeleteWidget: (widget: IWidget) => void;
}

interface WidgetPosition {
  id: string;
  position: number;
  colSpan: number;
}

const WidgetList: React.FC<WidgetListProps> = ({
  widgets,
  onEditWidget,
  onDeleteWidget,
}) => {
  const [widgetPositions, setWidgetPositions] = useState<
    Map<string, WidgetPosition>
  >(new Map());
  const gridCols = 3;

  useEffect(() => {
    // Calculate positions for each widget
    const positions = new Map<string, WidgetPosition>();
    let currentPosition = 0;

    widgets.forEach((widget) => {
      if (widget?.id) {
        positions.set(widget.id, {
          id: widget.id,
          position: currentPosition % gridCols,
          colSpan: 1,
        });
        currentPosition++;
      }
    });

    setWidgetPositions(positions);
  }, [widgets]);

  const handleColSpanChange = (widgetId: string, newColSpan: number) => {
    setWidgetPositions((prev) => {
      const updated = new Map(prev);
      const current = updated.get(widgetId);
      if (current) {
        updated.set(widgetId, { ...current, colSpan: newColSpan });
      }
      return updated;
    });
  };

  const getRowWidgets = (
    widgetId: string,
  ): Array<{ position: number; colSpan: number }> => {
    const currentWidget = widgetPositions.get(widgetId);
    if (!currentWidget) return [];

    // Find all widgets in the same row
    const currentRow = Math.floor(
      Array.from(widgetPositions.values()).findIndex((w) => w.id === widgetId) /
        gridCols,
    );

    return Array.from(widgetPositions.values())
      .filter((_, index) => Math.floor(index / gridCols) === currentRow)
      .map((w) => ({ position: w.position, colSpan: w.colSpan }));
  };

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
    >
      {widgets.map((widget) => {
        const widgetId = widget?.id || "";
        const currentPosition = widgetPositions.get(widgetId);

        return (
          <WidgetFactory
            key={widgetId}
            widget={widget}
            onEdit={onEditWidget}
            onDelete={onDeleteWidget}
            position={currentPosition?.position ?? 0}
            rowWidgets={getRowWidgets(widgetId)}
            gridCols={gridCols}
            onColSpanChange={(newColSpan) =>
              handleColSpanChange(widgetId, newColSpan)
            }
          />
        );
      })}
    </ul>
  );
};

export default WidgetList;
