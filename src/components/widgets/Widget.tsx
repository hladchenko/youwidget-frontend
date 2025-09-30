import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

interface WidgetProps {
  id: string;
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
  isEditable?: boolean;
  height?: string;
  colSpan?: number;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  position?: number;
  rowWidgets?: Array<{ position: number; colSpan: number }>;
  gridCols?: number;
  onColSpanChange?: (newColSpan: number) => void;
}

const Widget = ({
  id,
  title,
  icon: Icon,
  content,
  isEditable = false,
  height = "h-64",
  colSpan: initialColSpan = 1,
  onEdit,
  onDelete,
  position = 0,
  rowWidgets = [],
  gridCols = 3,
  onColSpanChange,
}: WidgetProps) => {
  const [colSpan, setColSpan] = useState(initialColSpan);

  const canExpand = (newColSpan: number): boolean => {
    // Calculate the end position if we expand
    const currentEndPosition = position + colSpan;
    const newEndPosition = position + newColSpan;

    // Check if expansion exceeds grid columns
    if (newEndPosition > gridCols) {
      return false;
    }

    // Check if there's another widget occupying the space to the right
    const hasWidgetToRight = rowWidgets.some((widget) => {
      // Skip current widget
      if (widget.position === position) return false;

      const widgetStart = widget.position;
      const widgetEnd = widget.position + widget.colSpan;

      // Check if this widget overlaps with our expansion area
      return (
        (widgetStart >= currentEndPosition && widgetStart < newEndPosition) ||
        (widgetEnd > currentEndPosition && widgetEnd <= newEndPosition)
      );
    });

    return !hasWidgetToRight;
  };

  const onPlusClickHandler = () => {
    const newColSpan = Math.min(colSpan + 1, 3);
    if (!canExpand(newColSpan)) {
      return;
    }
    setColSpan(newColSpan);
    onColSpanChange?.(newColSpan);
  };
  const onMinusClickHandler = () => {
    setColSpan((prev) => Math.max(prev - 1, 1));
  };

  const getColSpanClass = (span: number) => {
    switch (span) {
      case 1:
        return "col-span-1";
      case 2:
        return "col-span-2";
      case 3:
        return "col-span-3";
      default:
        return "col-span-1";
    }
  };

  return (
    <li
      className={`overflow-hidden rounded-xl outline outline-gray-200 ${getColSpanClass(colSpan)}`}
    >
      <div className="flex items-center gap-x-3 border-b border-gray-900/5 bg-gray-50 p-3">
        <Icon
          aria-hidden="true"
          className="flex-none size-6 text-indigo-500 group-data-focus:text-gray-500"
        />
        <div className="text-sm/6 font-medium text-gray-900">{title}</div>
        <div className="flex gap-0.5 ml-auto text-gray-500">
          <PlusCircleIcon
            className="size-6 cursor-pointer"
            onClick={onPlusClickHandler}
          />
          <MinusCircleIcon
            className="size-6 cursor-pointer"
            onClick={onMinusClickHandler}
          />
        </div>
        <Menu as="div" className="relative">
          <MenuButton className="relative block text-gray-400 hover:text-gray-500 cursor-pointer">
            <span className="absolute -inset-2.5" />
            <span className="sr-only">Open options</span>
            <EllipsisHorizontalIcon aria-hidden="true" className="size-5" />
          </MenuButton>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg outline-1 outline-gray-900/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            {isEditable && (
              <MenuItem>
                <button
                  onClick={() => onEdit?.(id)}
                  className="block w-full text-left px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden cursor-pointer"
                >
                  Edit
                </button>
              </MenuItem>
            )}
            <MenuItem>
              <button
                onClick={() => onDelete?.(id)}
                className="block w-full text-left px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden cursor-pointer"
              >
                Delete
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
      <div className={`flex-1 p-1 ${height} text-xs bg-white`}>{content}</div>
    </li>
  );
};

export default Widget;
