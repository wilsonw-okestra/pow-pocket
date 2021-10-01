/* eslint-disable react/jsx-key */
import React, { FC } from "react";
import Image from "next/image";
import Health from "../images/icon-2.svg";
import Finance from "../images/icon-24.svg";

const Solutions: FC = () => {
  const card = [
    {
      id: 1,
      image: Health,
      title: "Healthcare Technology",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, illo?",
      link: "/",
    },
    {
      id: 2,
      image: Finance,
      title: "Financial Services Technology",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, illo?",
      link: "/",
    },
  ];
  return (
    <div
      id="solutions"
      className="h-full md:h-screen w-full flex flex-col lg:flex-row justify-center bg-gray-50"
    >
      {/* Text Content */}
      <div className="lg:w-1/2 font-sans flex flex-col justify-center items-center my-20 md:my-10 mx-10">
        <div>
          <h2 className="text-4xl sm:text-5xl mb-4">Our Solutions</h2>
          <h3 className="text-base sm:text-lg font-semibold mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            sodales dictum viverra.
          </h3>
          <p className="text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            sodales dictm viverra. Nam gravida dignissim eros. Vivamus congue
            erat ante, volutpat dactuneqe dignissim eget.
          </p>
        </div>
      </div>
      {/* cards */}
      <div
        id="card-container"
        className="lg:w-1/2 flex flex-col md:flex-row justify-center items-center gap-5 mb-20 md:my-10 mx-10"
      >
        {card.map((data) => {
          return (
            <div className="bg-white gap-3 flex flex-col justify-center items-center w-72 h-80 px-1 rounded-2xl text-center shadow-xl">
              <div className="w-20">
                <Image src={data.image} alt="image" layout="intrinsic" />
              </div>
              <h3 className="text-lg font-semibold">{data.title}</h3>
              <p>{data.body}</p>
              <button className="bg-gray-400 hover:bg-gray-500 duration-200 p-2 rounded-lg text-white shadow-lg">
                <a href={data.link}>Discover More</a>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Solutions;
