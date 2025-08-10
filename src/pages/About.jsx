import aboutUsImg from "../assets/about-us.png";


const About = () => {

    const infoAbout = [
      {
        header: "Effortless Fleet Management with Kap’s Tyres",
        paragraph: `Our mobile tyre services cover a variety of vehicles, including
cars, 4x4s, SUVs, motorcycles, vans, quads, motorhomes, and beyond.
We also serve heavy-duty needs for trucks, construction, agricultural,
industrial, and utility vehicles, accommodating nearly all brands and types of tyres.
We work with individuals, businesses, and communities, providing tailored, top-quality service at every step.
Our team prioritizes staying connected with our clients, ensuring a personalized experience that addresses each unique need.`,
      },
      {
        header: "Kap’s Tyres: Reliable Experts in Tyre Services",
        paragraph: `Combining traditional skills with the latest technology, Kap’s Tyres offers an extensive range of tyres with a focus on safety. With a constantly updated inventory from major brands, we bring quality at competitive prices. Our commitment to expanding our mobile tyre services means that our customers can access an even broader range of services. With a loyal clientele, we’ve implemented strategies to ensure you get the best tyres, prioritizing high safety standards for all.`,
      },
      {
        header: "Staying Ahead with Kap’s Tyres",
        paragraph: `Equipped with advanced tools and technology, we meet the highest safety and quality standards in tyre fitting and replacement. Our status as tyre experts guarantees reliability and enhances your vehicle’s safety. Contact us for an estimate and experience peace of mind with every drive—because safe driving should be accessible and affordable.`,
      },
      {
        header: "Staying Ahead with Kap’s Tyres",
        paragraph: `With years of experience in tyre repair, our professionals provide the best mobile tyre services, ready to advise you on extending the life of your tyres and vehicle. Our services include inspection, puncture repair, onsite fitting, tyre recycling, rotation services, and expert guidance in choosing the right tyres. Whether you need a replacement or a service, count on Kap’s Tyres for excellence.`,
      },
      {
        header: "Our Story",
        paragraph: `Every day at Kap’s Tyres, we strive to be our best. It’s an approach that keeps us focused and prepared for the next challenge. Our unique offering is 24/7 mobile tyre services, keeping customers moving around the clock. With specialized expertise in Off-The-Road tyres, we work with nearly every major tyre brand. We seize every opportunity to keep you on the road, with our sights set on expanding our reach and impact across Australia.`,
      },
    ];



  return (
    <section className="contactPage w-full max-w-xs sm:max-w-xl md:max-w-5xl mx-auto my-5 sm:my-8 space-y-6">
      <div className="headingContainer flex flex-col gap-5">
        <h2 className="font-thin text-3xl  relative">
          About Us{" "}
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-orange-500 rounded"></span>
        </h2>

        {/* <img
          src={aboutUsImg}
          alt="about us demo for now"
          className="mb-6"
          srcset=""
        /> */}
      </div>

      <div className="infoSection space-y-3">
        <p className="text-gray-700">
          At Kap’s Tyres, we’re dedicated to providing top-quality tyres at
          unbeatable prices throughout Australia. Our mission is clear: to
          deliver the ideal combination of quality and value across a wide
          selection of tyres and related services. As motorists shift towards
          more convenient solutions for their tyre needs, we’re here to support
          that journey.
        </p>

        <div className="space-y-10  ">
          {infoAbout.map(({ header, paragraph }, idx) => (
            <section
              key={idx}
              className="space-y-3 border-b pb-6 last:border-none"
            >
              <h3 className="text-2xl font-semibold">{header}</h3>
              <p className="whitespace-pre-line text-gray-700">{paragraph}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
