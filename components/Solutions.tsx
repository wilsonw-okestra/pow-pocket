/* eslint-disable react/jsx-key */
import React, { FC } from "react";
import Image from "next/image";

// Logos
import logo1 from "../images/jengu-logo.jpeg";
import logo2 from "../images/travel-safe-logo.jpeg";
import logo3 from "../images/immuplan-logo.svg";
import logo4 from "../images/immunise-logo.png";
import logo5 from "../images/qrlab-logo.svg";

const Solutions: FC = () => {
  const clientsList = [
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
      body: "ImmuPlan encompasses both the Johor Economic Frontliners Programme and the Johor Vaksin Immunisation Programme (JVIP) initiatives by the Johor State Government to support and complement the National COVID-19 Immunisation Programme. Launched on 29th April 2021, the programme's objective is to acceleraete the vaccination efforts in the state of Johor. Immuplan was developed as a whitelabel initiative for the Johor State Goverment.",
      image: logo3,
      link: "https://immuplan.my/",
    },
    {
      id: 4,
      title: "Immunise",
      body: "Immunise is a national end-to-end vaccine delivery platform, encompassing features such as vaccine booking, appointment scheduling, order management,  physical vaccine delivery & cold chain, refunds, reconciliation and invoicing, and dashboard analytics.",
      image: logo4,
      link: "https://immunise.my/",
    },
    {
      id: 5,
      title: "QRLab",
      body: "QR Lab a blockchain digital verification system that allows for immutability and provenance of Covid-19 test results, eliminating the potential for forgery and ensuring complete transparency of test results.",
      image: logo5,
      link: "https://qrlab.my/",
    },
  ];

  const cards = clientsList.map((data) => {
    return (
      <div
        key={data.id}
        className="w-full h-full p-10 rounded shadow-xl flex flex-col justify-center items-center gap-3"
      >
        {/* Image */}
        <div className="w-48 md:w-60 h-44 cursor-pointer flex justify-center items-center">
          <a href={data.link}>
            <Image src={data.image} alt="image" layout="intrinsic" />
          </a>
        </div>
        {/* Text */}
        <div className="h-full">
          <h2 className="text-2xl pb-2">{data.title}</h2>
          <p className="text-sm">{data.body}</p>
        </div>
      </div>
    );
  });

  return (
    <div
      id="solutions"
      className="h-full xl:h-scree w-full flex flex-col justify-center bg-white border-b-2"
    >
      {/* Text Content */}
      <div className="font-sans flex flex-col justify-center items-center my-20 md:my-10 mx-24">
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
        className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 my-10 mx-0 sm:mx-24 gap-10"
      >
        {cards}
      </div>
    </div>
  );
};

export default Solutions;
