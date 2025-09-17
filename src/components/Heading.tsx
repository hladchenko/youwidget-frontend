import React from "react";

interface HeadingProps {
  pageName: string;
  action?: React.ReactNode;
}

const Heading = ({ pageName, action }: HeadingProps) => {
  return (
    <div className="border-b border-gray-200 mb-10 sm:flex sm:items-center sm:justify-between h-20">
      <h3 className="text-base font-semibold text-gray-900">{pageName}</h3>
      {action && <div className="mt-3 sm:mt-0 sm:ml-4">{action}</div>}
    </div>
  );
};

export default Heading;
