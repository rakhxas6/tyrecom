import React from "react";
import ContactForm from "./ContactForm";
import carBattery from "../assets/batteries/car_batteries_1_13122024-768x512.jpg";
import truckBattery from "../assets/batteries/truck_battery_1_16122024-768x512.jpg";
import solarBattery from "../assets/batteries/solar_batteries_2-768x576.jpg";
import bikeBattery from "../assets/batteries/motorcycle_battery_1_16122024-768x511.jpg";
import tractorBattery from "../assets/batteries/tractor_battery_1_16122024-768x512.jpg";
import lithiumBattery from "../assets/batteries/lithium_battery_1_16122024-768x512.jpg";

const Batteries = () => {
  const batteryTypes = [
    { name: "Car Batteries", img: carBattery },
    { name: "Truck Batteries", img: truckBattery },
    { name: "Solar Batteries", img: solarBattery },
    { name: "Motorcycle Batteries", img: bikeBattery },
    { name: "Tractor Batteries", img: tractorBattery },
    { name: "Lithium Batteries", img: lithiumBattery },
  ];

  return (
    <div>
      <section
        className="contactPage w-full max-w-xs sm:max-w-xl md:max-w-5xl mx-auto my-5 sm:my-8 space-y-12"
        style={{ fontFamily: "Quicksand, sans-serif" }}
      >
        <div className="headingContainer flex flex-col gap-5 space-y-5 ">
          <h2 className="font-thin text-3xl flex justify-center items-center">
            Batteries
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {batteryTypes.map((battery) => (
              <div key={battery.name} className="flex flex-col items-center">
                <img
                  src={battery.img}
                  alt={battery.name}
                  className="w-full h-full"
                />
                <span className="font-thin text-xl mt-2">{battery.name}</span>
              </div>
            ))}
          </div>
        </div>

        <ContactForm />
      </section>
    </div>
  );
};

export default Batteries;
