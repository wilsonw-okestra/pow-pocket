/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from "react";
import Image from "next/image";
import logo1 from "../images/jengu-logo.jpeg";
import logo2 from "../images/travel-safe-logo.jpeg";

const Clients: FC = () => {
  const logos = [
    {
      id: 1,
      title: "Jengu",
      body: "Jengu is a purpose-built, cloud-based healthcare performance system for management of biological sample collection, delivery, testing, and delivery of results. Encompassing an end-to-end workflow, Jengu is optimized for accurate sample collection and batch tracking, together with automated reporting systems, enabling quicker and more efficient delivery of results to the end consumer.",
      image: logo1,
      link: "https://jengu.my/",
    },
    {
      id: 2,
      title: "Johor TravelSafe",
      body: "A dedicated platform for border crossing, Johor Travelsafe or JTS has functioned as a backend for the management of collection, logistics, laboratory testing, and results delivery of all patients under the PCA and RGL scheme since the opening of the Johor-Singapore border. Developed in conjunction with qualified testing laboratories, the JTS system monitors, tracks, and delivers results to all travellers in an efficient and safe manner.",
      image: logo2,
      link: "https://johortravelsafe.my/",
    },
  ];

  const cards = logos.map((data) => {
    return (
      <div
        key={data.id}
        className="w-full lg:w-96 p-10 rounded shadow-xl flex flex-col justify-center items-center gap-3"
      >
        <div className="p-3 w-48 md:w-60 cursor-pointer">
          <a href={data.link}>
            <Image src={data.image} alt="image" layout="intrinsic" />
          </a>
        </div>
        <div>
          <h2 className="text-2xl pb-2">{data.title}</h2>
          <p className="text-sm">{data.body}</p>
        </div>
      </div>
    );
  });
  return (
    <div
      id="clients"
      className="h-full lg:h-screen flex flex-col justify-between items-center mx-5 md:mx-10 xy-10"
    >
      {/* Text Content */}
      <div className="font-sans flex flex-col justify-center items-start py-10">
        <h2 className="text-4xl sm:text-5xl mb-5">Our Clients</h2>
        <p className="text-lg sm:text-xl text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus
          mi id elit gravida, uis tincidunt purus fringilla. Aenean convallis a
          neque non pellentesque.
        </p>
      </div>
      {/* Card Container */}
      <div className="h-full flex justify-between items-center">
        {/* Clients Card */}
        <div className="flex flex-col md:flex-row gap-10 my-10">{cards}</div>
      </div>
    </div>
  );
};

export default Clients;
