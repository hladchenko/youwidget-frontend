import { DocumentTextIcon } from "@heroicons/react/20/solid";
import Widget from "@/components/widgets/Widget.tsx";
import type { IWidget } from "@/types";

interface TextWidgetProps {
  id: string;
  widget: IWidget;
  content?: string;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const TextWidget = ({ id, widget, onEdit, onDelete }: TextWidgetProps) => {
  const Text = (
    <div className="m-2 text-sm">
      {widget?.description ? widget?.description : <span className=""></span>}
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
    />
  );
};

export default TextWidget;
