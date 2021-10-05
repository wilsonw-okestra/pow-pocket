/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from "react";
import Image from "next/image";
import logo1 from "../images/jengu-logo.jpeg";
import logo2 from "../images/travel-safe-logo.jpeg";
import logo3 from "../images/immuplan-logo.svg";
import logo4 from "../images/seek-logo.svg";

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
    {
      id: 3,
      title: "ImmuPlan",
      body: "The Johor Vaksin Immunisation Programme (JVIP) is one of the initiatives by Johor State Government to support and complement the National COVID-19 Immunisation Programme. Launched on 12th July 2021, the programme's objective is to curb the spread of Covid-19 within the community specifically amongst the industrial workers. The programme offers commercial vaccination services at Kumpulan Perubatan Johor (KPJ) Hospitals and other appointed hospitals/clinics across the state for both local and foreign workers. The programme aims to vaccinate up to 1 million industrial workers.",
      image: logo3,
      link: "https://immuplan.my/",
    },
    {
      id: 4,
      title: "Seek Vaxin",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam explicabo facere fugit ullam modi pariatur temporibus ipsam quia nostrum.",
      image: logo4,
      link: "https://seek.vaxin.my/",
    },
  ];

  const cards = logos.map((data) => {
    return (
      <div
        key={data.id}
        className="w-full lg:w-80 h-full p-10 rounded shadow-xl flex flex-col justify-center items-center gap-3"
      >
        {/* Image */}
        <div className="w-48 md:w-60 h-1/3 cursor-pointer flex justify-center items-center">
          <a href={data.link}>
            <Image src={data.image} alt="image" layout="intrinsic" />
          </a>
        </div>
        {/* Text */}
        <div className="h-2/3 overflow-hidden">
          <h2 className="text-2xl pb-2">{data.title}</h2>
          <p className="text-sm">{data.body}</p>
        </div>
      </div>
    );
  });
  return (
    <div
      id="clients"
      className="h-full lg:h-screen w-screen flex flex-col justify-between items-center mx-5 md:px-10 my-10"
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
        <div className="grid grid-flow-col my-10 gap-10">{cards}</div>
      </div>
    </div>
  );
};

export default Clients;
