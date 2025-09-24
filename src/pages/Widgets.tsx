import { useState } from "react";
import WidgetList from "@/components/WidgetList.tsx";
import EmptyState from "@/components/EmptyState.tsx";
import SectionHeading from "@/components/SectionHeading.tsx";
import Dropdown from "@/components/Dropdown.tsx";
import {
  useCreateWidgetMutation,
  useDeleteWidgetMutation,
  useFetchWidgets,
  useUpdateWidgetMutation,
} from "@shared/hooksQuery/useWidget";
import Spinner from "@components/Spinner.tsx";
import type { IFormInputs, IWidget } from "@/types";
import EditWidgetModal from "@components/EditWidgetModal.tsx";
import { useForm } from "react-hook-form";
import { generateChartData } from "@shared/utils";

const Widgets = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingWidget, setEditingWidget] = useState<IWidget | null>(null);

  const form = useForm<IFormInputs>();

  const { reset, setFocus } = form;

  const { data: widgets = [], isLoading, error } = useFetchWidgets();
  const createWidgetMutation = useCreateWidgetMutation();
  const updateWidgetMutation = useUpdateWidgetMutation();
  const deleteWidgetMutation = useDeleteWidgetMutation();

  const handleEditWidget = (widget: IWidget) => {
    setEditingWidget(widget);
    reset({
      title: widget?.title || "",
      description: widget?.description || "",
    });

    setTimeout(() => {
      setIsModalOpen(true);
      setFocus("title");
    }, 0);
  };

  const onSaveHandler = (data: IFormInputs) => {
    if (editingWidget?.id) {
      const updatedWidget: IWidget = {
        ...editingWidget,
        title: data.title,
        description: data.description,
      };

      updateWidgetMutation.mutate(updatedWidget);
    }
    setIsModalOpen(false);
  };

  const handleDeleteWidget = (widget: IWidget) => {
    if (widget?.id) {
      deleteWidgetMutation.mutate(widget.id);
    }
  };

  const handleAddWidget = (type: "line-chart" | "bar-chart" | "text") => {
    const widgetTitles = {
      "line-chart": "Line Chart",
      "bar-chart": "Bar Chart",
      text: "Text Widget",
    };

    const data = type !== "text" ? JSON.stringify(generateChartData()) : "";

    const newWidget: IWidget = {
      title: widgetTitles[type],
      description:
        widgetTitles[type] === "text"
          ? " This is a sample text created for demonstration purposes. To customize" +
            " it, please use the menu in the upper-right corner."
          : "",
      type,
      json_data: data,
    };

    createWidgetMutation.mutate(newWidget);
  };

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
        form={form}
      />
    </>
  );
};

export default Widgets;
