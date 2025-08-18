import React from "react";
import image from "../assets/choosing-the-right-tire-header.jpg";
import tyreSidewall from "../assets/tyreSideWall.png";
import Breadcrumb from "./BreadCrumb";
import { seasonTyresInfo,tyreInfo } from "../constants/Product";

const Learn = () => {
  

  return (
    <section className="w-full px-6 md:px-16 pt-32 pb-12 mx-auto space-y-6">
      <Breadcrumb />

      {/* Header Image and Title */}
      <header className="relative w-full mx-auto  overflow-hidden shadow-lg">
        <img
          src={image}
          alt="Choosing the right tire"
          className="w-full h-64 sm:h-80 object-cover"
          loading="lazy"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-2xl sm:text-4xl font-bold uppercase bg-black bg-opacity-40 tracking-wide font-jakarta">
          Choosing the Right Tire
        </h1>
      </header>

      {/* Introductory Text */}
      <article className="space-y-4  mx-auto text-center">
        <h2 className="text-xl sm:text-3xl font-semibold font-clash">
          How to Choose the Right Tyre for Your Vehicle?
        </h2>
        <h3 className="text-lg sm:text-2xl font-clash text-orange-600">
          Peak Performance for Every Season
        </h3>
        <p className="text-gray-700 leading-relaxed font-jakarta">
          We stand behind every tire we make, and we want to be sure you select
          the one that’s right for your vehicle and driving conditions. After
          all, a driver in New York needs a very different tire than a driver in
          Nevada. We want to help you buy the right tire for your driving
          conditions, so your rides feel better and your tires last longer.
        </p>
      </article>

      {/* Season Tyres Info */}
      <section className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {seasonTyresInfo.map(({ img, point1, point2, title }, idx) => (
            <article
              key={idx}
              className="flex flex-col items-center text-center space-y-4 p-6 border  shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={img}
                alt={title}
                className="w-32 h-32 object-contain"
                loading="lazy"
              />
              <h4 className="text-xl font-semibold font-clash">{title}</h4>
              <p className="text-gray-700 font-jakarta">{point1}</p>
              <p className="text-gray-700 font-jakarta">{point2}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Get to Know Your Tire Section */}
      <section className="mx-auto space-y-8">
        <header className="space-y-3 text-center mx-auto">
          <h2 className="text-xl md:text-3xl font-semibold font-clash">
            Get to Know Your Tire
          </h2>
          <p className="text-gray-700 font-jakarta">
            Your tire’s sidewall contains a lot of valuable information. Here’s
            how to make sense of it:
          </p>
          <img
            src={tyreSidewall}
            alt="Sidewall containing vital information"
            className="w-full mx-auto object-contain"
            loading="lazy"
          />
        </header>

        {/* Tire Glossary */}
        <div className="space-y-10 mx-auto">
          {tyreInfo.map(({ term, description, image }, idx) => (
            <section
              key={idx}
              className="space-y-3 border-b pb-6 last:pb-0 last:border-none"
            >
              <h3 className="text-2xl font-semibold font-clash">{term}</h3>
              <p className="whitespace-pre-line text-gray-700 font-jakarta">
                {description}
              </p>
              {image && (
                <img
                  src={image}
                  alt={`${term} chart`}
                  className="w-full max-w-lg object-contain shadow mt-4"
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
