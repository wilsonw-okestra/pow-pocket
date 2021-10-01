import React, { FC } from "react";
import Image from "next/image";
import Logo from "../images/team-2-square.jpg";

const Homepage: FC = () => {
  return (
    <div
      id="home"
      className="h-screen w-full flex flex-col-reverse md:flex-row justify-center items-center"
    >
      {/* Text Content */}
      <div className="h-full md:w-1/2 font-sans flex flex-col justify-center items-center px-10 py-10">
        <div>
          <h2 className="text-3xl sm:text-5xl mb-5">
            Perfecting Operational Workflows
          </h2>
          <p className="text-left">
            Since its inception Pow Pocket has continued to push the boundaries
            of innovation and high-performance. The company has developed
            capabilities in decision science, process automation, trace and
            trace, and performance measurement gained from the tremendous
            collective experience of the team.
          </p>
        </div>
      </div>
      {/* Image */}
      <div className="h-full md:w-1/2 flex justify-center items-center py-10">
        <Image src={Logo} alt="image" layout="intrinsic" />
      </div>
    </div>
  );
};

export default Homepage;
