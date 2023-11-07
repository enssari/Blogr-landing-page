import logo from "../assets/logo.svg";
import bgS from "../assets/bg-pattern-intro-mobile.svg";
import bgL from "../assets/bg-pattern-intro-desktop.svg";
import menu from "../assets/icon-hamburger.svg";
import arrDown from "../assets/icon-arrow-light.svg";
import cross from "../assets/icon-close.svg";
import arrRed from '../assets/icon-arrow-red.svg';
import { useState } from "react";

export const Header = () => {
  const [prodClick, setProdClick] = useState<boolean>(false);
  const [compClick, setCompClick] = useState<boolean>(false);
  const [contClick, setContClick] = useState<boolean>(false);
  const [menuClicked, setMenuClicked] = useState<boolean>(true);

  return (
    <div id="container">
      <img
        src={bgS}
        alt="bg"
        className="bg-gradient-to-r from-verylightred to-lightred absolute lg:hidden w-full h-[35rem]
      md:h-[35rem]"
      />
      <img
        src={bgL}
        alt="bg"
        className="bg-gradient-to-r from-verylightred to-lightred absolute hidden
      lg:block h-[38rem] w-full object-cover"
      />

      <nav className="flex flex-row justify-between relative p-9 lg:px-[5rem] xl:px-[12rem]">
        <ul
          className="flex flex-row space-x-10 lg:space-x-[5rem]"
          id="left-side"
        >
          <img
            src={logo}
            alt="logo"
            className="md:h-[2.5rem] md:pt-2 lg:h-[3.2rem]"
          />

          <li className="hidden md:flex md:flex-row space-x-6 text-grayishblue font-medium items-center lg:pt-2">
            <button
              onClick={() => setProdClick(!prodClick)}
              className="flex flex-row hover:text-white duration-200 hover:underline underline-offset-2"
            >
              Product{" "}
              <img
                src={arrDown}
                alt="arrow"
                className={`mt-2 ml-1 ${prodClick ? "rotate-180" : ""}
              duration-200`}
              />
            </button>

            <button
              onClick={() => setCompClick(!compClick)}
              className="flex flex-row hover:text-white duration-200 hover:underline underline-offset-2"
            >
              Company{" "}
              <img
                src={arrDown}
                alt="arrow"
                className={`mt-2 ml-1 ${compClick ? "rotate-180" : ""}
              duration-200`}
              />
            </button>

            <button
              onClick={() => setContClick(!contClick)}
              className="flex flex-row hover:text-white duration-200 hover:underline underline-offset-2"
            >
              Connect{" "}
              <img
                src={arrDown}
                alt="arrow"
                className={`mt-2 ml-1 ${contClick ? "rotate-180" : ""}
              duration-200`}
              />
            </button>
            <div
              className={`bg-white rounded-lg absolute left-[19rem] top-[5.2rem] ${
                contClick ? "block" : "hidden"
              }
            lg:left-[26rem] xl:left-[33rem]`}
              id="connect-table"
            >
              <ul className="p-4 px-12 text-darkgrayishblue ml-[-1rem]">
                <li className="space-y-5 flex flex-col items-start">
                  <button className="hover:text-black duration-100">
                    Contact
                  </button>
                  <button className="hover:text-black duration-100">
                    Newsletter
                  </button>
                  <button className="hover:text-black duration-100">
                    LinkedIn
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <ul id="right-side">
          <li className="space-x-2 font-ubuntu">
            <button
              onClick={() => setMenuClicked(!menuClicked)}
              className="mt-2 md:hidden hover:shadow-2xl hover:shadow-gray-300 duration-100"
            >
              {menuClicked ? (
                <img src={menu} alt="menu" className={`w-[2.3rem]`} />
              ) : (
                <img
                  src={cross}
                  onClick={() => setMenuClicked(!menuClicked)}
                  alt="menu"
                  className={`w-[2rem] h-[1.8rem]`}
                />
              )}
            </button>

            <div className="hidden md:flex space-x-9 lg:pt-2" id="right-side-btns">
              <button className="text-grayishblue hover:text-white font-bold">
                Login
              </button>

              <button
                className="rounded-full bg-white text-lightred font-bold h-[3rem] w-[9rem]
              hover:bg-[#c96666bb] hover:text-white duration-150"
              >
                Sign Up
              </button>
            </div>
          </li>
        </ul>
      </nav>

      <div
        className={`${
          !menuClicked ? "" : "hidden"
        } bg-white items-center flex flex-col h-[35.5rem]
      z-[1000] w-[25rem] left-[0rem] m-auto md:hidden 
      shadow-xl rounded-lg relative`}
        id="mobile-menu"
      >
        <ul className="p-7">
          <li className="space-y-8 text-[1.2rem] text-[#222268] font-medium flex flex-col items-center">
            <button
              onClick={() => setProdClick(!prodClick)}
              className={`flex flex-row hover:text-grayishblue duration-200 underline-offset-2
              ${prodClick ? 'text-[#7a7ac1]' : ''}`}
            >
              Product{" "}
              <img
                src={arrRed}
                alt="arrow"
                className={`mt-2 ml-2 ${prodClick ? "rotate-180" : ""}
              duration-200 relative`}
              />
            </button>

            <button
              onClick={() => setCompClick(!compClick)}
              className={`flex flex-row hover:text-grayishblue duration-200 underline-offset-2
              ${compClick ? 'text-grayishblue' : ''}`}
            >
              Company{" "}
              <img
                src={arrRed}
                alt="arrow"
                className={`mt-2 ml-2 ${compClick ? "rotate-180" : ""}
              duration-200 relative`}
              />
            </button>

            <button
              onClick={() => setContClick(!contClick)}
              className={`flex flex-row hover:text-grayishblue duration-200 underline-offset-2
              ${contClick ? 'text-grayishblue' : ''} pb-5`}
            >
              Connect{" "}
              <img
                src={arrRed}
                alt="arrow"
                className={`mt-2 ml-2 ${contClick ? "rotate-180" : ""}
              duration-200 relative`}
              />
            </button>
            <div className={`${contClick ? '' : 'hidden'} ml-[-.9rem]`} id="connect-clicked">
              <ul>
                <li className="flex flex-col space-y-5 text-[1.1rem] text-darkgrayishblue">
                  <button className="hover:text-[blue]">Contact</button>
                  <button className="hover:text-[blue]">Newsletter</button>
                  <button className="hover:text-[blue]">LinkedIn</button>
                </li>
              </ul>            
            </div>
            
            <div className={`flex flex-col space-y-5 relative ${contClick ? 'top-[6rem]': 'top-[14.295rem]'}`} id="menu-buttons">
              <button className="font-medium hover:text-[blue] text-darkblue">
                  Login
              </button>

              <button
                className="rounded-full bg-gradient-to-r from-verylightred to-lightred text-white font-medium
                h-[3rem] w-[9.5rem] duration-150 hover:from-[#dc7676] hover:to-red-400"
              >
                Sign Up
              </button>
            </div>

          </li>
        </ul>
      </div>

      <div
        className={`relative items-center flex flex-col space-y-[4rem] p-12 px-[5.2rem] md:flex ${
          !menuClicked ? "hidden" : ""
        }`}
        id="middle-content"
      >
        <div className="text-center" id="text-wrapper">
          <h1 className="text-white font-medium text-[2.2rem] lg:text-[2.6rem] 2xl:text-[3.3rem]">
            A modern publishing platform
          </h1>

          <p className="text-white lg:text-[1.4rem]">
            Grow your audience and build your online brand
          </p>
        </div>

        <div className="flex flex-row space-x-7" id="buttons">
          <button
            className="bg-white text-lightred h-[3rem] w-[9rem] rounded-full font-medium
          hover:bg-[#c96666bb] duration-150 hover:text-white"
          >
            Start for free
          </button>

          <button
            className="bg-transparent border-solid border-[1px] border-white text-white h-[3rem]
          w-[9rem] rounded-full font-medium hover:bg-white hover:text-lightred duration-150"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};
