import React, { FC } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/Fa";
import { AiTwotoneMail } from "react-icons/Ai";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <div className="h-full md:h-60 text-center md:text-left bg-gray-50 md:px-20">
      <div className="h-full md:h-52 flex flex-col md:flex-row justify-between items-center">
        {/* First Container */}
        <div className="flex flex-col justify-center py-10">
          <button>
            <Link passHref href="/">
              <h1 className="text-2xl sm:text-3xl uppercase pb-1">
                Pow Pocket
              </h1>
            </Link>
          </button>
          <div className="icons flex justify-center gap-4 text-3xl sm:text-4xl">
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <AiTwotoneMail />
            </a>
            <a href="#">
              <FaFacebookSquare />
            </a>
          </div>
        </div>
        {/* Second Container */}
        <div className="pb-10 md:pb-0">
          <h1 className="font-semibold">Malaysia Office</h1>
          <h2 className="">49 Uniqe Square D, NY 10003</h2>
          <h1 className="font-semibold">Singapore Office</h1>
          <h2 className="">41 Parkes Road, Maude, NSW 2711</h2>
          <h3 className="text-lg font-semibold">enquiries@powpocket.me</h3>
          <h3 className="text-lg font-semibold">+1 (234) 567-9801</h3>
        </div>
      </div>
      {/* bottom container */}
      <div className="flex justify-center items-center border-t-2 py-5">
        <h2>© Copyright Pow Pocket 2021</h2>
      </div>
    </div>
  );
};

export default Footer;
