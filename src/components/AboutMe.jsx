import React from "react";
import AboutImg from "../asset/About.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="bg-white shadow-sm px-4 lg:px-16  py-8 lg:py-16 flex justify-center dark:bg-gray-800"
    >
      <div className=" flex flex-col lg:flex-row mx-auto max-w-7xl px-4 sm:px-6 sm:mx-16  lg:px-8 mt-10 mb-10 text-center md:mx-0  lg:h-[350px] ">
        <div className="md:w-2/2  mx-auto mb-10 lg:mb-0 sm:w-2/2 ">
          <img
            className="rounded-3xl  w-[400px] h-[350px] mx-auto lg:mx-0   lg:h-full"
            src={AboutImg}
            alt="About Img"
          />
        </div>
        <div className="flex flex-col lg:w-2/3 lg:pl-8 md:mx-16 lg:mx-0">
          <h3 className="mb-2 font-semibold text-lg text-blue-500 text-center lg:text-left">
            ABOUT ME
          </h3>
          <h4 className="text-3xl font-bold mb-5 text-center lg:text-left dark:text-gray-300">
            Dedicated Front-end Developer.
          </h4>
          <p className="text-center lg:text-left dark:text-gray-400">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
