"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className=" sticky top-0 z-10 bg-[#000000] shadow-2xl ">
        <div className="justify-between  px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-10 sticky top-0 z-10  ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 ">
              <Link href="/">
                <svg
                  id="logo-68"
                  width="60"
                  height="60"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className=" stroke"
                    d="M48.9 33H16.4V0.469971H26.62C32.529 0.469971 38.1961 2.81732 42.3744 6.99563C46.5527 11.1739 48.9 16.8409 48.9 22.75V33Z"
                    stroke="white"
                    stroke-width="1"
                    stroke-miterlimit="2"
                  ></path>
                  <path
                    className=" stroke"
                    d="M46.26 34.5799H14.86V3.16992H25C27.7914 3.16861 30.5558 3.71729 33.1351 4.78461C35.7144 5.85194 38.0582 7.41699 40.0325 9.39037C42.0068 11.3637 43.5729 13.7068 44.6415 16.2856C45.71 18.8644 46.26 21.6285 46.26 24.4199V34.5799Z"
                    stroke="white"
                    stroke-width="1"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    className=" stroke"
                    d="M43.62 36.1801H13.32V5.87012H23.4C26.0553 5.87012 28.6847 6.39312 31.1379 7.40927C33.5911 8.42542 35.8201 9.91482 37.6977 11.7924C39.5753 13.67 41.0647 15.8991 42.0809 18.3523C43.097 20.8055 43.62 23.4348 43.62 26.0901V36.1801Z"
                    stroke="white"
                    stroke-width="1"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    className=" stroke"
                    d="M41 37.7801H11.78V8.57008H21.78C24.3031 8.56745 26.8019 9.06213 29.1337 10.0258C31.4655 10.9896 33.5844 12.4034 35.3694 14.1866C37.1544 15.9697 38.5705 18.0872 39.5366 20.4179C40.5027 22.7487 41 25.247 41 27.7701V37.7801Z"
                    stroke="white"
                    stroke-width="1"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    className=" stroke"
                    d="M38.35 39.38H10.24V11.27H20.18C24.9982 11.2727 29.6182 13.1879 33.0252 16.5948C36.4322 20.0018 38.3473 24.6218 38.35 29.44V39.38Z"
                    stroke="white"
                    stroke-width="1"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    className=" stroke"
                    d="M35.71 41H8.70001V14H18.57C23.1106 14 27.4657 15.8017 30.6792 19.0096C33.8927 22.2175 35.7021 26.5694 35.71 31.11V41Z"
                    stroke="white"
                    stroke-width="1"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    className=" stroke"
                    d="M33.07 42.5899H7.15997V16.6699H17C21.2666 16.6832 25.3539 18.3873 28.3662 21.409C31.3785 24.4307 33.07 28.5233 33.07 32.7899V42.5899Z"
                    stroke="white"
                    stroke-width="1"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    className="stroke"
                    d="M30.44 44.1901H5.62V19.3701H15.35C19.3513 19.3728 23.188 20.9635 26.0173 23.7928C28.8467 26.6222 30.4373 30.4588 30.44 34.4601V44.1901Z"
                    stroke="white"
                    stroke-width="1"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    className="stroke"
                    d="M27.8 45.7901H4.08002V22.0701H13.74C17.4699 22.0727 21.0461 23.5563 23.6825 26.1946C26.319 28.833 27.8 32.4102 27.8 36.1401V45.7901Z"
                    stroke="white"
                    stroke-width="1"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    className="stroke"
                    d="M25.16 47.4H2.53998V24.77H12.13C13.8372 24.77 15.5276 25.1063 17.1049 25.7596C18.6821 26.4129 20.1152 27.3705 21.3224 28.5776C22.5295 29.7848 23.4871 31.2179 24.1404 32.7951C24.7937 34.3724 25.13 36.0628 25.13 37.77L25.16 47.4Z"
                    stroke="white"
                    stroke-width="1"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    className="stroke"
                    d="M22.53 49H1V27.47H10.52C13.7026 27.47 16.7548 28.7343 19.0053 30.9847C21.2557 33.2351 22.52 36.2874 22.52 39.47L22.53 49Z"
                    stroke="white"
                    stroke-width="1"
                    stroke-miterlimit="10"
                  ></path>
                </svg>
              </Link>

              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-6 h-6 "
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-3 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl  py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent delay-100 duration-1000 font-[ppm-blackbold]">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>

                <li
                  className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent delay-100 duration-1000 font-[ppm-blackbold]"
                  id="liquid"
                >
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent delay-100 duration-1000 font-[ppm-blackbold]">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Works
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
