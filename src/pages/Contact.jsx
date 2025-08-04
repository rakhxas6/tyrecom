import React from "react";
import contactUsImg from "../assets/image30.png";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section
      className="contactPage w-full max-w-xs sm:max-w-xl md:max-w-5xl mx-auto my-5 sm:my-8"
      style={{ fontFamily: "Quicksand, sans-serif" }}
    >
      <div className="headingContainer flex flex-col gap-5 border-b border-gray-300">
        <h2 className="font-thin text-3xl">Contact us</h2>
        <img
          src={contactUsImg}
          alt="contact us demo for now"
          className="mb-6"
          srcset=""
        />
      </div>
      <div className="infoSection my-5 space-y-6">
        <div className="contact space-y-2">
          <h1 className="text-2xl font-serif tracking-widest">contact us</h1>

          <p className="text-slate-500">
            Every day at Kap’sTyres, we strive to be the best we can be. It’s an
            attitude that keeps us focused on the task at hand, knowing that the
            next challenge is just around the corner. Our ultimate goal is to we
            provide mobile tyre services 24 hours a day, seven days a week.
          </p>
        </div>
        <div className="address space-y-2">
          <h3 className="text-[#8d8b8b] text-lg font-bold capitalize">
            address
          </h3>
          <div className="flex flex-col text-slate-500">
            <span className="text-sm md:text-base">35 Lower King St</span>
            <span className="text-sm md:text-base">Caboolture QLD 4510</span>
          </div>
        </div>
        <div className="phoneNo space-y-2">
          <h3 className="text-[#8d8b8b] text-lg font-bold capitalize">
            phone no.
          </h3>
          <a
            href="tel:017829421"
            className="underline text-slate-500 hover:text-orange-600 transition-all duration-200 inline-block text-sm md:text-base"
          >
            (01) 7829421
          </a>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
