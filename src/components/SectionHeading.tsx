import React from "react";

interface HeadingProps {
  pageName: string;
  action?: React.ReactNode;
  count?: number;
}

const SectionHeading = ({ pageName, action, count = 0 }: HeadingProps) => {
  return (
    <div className="border-b border-gray-200 mb-10 pb-4 sm:flex sm:items-center sm:justify-between">
      <div className="flex items-center gap-x-1">
        <h3 className="text-base font-semibold text-gray-900">{pageName}</h3>
        {count > 0 && (
          <span
            className={
              "inline-flex items-center justify-center rounded-full font-semibold w-5 h-5 text-xs bg-indigo-600 text-white shadow-sm"
            }
          >
            {count}
          </span>
        )}
      </div>
      {action && <div className="mt-3 sm:mt-0 sm:ml-4">{action}</div>}
    </div>
  );
};

export default SectionHeading;
