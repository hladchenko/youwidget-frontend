import { Squares2X2Icon } from "@heroicons/react/24/outline";

const EmptyState = () => {
  return (
    <div className="text-center">
      <Squares2X2Icon className="mx-auto size-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-semibold text-gray-900">No widgets</h3>
      <p className="mt-1 text-sm text-gray-500">
        Get started by creating a new widget.
      </p>
    </div>
  );
};

export default EmptyState;
