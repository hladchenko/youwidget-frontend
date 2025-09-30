import { DocumentTextIcon } from "@heroicons/react/20/solid";
import Widget from "@/components/widgets/Widget.tsx";
import type { IWidget } from "@/types";

interface TextWidgetProps {
  id: string;
  widget: IWidget;
  content?: string;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  position?: number;
  rowWidgets?: Array<{ position: number; colSpan: number }>;
  gridCols?: number;
  onColSpanChange?: (newColSpan: number) => void;
}

const TextWidget = ({
  id,
  widget,
  onEdit,
  onDelete,
  position,
  rowWidgets,
  gridCols,
  onColSpanChange,
}: TextWidgetProps) => {
  const Text = (
    <div className="m-2 text-sm">
      {widget?.description || "No description available"}
    </div>
  );

  return (
    <Widget
      id={id}
      title={widget?.title}
      icon={DocumentTextIcon}
      content={Text}
      isEditable={true}
      onEdit={onEdit}
      onDelete={onDelete}
      position={position}
      rowWidgets={rowWidgets}
      gridCols={gridCols}
      onColSpanChange={onColSpanChange}
    />
  );
};

export default TextWidget;
