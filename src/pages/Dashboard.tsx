import React, { useState, useCallback } from "react";
import WidgetList from "@/components/WidgetList.tsx";
import EmptyState from "@/components/EmptyState.tsx";
import SectionHeading from "@/components/SectionHeading.tsx";
import Dropdown from "@/components/Dropdown.tsx";
import { WIDGET_CONFIGS } from "@shared/constants/mockData";
import type { WidgetConfig } from "@/types";

const Dashboard: React.FC = () => {
  const [widgets, setWidgets] = useState<WidgetConfig[]>(WIDGET_CONFIGS);

  const handleEditWidget = useCallback((id: string) => {
    // TODO: Implement edit functionality
    console.warn(`Edit widget ${id} - Not implemented`);
  }, []);

  const handleDeleteWidget = useCallback((id: string) => {
    setWidgets((prev) => prev.filter((widget) => widget.id !== id));
  }, []);

  const handleAddWidget = useCallback(
    (type: "line-chart" | "bar-chart" | "text") => {
      const widgetTitles = {
        "line-chart": "Line Chart",
        "bar-chart": "Bar Chart",
        text: "Text Widget",
      };

      const newWidget: WidgetConfig = {
        id: `${type}-${Date.now()}`,
        title: widgetTitles[type],
        type,
        isEditable: true,
      };

      setWidgets((prev) => [...prev, newWidget]);
    },
    [],
  );

  const hasWidgets = widgets.length > 0;

  return (
    <>
      <SectionHeading
        pageName="Widgets"
        action={<Dropdown onAddWidget={handleAddWidget} />}
        count={widgets.length}
      />
      {!hasWidgets ? (
        <EmptyState />
      ) : (
        <WidgetList
          widgets={widgets}
          onEditWidget={handleEditWidget}
          onDeleteWidget={handleDeleteWidget}
        />
      )}
    </>
  );
};

export default Dashboard;
