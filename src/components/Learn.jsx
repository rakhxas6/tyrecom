import React from "react";
import image from "../assets/choosing-the-right-tire-header.jpg";
import allSeason from "../assets/allSeason.png";
import Winter from "../assets/winter.png";
import Summer from "../assets/summer.png";
import tyreSidewall from "../assets/tyreSideWall.png";
import loadIndexChart from "../assets/load-index-chart.png";
import Breadcrumb from "./BreadCrumb";

const Learn = () => {
  const seasonTyresInfo = [
    {
      img: allSeason,
      point1:
        "Perform best in warm weather conditions and reliably in moderate winter conditions.",
      point2:
        "Not ideal for those who live where the winters are consistently harsh.",
      title: "All Season Tyres",
    },
    {
      img: Winter,
      point1:
        "Designed specifically for icy, cold, snowy, wet conditions, but also work well in dry conditions.",
      point2:
        "Should be removed when the ambient temperature is consistently above 45 degrees F.",
      title: "Winter Tyres",
    },
    {
      img: Summer,
      point1: "Designed to perform in warm weather.",
      point2: "Should be removed if it’s consistently below 45 degrees F.",
      title: "Summer Tyres",
    },
  ];

  const tyreInfo = [
    {
      term: "Tire Width",
      description: "Refers to the overall width of the tire in millimeters.",
    },
    {
      term: "Aspect Ratio",
      description:
        "The relationship between the tire height and width. In this example, the tire height is approximately 60% of the tire width.",
    },
    {
      term: "Radial",
      description:
        "The letter “R” indicates a radial construction of the carcass plies. In a radial tire, the carcass plies run across the tire from lip to lip, helping to provide strength, stability, flexibility, and ride comfort.",
    },
    {
      term: "Wheel Diameter",
      description:
        "The number indicates that this tire fits on a wheel with a 16-inch diameter.",
    },
    {
      term: "Load Index",
      description:
        "The load index can range from 0 to 279 and indicates how much weight the tire is certified to carry at maximum inflation pressure. Never buy a tire with a lower load index than your vehicle’s original tire. To determine your tire’s load capacity, refer to the load index chart.",
      image: loadIndexChart,
    },
    {
      term: "Speed Rating*",
      description:
        "This is the highest speed at which the tire can operate. Speed ratings range from Q (lowest) to Z (highest) with one exception: the H rating falls between U and V.\n\nTo maintain the speed capability of a vehicle, use replacement tires with ratings equal to or greater than those of the original tires.",
    },
    {
      term: "Mud & Snow",
      description:
        "The letters M and S indicate that this tire meets the Rubber Manufacturers Association's standards for a mud and snow tire, making it an all-season tire. The letters can be found in the following combinations: M+S, M/S and M&S.\n\nNote that a separate, severe snow marking appears on winter tires that are designated for severe snow applications.",
    },
    {
      term: "*Note",
      description:
        "Exceeding the safe, legal speed limit is neither recommended nor endorsed.",
    },
  ];

  return (
    <section className="w-full  md:px-24 md:py-16 mx-auto px-12 py-8 space-y-5">
      <Breadcrumb />

      {/* Header Image and Title */}
      <header className="relative w-full mx-auto max-w-5xl  overflow-hidden shadow-lg">
        <img
          src={image}
          alt="Choosing the right tire"
          className="w-full h-64 sm:h-80 object-cover"
          loading="lazy"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-2xl sm:text-4xl font-bold uppercase bg-black bg-opacity-40 tracking-wide">
          Choosing the Right Tire
        </h1>
      </header>

      {/* Introductory Text */}
      <article className="space-y-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold">
          How to Choose the Right Tyre for Your Vehicle
        </h2>
        <h3 className="text-2xl font-semibold text-orange-600">
          Peak Performance for Every Season
        </h3>
        <p className="text-gray-700 leading-relaxed">
          We stand behind every tire we make, and we want to be sure you select
          the one that’s right for your vehicle and driving conditions. After
          all, a driver in New York needs a very different tire than a driver in
          Nevada. We want to help you buy the right tire for your driving
          conditions, so your rides feel better and your tires last longer.
        </p>
      </article>

      {/* Season Tyres Info */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {seasonTyresInfo.map(({ img, point1, point2, title }, idx) => (
            <article
              key={idx}
              className="flex flex-col items-center text-center space-y-4 p-6 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={img}
                alt={title}
                className="w-32 h-32 object-contain"
                loading="lazy"
              />
              <h4 className="text-xl font-semibold">{title}</h4>
              <p className="text-gray-700">{point1}</p>
              <p className="text-gray-700">{point2}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Get to Know Your Tire Section */}
      <section className="max-w-6xl mx-auto space-y-8">
        <header className="space-y-3 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Get to Know Your Tire</h2>
          <p className="text-gray-700">
            Your tire’s sidewall contains a lot of valuable information. Here’s
            how to make sense of it:
          </p>
          <img
            src={tyreSidewall}
            alt="Sidewall containing vital information"
            className="w-full max-w-md sm:max-w-2xl mx-auto object-contain rounded-md shadow"
            loading="lazy"
          />
        </header>

        {/* Tire Glossary */}
        <div className="space-y-10 max-w-4xl mx-auto">
          {tyreInfo.map(({ term, description, image }, idx) => (
            <section
              key={idx}
              className="space-y-3 border-b pb-6 last:border-none"
            >
              <h3 className="text-2xl font-semibold">{term}</h3>
              <p className="whitespace-pre-line text-gray-700">{description}</p>
              {image && (
                <img
                  src={image}
                  alt={`${term} chart`}
                  className="w-full max-w-lg  object-contain shadow mt-4"
                  loading="lazy"
                />
              )}
            </section>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Learn;
