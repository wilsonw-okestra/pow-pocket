import React, { FC } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import Link from "next/link";
import Logo from "../images/Logo.svg";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <div className="h-full text-center md:text-left bg-blue-50 md:px-20 ">
      <div className="h-full md:h-52 flex flex-col md:flex-row justify-between items-center">
        {/* First Container */}
        <div className="flex flex-col justify-center py-10">
          <button>
            <Link passHref href="/">
              <a>
                <Image src={Logo} alt="logo" width="180" />
              </a>
            </Link>
          </button>
        </div>
        {/* Second Container */}
        <div className="pb-10 md:pb-0">
          <h1 className="font-semibold">Malaysia Office</h1>
          <h2 className="">35-8, Tower A, UOA Bangsar</h2>
          <h2 className="">UOA Bangsar</h2>
          <h2 className="">Jalan Bangsar, Bangsar</h2>
          <h2 className="pb-2">59100 Kuala Lumpur, Malaysia</h2>
          <h3 className="text-lg font-semibold">enquiries@powpocket.my</h3>
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
