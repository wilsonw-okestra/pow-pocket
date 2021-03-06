import React, { FC } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact: FC = () => {
  return (
    <div>
      <Navbar />
      <div className="h-full md:h-screen w-full flex flex-col md:flex-row justify-center items-center pt-24">
        {/* Left Container */}
        <div className="h-full md:w-1/2 font-sans flex flex-col justify-center items-center px-10 py-10">
          <div>
            <h2 className="text-3xl sm:text-5xl mb-5">Get in Touch With Us</h2>
            <p className="text-left">
              Lorem ipsum dolor sit amet conseetur adipisicing elit. Ab,
              corporis!
            </p>
          </div>
          {/* form */}
          <form
            className="text-xs max-w-7 mx-0 md:mx-10 my-10 md:mx-1/2 lg:mx-0"
            action=""
            method="POST"
          >
            <div className="flex flex-wrap -mx-3 mb-6"></div>
            {/* E-Mail */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-28 md:px-44 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  name="email"
                />
              </div>
            </div>
            {/* Message */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Message
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-28 md:px-44 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                  name="message"
                ></textarea>
              </div>
            </div>
            {/* Submit */}
            <div className="md:flex md:items-center pb-10 ">
              <div className="md:w-1/3">
                <button
                  className="shadow bg-gray-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Send
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
        {/* Right Container */}
        <div className="h-full md:w-1/2 flex flex-col justify-center items-center py-10">
          <div className="pb-10 md:pb-0">
            <h1 className="text-xl font-semibold pb-2">Malaysia Office</h1>
            <h2 className="text-lg pb-3">49 Uniqe Square D, NY 10003</h2>
            <h1 className="text-xl font-semibold pb-2">Singapore Office</h1>
            <h2 className="text-lg pb-3">41 Parkes Road, Maude, NSW 2711</h2>
            <h3 className="text-xl font-semibold pb-3">
              enquiries@powpocket.me
            </h3>
            <h3 className="text-xl font-semibold pb-3">+1 (234) 567-9801</h3>
          </div>
          <div className="icons flex justify-center gap-10 text-4xl pt-20">
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
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
