import { DocumentTextIcon } from "@heroicons/react/20/solid";
import Widget from "@/components/widgets/Widget.tsx";
import { SAMPLE_TEXT_CONTENT } from "@shared/config/mockData.ts";

interface TextWidgetProps {
  id: string;
  title: string;
  content?: string;
  isEditable?: boolean;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const TextWidget = ({
  id,
  title,
  content = SAMPLE_TEXT_CONTENT,
  isEditable = true,
  onEdit,
  onDelete,
}: TextWidgetProps) => {
  const Text = <div className="m-2 text-sm">{content}</div>;

  return (
    <Widget
      id={id}
      title={title}
      icon={DocumentTextIcon}
      content={Text}
      isEditable={isEditable}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};

export default TextWidget;
