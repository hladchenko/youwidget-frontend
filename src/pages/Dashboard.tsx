import React, { useCallback, useState } from "react";
import WidgetList from "@/components/WidgetList.tsx";
import EmptyState from "@/components/EmptyState.tsx";
import SectionHeading from "@/components/SectionHeading.tsx";
import Dropdown from "@/components/Dropdown.tsx";
import {
  useCreateWidgetMutation,
  useDeleteWidgetMutation,
  useFetchWidgets,
} from "@shared/hooksQuery/useWidget";
import Spinner from "@components/Spinner.tsx";
import type { IWidget } from "@/types";
import EditWidgetModal from "@components/EditWidgetModal.tsx";

const Dashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: widgets = [], isLoading, error } = useFetchWidgets();
  const createWidgetMutation = useCreateWidgetMutation();
  const deleteWidgetMutation = useDeleteWidgetMutation();

  const handleEditWidget = (id: string) => {
    setIsModalOpen(true);
    console.warn(`Edit widget ${id} - Not implemented`);
  };

  const onSaveHandler = () => {
    console.log("Saving widget data");
    setIsModalOpen(false);
  };

  const handleDeleteWidget = useCallback(
    (id: string) => {
      deleteWidgetMutation.mutate(id);
    },
    [deleteWidgetMutation],
  );

  const handleAddWidget = useCallback(
    (type: "line-chart" | "bar-chart" | "text") => {
      const widgetTitles = {
        "line-chart": "Line Chart",
        "bar-chart": "Bar Chart",
        text: "Text Widget",
      };

      const newWidget: IWidget = {
        title: widgetTitles[type],
        description: `A ${widgetTitles[type].toLowerCase()} for data visualization`,
        type: type,
      };

      createWidgetMutation.mutate(newWidget);
    },
    [createWidgetMutation],
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-red-600">
          <Spinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-red-600">
          Error loading widgets: {error.message}
        </div>
      </div>
    );
  }

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
      <EditWidgetModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        handleOnSave={onSaveHandler}
      />
    </>
  );
};

export default Dashboard;
