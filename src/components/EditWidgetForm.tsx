import { useForm } from "react-hook-form";

const EditWidgetForm = () => {
  type Inputs = {
    title: string;
    text: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (values: Inputs) => {
    console.log(values);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                {...register("title", { required: true })}
              />
            </div>
            <p className="mt-2">
              {errors.title && <span>This field is required</span>}
            </p>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="text"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Text
            </label>
            <div className="mt-2">
              <textarea
                id="text"
                rows={3}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                defaultValue={""}
                {...register("text")}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditWidgetForm;
