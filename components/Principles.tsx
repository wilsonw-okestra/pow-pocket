import React, { FC } from "react";
import { BsDot } from "react-icons/bs";
import Image from "next/image";
import bg from "../images/half-circle-bg.png";

const Principles: FC = () => {
  const principles = [
    {
      id: 1,
      title: "Open Integration, Ecosystem Focused",
      body: "We believe that our solutions should be as easily integrated as possible with other third party systems. As we recognise that no system can stand on its own, we build our solutions to fulfil not just mere system and project requirements, but also to be open for integration with other systems in the ecosystem.",
    },
    {
      id: 2,
      title: "Agile Driven, Fully Adaptable",
      body: "We are strong proponents of the Agile Manifesto, and our Agile driven culture permeates throughout our interactions with our clients and partners where we emphasise on collaborative development and adaptability.",
    },
    {
      id: 3,
      title: "Always Optimizing Operational Workflows",
      body: "We maintain a razor-sharp focus on maximizing potential and generation of value through optimization of operational processes. A critical component at all levels of system development, optimization of workflows and processes will directly lead to an improvement of overall output. With this in mind, we build our systems not just to improve user experience for the customer but also to reduce operational friction and administrative burden.",
    },
  ];
  return (
    <div className="h-full lg:h-screen w-screen flex flex-col justify-center items-evenly from-blue-900 bg-blue-600 bg-gradient-to-tr text-white overflow-hidden relative">
      {/* background */}
      <div className="z-0 opacity-50 absolute -top-96 w-screen flex justify-center overflow-hidden">
        <Image src={bg} alt="" layout="fixed" />
      </div>
      {/* Top Section */}
      <div className="z-10 flex flex-col justify-center items-center text-center mx-5 xl:mx-80 py-10 gap-5">
        <h2 className="text-4xl sm:text-5xl font-bold">Our Core Principles</h2>
        <h3 className="text-lg sm:text-xl">
          We adhere to a set of core principles which sets our culture and guide
          our every decision and interaction with our customers and partners.
        </h3>
      </div>
      {/* Bottom Section */}
      <div className="z-10 h-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-20 md:mx-16 py-10 lg:py-12">
        {/* grid item */}
        {principles.map((data) => {
          return (
            <div
              key={data.id}
              className="flex w-full h-full px-4 py-12 md:py-8 bg-white bg-opacity-5 rounded-xl shadow-lg"
            >
              <div>
                <BsDot className="text-4xl h-10 relative -top-1.5" />
              </div>
              <div className="flex flex-col items-start gap-2">
                <h2 className="w-full text-xl font-semibold">{data.title}</h2>
                <p>{data.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Principles;
