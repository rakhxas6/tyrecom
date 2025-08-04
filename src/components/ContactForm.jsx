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
    <div className="formSection space-y-4">
      <h2 className="text-3xl tracking-widest">Contact me</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-full max-w-sm sm:max-w-lg md:max-w-5xl mx-auto my-5 sm:my-8 text-[#8d8b8b]"
      >
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="flex gap-2">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            className="px-4 py-2 border border-gray-300 "
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="flex gap-2">
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
            className="px-4 py-2 border border-gray-300 "
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Phone with validation */}
        <div className="flex flex-col gap-1">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Phone number must be exactly 10 digits",
              },
            })}
            className="px-4 py-2 border border-gray-300"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            {...register("message")}
            className="px-4 py-2 border border-gray-300 "
            rows={4}
          />
        </div>

        {/* Submit */}
        <input
          type="submit"
          value="Send Us Message"
          className="mt-4 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold transition duration-300 shadow-md"
        />
      </form>
    </div>
  );
};

export default ContactForm;
