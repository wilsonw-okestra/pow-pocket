import React, { FC } from "react";
import Image from "next/image";
import Logo from "../images/team-2-square.jpg";
import { BsDot } from "react-icons/bs";

const Services: FC = () => {
  const Services = [
    { id: 1, title: "Machine Learning & Artificial Intelligence" },
    { id: 2, title: "Blockchain" },
    { id: 3, title: "Robotic Process Automation" },
    { id: 4, title: "Microservices Architecture" },
  ];
  return (
    <div className="h-full md:h-screen w-full flex flex-col lg:flex-row justify-center">
      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center items-center py-20">
        <Image alt="image" src={Logo} layout="intrinsic" />
      </div>
      {/* Content Section */}
      <div className="lg:w-1/2 font-sans flex flex-col justify-center items-center pb-10 mx-8 md:mx-16">
        <div>
          <h2 className="text-4xl sm:text-5xl mb-5">
            Perfecting operational workflows
            <span className="font-thin ml-2">with leading technologies</span>
          </h2>
          <p className="text-left">
            Lorem ipsum dolor sit met, consectetur adipiscing elit. Aenean
            sodales dictum viverra. Nam gravida dignissim eros. Vivamus congue
            erat ante, volutpat dictum neue dignissim eget.
          </p>
          {/* services list */}
          <ul className="grid grid-cols-2 grid-rows-2 items-center gap-4 pt-5">
            {Services.map((data) => {
              return (
                <div key={data.id} className="flex relative -left-3">
                  <BsDot className="text-4xl h-10" />
                  <li className="flex items-center w-full text-sm font-semibold">
                    {data.title}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
