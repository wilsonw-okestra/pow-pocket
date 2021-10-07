import React, { FC } from "react";
import Image from "next/image";
import Logo from "../images/mobile-app.png";
import { BsDot } from "react-icons/bs";
import bg from "../images/bg-4.png";

const Services: FC = () => {
  const Services = [
    { id: 1, title: "Data Analytics" },
    { id: 2, title: "Blockchain" },
    { id: 3, title: "Workflow Process Automation" },
    { id: 4, title: "Microservices Architecture" },
  ];
  return (
    <div className="h-full md:h-screen w-full font-sand flex flex-col lg:flex-row justify-center my-20 lg:my-0">
      {/* background */}
      <div className="z-0 opacity-20 absolute w-full overflow-hidden">
        <Image src={bg} alt="" height="600" layout="fixed" />
      </div>
      {/* Image Section */}
      <div className="z-10 h-full w-full lg:w-1/2 flex justify-center items-center">
        <Image alt="image" src={Logo} layout="intrinsic" />
      </div>
      {/* Content Section */}
      <div className="z-10 lg:w-1/2 flex flex-col justify-center items-center pb-10 mx-12 md:mx-16">
        <div>
          <h2 className="text-4xl sm:text-5xl mb-5 font-lato">
            Perfecting operational workflows
            <span className="font-thin ml-2">with leading technologies</span>
          </h2>
          <p className="text-left">
            We build our solutions with the most reliable tools available. We
            also keep up-to-date with the latest developments in technology and
            have incorporated the following technologies in our solutions:
          </p>
          {/* services list */}
          <ul className="grid grid-cols-2 grid-rows-2 items-center gap-4 pt-5">
            {Services.map((data) => {
              return (
                <div key={data.id} className="flex relative -left-3">
                  <BsDot className="text-4xl h-10" />
                  <li className="flex items-center w-full text-base font-semibold">
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
