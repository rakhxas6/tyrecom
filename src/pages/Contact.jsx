import Breadcrumb from "../components/BreadCrumb";
import ContactForm from "../components/ContactForm";
import GoogleMap from "./GoogleMap";
import NewsLetterSection from "./NewsLetterSection";

const Contact = () => {
  return (
    <section className="contactPage w-full px-6 py-8 md:px-16 md:py-12 mx-auto space-y-6 mb-20">
      <Breadcrumb />

      <div className="headingContainer">
        <h2 className="font-thin text-3xl relative">
          Contact us{" "}
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-orange-500 rounded"></span>
        </h2>
      </div>
      <div className="infoSection my-5 space-y-6">
        <div className="contact space-y-2">
          <p className="text-gray-700">
            Every day at Kap’sTyres, we strive to be the best we can be. It’s an
            attitude that keeps us focused on the task at hand, knowing that the
            next challenge is just around the corner. Our ultimate goal is to we
            provide mobile tyre services 24 hours a day, seven days a week.
          </p>
        </div>
        <div className="address space-y-2">
          <h3 className="text-gray-700 text-lg font-bold capitalize">
            address
          </h3>
          <div className="flex flex-col text-gray-700">
            <span className="text-sm md:text-base">35 Lower King St</span>
            <span className="text-sm md:text-base">Caboolture QLD 4510</span>
          </div>
        </div>
        <div className="phoneNo space-y-2">
          <h3 className="text-gray-700 text-lg font-bold capitalize">
            phone no.
          </h3>
          <a
            href="tel:017829421"
            className="underline text-gray-700 hover:text-orange-600 transition-all duration-200 inline-block text-sm md:text-base"
          >
            (01) 7829421
          </a>
        </div>
      </div>
      <ContactForm />
      <NewsLetterSection />
      <GoogleMap/>
    </section>
  );
};

export default Contact;
