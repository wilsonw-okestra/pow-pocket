import React, { FC, useState, useEffect } from "react";
import { BsList } from "react-icons/bs";
import { Link as LinkTo } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import Logo from "../images/Logo.svg";

const Navbar: FC = () => {
  const listItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Products", href: "/products" },
    { id: 4, name: "Contact", href: "/contact" },
  ];
  // Hide Show
  const [isOpen, setIsOpen] = useState(false);

  // Scroll Top Change Class
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  return (
    <div>
      <nav
        className={
          scroll
            ? "down z-20 fixed flex justify-between items-center w-screen h-20 md:h-22 bg-white bg-opacity-90 md:bg-opacity-90 shadow-lg px-10"
            : "top  z-20 fixed flex justify-between items-center w-screen h-20 md:h-22 bg-white md:bg-transparent bg-opacity-90 md:bg-opacity-90 px-10"
        }
      >
        {/* logo */}
        <div className="company-logo">
          <Link passHref href="/">
            <button>
              <a className="flex text-lg md:text-xl uppercase">
                <Image src={Logo} alt="logo" width="150" />
              </a>
            </button>
          </Link>
        </div>
        {/* list items */}
        <div className="hidden md:flex">
          <ul className="flex">
            {listItems.map((data) => {
              return (
                <li key={data.id} className="mr-10">
                  <Link passHref href={data.href}>
                    <button className="text-black text-sm md:text-base hover:text-gray-500 duration-200 ease-in-out">
                      <a>{data.name}</a>
                    </button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* list button */}
        <button
          className="text-2xl flex md:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <BsList />
        </button>
      </nav>
      {/* mobile extension */}
      {isOpen && (
        <nav>
          <div className="z-20 fixed flex md:hidden justify-end items-center w-1/2 right-0 h-screen mt-20 md:mt-24 bg-white bg-opacity-90 md:bg-opacity-100 shadow-2xl border-l-2 border-gray-50">
            <ul className="flex flex-col justify-center items-center w-full h-full ">
              {listItems.map((data) => {
                return (
                  <li key={data.id} className="">
                    <button className="text-black text-2xl relative bottom-20 md:text-base hover:text-gray-500 duration-200 ease-in-out py-5">
                      <a href={data.href}>{data.name}</a>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
