import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import React from "react";

interface WidgetProps {
  id: string;
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
  isEditable?: boolean;
  height?: string;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const Widget = ({
  id,
  title,
  icon: Icon,
  content,
  isEditable = false,
  height = "h-64",
  onEdit,
  onDelete,
}: WidgetProps) => {
  return (
    <li className="overflow-hidden rounded-xl outline outline-gray-200">
      <div className="flex items-center gap-x-3 border-b border-gray-900/5 bg-gray-50 p-3">
        <Icon
          aria-hidden="true"
          className="flex-none size-6 text-indigo-500 group-data-focus:text-gray-500"
        />
        <div className="text-sm/6 font-medium text-gray-900">{title}</div>
        <Menu as="div" className="relative ml-auto">
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
