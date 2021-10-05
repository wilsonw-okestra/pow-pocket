import React, { FC } from "react";
import { BsDot } from "react-icons/bs";
import Image from "next/image";
import bg from "../images/half-circle-bg.png";

const Principles: FC = () => {
  const principles = [
    {
      id: 1,
      title: "Open Technology Integration",
      body: "Pellentesque at libero sed tellus fringilla volutpat. Nullam vulputate velit id augue commodo scelerisque.",
    },
    {
      id: 2,
      title: "Flexibility",
      body: "Pellentesque at libero sed tellus fringilla volutpat. Nullam vulputate velit id augue commodo scelerisque.",
    },
    {
      id: 3,
      title: "Paperless Administration",
      body: "Pellentesque at libero sed tellus fringilla volutpat. Nullam vulputate velit id augue commodo scelerisque.",
    },
    {
      id: 4,
      title: "Optimized Productivity",
      body: "Pellentesque at libero sed tellus fringilla volutpat. Nullam vulputate velit id augue commodo scelerisque.",
    },
    {
      id: 5,
      title: "Maximum Performance",
      body: "Pellentesque at libero sed tellus fringilla volutpat. Nullam vulputate velit id augue commodo scelerisque.",
    },
    {
      id: 6,
      title: "Open Data Accessibility",
      body: "Pellentesque at libero sed tellus fringilla volutpat. Nullam vulputate velit id augue commodo scelerisque.",
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus
          mi id elit gravida, quis tincidunt purus fringilla. Aenean convallis a
          neque non pellentesque.
        </h3>
      </div>
      {/* Bottom Section */}
      <div className="z-10 h-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-5 md:mx-16 py-10 lg:py-12">
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
