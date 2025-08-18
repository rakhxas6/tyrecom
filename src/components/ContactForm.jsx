import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-full bg-gradient-to-b from-orange-50 to-white py-6 sm:py-12 px-6 sm:px-8 lg:px-16 font-jakarta">
      <div className=" mb-8">
        <h2 className="text-2xl sm:text-4xl font-bold tracking-wide text-gray-800 relative inline-block font-clash">
          Get in Touch
          <span className="absolute -bottom-2  left-0 w-20 h-1 bg-orange-500 rounded"></span>
        </h2>
        <p className="mt-4 text-sm text-gray-700 max-w-xl font-jakarta">
          Have any questions or suggestions? Fill out the form and we’ll get
          back to you as soon as possible.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700"
      >
        {/* Name */}
        <div className="flex flex-col gap-1 font-jakarta">
          <label htmlFor="name" className="font-semibold ">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            className="px-4 py-3 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email format",
              },
            })}
            className="px-4 py-3 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="font-semibold">
            Phone<span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Phone number must be exactly 10 digits",
              },
            })}
            className="px-4 py-3 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1 md:col-span-2">
          <label htmlFor="message" className="font-semibold">
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={5}
            className="px-4 py-3 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 ">
          <button
            type="submit"
            className="w-full sm:w-auto mt-4 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold  shadow-lg transition duration-300 transform hover:-translate-y-1"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
