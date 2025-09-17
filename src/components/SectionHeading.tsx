import React from "react";

interface HeadingProps {
  pageName: string;
  action?: React.ReactNode;
  count?: number;
}

const SectionHeading = ({ pageName, action, count = 0 }: HeadingProps) => {
  return (
    <div className="mb-8 sm:flex sm:items-center sm:justify-between">
      <div className="flex items-center gap-x-1.5">
        <h1 className="text-3xl/8 font-bold tracking-tight text-gray-900">
          {pageName}
        </h1>
        {count > 0 && (
          <span
            className={
              "inline-flex items-center justify-center rounded-full font-semibold size-6 text-base bg-indigo-600 text-white shadow-sm mt-[5px]"
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
