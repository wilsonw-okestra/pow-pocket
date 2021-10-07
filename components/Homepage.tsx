import React, { FC } from "react";
import Image from "next/image";
import Logo from "../images/home-image.png";
import bg from "../images/bg-3.png";

const Homepage: FC = () => {
  return (
    <div
      id="home"
      className="h-full lg:h-screen w-screen flex flex-col-reverse lg:flex-row justify-center items-center font-sand from-blue-50 bg-blue-100 bg-gradient-to-r py-20"
    >
      {/* background */}
      <div className="z-0 opacity-5 absolute top-0 w-full overflow-hidden">
        <Image src={bg} alt="" height="600" layout="fixed" />
      </div>
      {/* Text Content */}
      <div className="z-10 h-full lg:w-1/2  flex flex-col justify-center items-center mx-1 md:mx-16 py-10">
        <div>
          <h2 className="text-3xl sm:text-5xl mb-5">
            Perfecting Operational Workflows
          </h2>
          <p className="text-left">
            Since its inception Pow Pocket has continued to push the boundaries
            of innovation and high-performance. The company has developed
            capabilities in decision science, process automation, track and
            trace, and performance measurement gained from the tremendous
            collective experience of the team.
          </p>
        </div>
      </div>
      {/* Image */}
      <div className="h-full w-2/3 md:w-full lg:w-1/2 flex justify-center items-center">
        <Image src={Logo} alt="image" layout="intrinsic" />
      </div>
    </div>
  );
};

export default Homepage;
