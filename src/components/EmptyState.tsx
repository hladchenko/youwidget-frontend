import { PlusIcon } from "@heroicons/react/20/solid";
import { Squares2X2Icon } from "@heroicons/react/24/outline";

const EmptyState = () => {
  return (
    <div className="text-center">
      <Squares2X2Icon className="mx-auto size-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-semibold text-gray-900">No widgets</h3>
      <p className="mt-1 text-sm text-gray-500">
        Get started by creating a new widget.
      </p>
      <div className="mt-6">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
        >
          <PlusIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5" />
          New Widget
        </button>
      </div>
    </div>
  );
};

export default EmptyState;
