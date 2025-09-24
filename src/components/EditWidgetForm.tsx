import { type UseFormReturn } from "react-hook-form";
import type { IFormInputs } from "@/types";
import { classNames } from "@shared/utils";

interface IEditWidgetFormProps {
  form: UseFormReturn<IFormInputs>;
}

const EditWidgetForm = ({ form }: IEditWidgetFormProps) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="w-full">
      <div>
        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2">
          <div>
            <label
              htmlFor="title"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Title
            </label>
            <div className="mt-2">
              <input
                id="title"
                type="text"
                placeholder="Widget Title"
                aria-describedby="title-description"
                className={classNames(
                  errors.title
                    ? "outline-red-600 focus:outline-red-600"
                    : "outline-gray-300 focus:outline-indigo-600",
                  "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6",
                )}
                {...register("title", { required: true })}
              />
            </div>
            <p className="mt-1">
              {errors.title && (
                <p id="email-error" className="text-sm text-red-600">
                  This field is required.
                </p>
              )}
            </p>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="description"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Text
            </label>
            <div className="mt-2">
              <textarea
                id="description"
                rows={3}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                defaultValue={""}
                {...register("description")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditWidgetForm;
