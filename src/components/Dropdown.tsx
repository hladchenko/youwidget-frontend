import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ArrowTrendingUpIcon,
  ChartBarIcon,
  ChevronDownIcon,
  DocumentTextIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";

interface DropdownProps {
  onAddWidget: (type: "line-chart" | "bar-chart" | "text") => void;
}

const Dropdown = ({ onAddWidget }: DropdownProps) => {
  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer">
        <PlusIcon aria-hidden="true" className="-ml-0.5 size-5" />
        Add widget
        <ChevronDownIcon
          aria-hidden="true"
          className="-mr-1 size-5 text-white"
        />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-37 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <button
              onClick={() => onAddWidget("line-chart")}
              className="group flex w-full items-center px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden cursor-pointer"
            >
              <ArrowTrendingUpIcon
                aria-hidden="true"
                className="mr-3 size-5 text-gray-400 group-data-focus:text-gray-500"
              />
              Line chart
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => onAddWidget("bar-chart")}
              className="group flex w-full items-center px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden cursor-pointer"
            >
              <ChartBarIcon
                aria-hidden="true"
                className="mr-3 size-5 text-gray-400 group-data-focus:text-gray-500"
              />
              Bar chart
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => onAddWidget("text")}
              className="group flex w-full items-center px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden cursor-pointer"
            >
              <DocumentTextIcon
                aria-hidden="true"
                className="mr-3 size-5 text-gray-400 group-data-focus:text-gray-500"
              />
              Text block
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default Dropdown;
