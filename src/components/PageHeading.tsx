interface HeadingProps {
  pageName: string;
}

const PageHeading = ({ pageName }: HeadingProps) => {
  return (
    <div className="mb-5 mt-6 sm:flex sm:items-center sm:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          {pageName}
        </h2>
      </div>
    </div>
  );
};

export default PageHeading;
