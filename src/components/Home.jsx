import Profileimg from "../asset/ProfilePic.jpg";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Css from "../asset/TecStackImg/Css.png";
import HTML from "../asset/TecStackImg/HTML.png";
import JS from "../asset/TecStackImg/JS.png";
import React from "../asset/TecStackImg/React.png";
import tailwind from "../asset/TecStackImg/tailwind-css-icon.png";
import typescriptImg from "../asset/TecStackImg/icons8-typescript-96.png";

const Home = () => {
  const imgStack = [
    {
      id: 1,
      src: HTML,
    },
    {
      id: 2,
      src: Css,
    },
    {
      id: 3,
      src: JS,
    },
    {
      id: 4,
      src: React,
    },
    {
      id: 5,
      src: tailwind,
    },
    {
      id: 6,
      src: typescriptImg,
    },
  ];
  return (
    <div name="home" className="h-[40rem] w-full bg-neutral-50 shadow-sm">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-12 md:flex-row">
        <div className="flex flex-col  h-auto  md:mt-56 mb-20">
          <h2 className=" items-center h-auto justify-center text-cyan-400 text-5xl text-center sm:text-center md:text-left sm:text-5xl font-bold mx-10 md:mx-0 ">
            Front End
            <Typewriter words={[" React Developer."]} typeSpeed={100} loop />
          </h2>
          <p className="text-gray-600 mt-6 text-center sm:text-center md:text-left text-lg mx-10 sm:mx-auto md:mx-0 max-w-md">
            Hi, I'm Kshitij Singh. A passionate Front-end React Developer.
          </p>

          <div className="mt-3 md:w-0">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-4 mx-auto mb-10 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row sm:mx-auto md:ml-0 sm:mt-16">
            <div className="flex flex-wrap items-center justify-center  ">
              <h3 className="text-lg font-medium leading-8 mb-8 sm:mb-0 sm:mr-8 border-b-2 sm:border-b-0">
                Tech Stack
              </h3>
            </div>
            <div className="flex flex-row sm:flex-wrap items-center justify-center gap-4 ">
              {imgStack.map(({ id, src }) => (
                <ul key={id}>
                  <li>
                    <img
                      className="w-12 h-10  hover:-translate-y-1/3 duration-200"
                      src={src}
                      alt="framework img"
                    />
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-10 mt-20 md:ml-10">
          <img
            src={Profileimg}
            alt="my profile"
            className="rounded-2xl px-auto  mt-10 mx-auto  bg-cyan-500 shadow-lg shadow-cyan-500/50 w-3/3 md:w-80 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
