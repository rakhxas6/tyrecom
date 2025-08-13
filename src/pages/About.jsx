import aboutUsImg from "../assets/batteries/truck_battery_1_16122024-768x512.jpg";
import Breadcrumb from "../components/BreadCrumb";
import { teamMembers ,ourMission} from "../constants/Product";

const About = () => {
  return (
    <section className="contactPage w-full  mx-auto px-6 py-8 md:px-16 md:py-12 space-y-6">
      <Breadcrumb />

      <div className="headingContainer flex flex-col gap-5">
        <h2 className="font-thin text-3xl  relative">
          About Us{" "}
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-orange-500 rounded"></span>
        </h2>
      </div>

      <div className="aboutCompany grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="about-left overflow-hidden">
          <img
            src={aboutUsImg}
            alt="our company"
            className="about-img hover:scale-105 transition duration-100"
          />
        </div>
        <div className="about-right">
          <h3>ABOUT UNIVERSITY</h3>

          <p>
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education.
          </p>
        </div>
      </div>

      {/* aboutTeamMembers */}
      <div className="aboutTeamMembers flex flex-col justify-center items-center gap-14 ">
        {/* Heading */}
        <div>
          <h3 className="text-3xl font-semibold mb-6 text-gray-800 relative inline-block">
            Leadership
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-500 rounded"></span>
          </h3>
        </div>

        {/* Tier 1 - CEO & President */}
        <div className="about-right grid w-full sm:w-auto gap-8">
          {teamMembers
            .filter((member) =>
              ["ceo", "president"].some((keyword) =>
                member.role.toLowerCase().includes(keyword)
              )
            )
            .map(({ name, role, img }) => (
              <div
                key={name}
                className="team-member flex flex-col items-center bg-white shadow-md p-6  border-r-4 border-orange-500  hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={img}
                  alt={`${name} profile`}
                  className="w-52 h-52 rounded-full object-cover mb-4"
                  loading="lazy"
                />
                <h4 className="text-lg font-medium text-gray-900">{name}</h4>
                <p className="text-sm text-orange-500">{role}</p>
              </div>
            ))}
        </div>

        {/* Tier 2 - Other Leadership Members */}
        <div className="about-right grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {teamMembers
            .filter(
              (member) =>
                !["ceo", "president"].some((keyword) =>
                  member.role.toLowerCase().includes(keyword)
                )
            )
            .map(({ name, role, img }) => (
              <div
                key={name}
                className="team-member flex flex-col items-center bg-white shadow-md p-5  border-r-4 border-orange-500  hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={img}
                  alt={`${name} profile`}
                  className="w-48 h-48 rounded-full object-cover mb-4"
                  loading="lazy"
                />
                <h4 className="text-lg font-medium text-gray-900">{name}</h4>
                <p className="text-sm text-orange-500">{role}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Mission,Vision and Values Section */}
      <div className="aboutMission flex flex-col justify-center items-center gap-14">
        {/* Heading */}
        <div>
          <h3 className="text-3xl font-semibold mb-6 text-gray-800 relative inline-block">
            Our Values
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-500 rounded"></span>
          </h3>
        </div>

        <div className="about-right grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 w-full max-w-6xl">
          {ourMission.map(({ title, desc, image }) => (
            <div
              key={title}
              className="team-member flex flex-col items-center bg-white shadow-md p-5 border-r-4 border-orange-500  hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={image}
                alt={`${title} profile`}
                className="w-48 h-48 rounded-full object-cover mb-4"
                loading="lazy"
              />
              <h4 className="text-lg font-medium text-gray-900">{title}</h4>
              <p className="text-sm text-orange-500 text-center">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
