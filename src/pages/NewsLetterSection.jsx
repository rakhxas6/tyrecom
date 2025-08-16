import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const NewsLetterSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "", // Your EmailJS service ID
        "", // Your template ID
        form.current,
        "" // Your public key
      )
      .then(
        () => {
          toast.success("Thanks for subscribing! 🎉");
          form.current.reset();
        },
        () => {
          toast.error("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="newsletter bg-gradient-to-b from-red-50 to-white py-12 px-6 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className=" text-xl md:text-3xl font-bold text-gray-700 mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-lg">
          Get the latest updates, offers, and community news directly in your
          inbox.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            name="user_email"
            required
            placeholder="Enter your email"
            aria-label="Email Address"
            className="w-full px-8 py-3  border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className=" px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold  shadow-lg transition duration-300 transform hover:-translate-y-1"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetterSection;
