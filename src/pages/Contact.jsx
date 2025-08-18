import Breadcrumb from "../components/BreadCrumb";
import ContactForm from "../components/ContactForm";
import GoogleMap from "./GoogleMap";
import NewsLetterSection from "./NewsLetterSection";

const Contact = () => {
  return (
    <section className="contactPage w-full px-6 pt-32 pb-12 md:px-16 mx-auto space-y-6 mb-20">
      <Breadcrumb />

      <div className="headingContainer">
        <h2 className="font-thin text-3xl relative font-clash">
          Contact us{" "}
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-orange-500 rounded"></span>
        </h2>
      </div>
      <div className="infoSection my-5 space-y-6">
        <div className="contact space-y-2">
          <p className="text-gray-700 font-jakarta">
            Every day at Meadow Tyres, we strive to be the best we can be. It’s
            an attitude that keeps us focused on the task at hand, knowing that
            the next challenge is just around the corner. Our ultimate goal is
            to we provide mobile tyre services 24 hours a day, seven days a
            week.
          </p>
        </div>
        <div className="address space-y-1">
          <h3 className="text-xl font-thin font-clash">Address</h3>
          <div className="flex flex-col text-gray-700">
            <span className="font-jakarta">Kalanki, Ring Rd</span>
            <span className="font-jakarta">Kathmandu, Nepal 44600</span>
          </div>
        </div>

        <div className="phoneNo space-y-1">
          <h3 className=" text-lg font-thin font-clash">Phone No.</h3>
          <a
            href="tel:017829421"
            className="hover:text-orange-500 hover:underline transition-all duration-200 inline-block text-gray-700  font-jakarta"
          >
            01-7829421
          </a>
        </div>
      </div>
      <ContactForm />
      <NewsLetterSection />
      <GoogleMap />
    </section>
  );
};

export default Contact;
