import React from "react";
import AboutImg from "../asset/About.jpg";

const About = () => {
  return (
    <div name="about" className=" bg-white shadow-sm lg:px-60 md:px-20 ">
      <div className=" flex flex-col  lg:flex-row md:mx-full mt-20 mb-10 px-10 text-center  mx-auto ">
        <div className="md:w-[200rem] h-auto md:mx-auto lg:mr-14 ">
          <img
            className=" rounded-3xl h-[360px]  mb-10 "
            src={AboutImg}
            alt="About Img"
          />
        </div>
        <div className="flex flex-col md:text-left pr-5 mb-20 ">
          <h3 className=" flex items-center justify-center  mb-2 font-semibold text-lg text-blue-500">
            ABOUT ME
          </h3>
          <h4 className=" flex text-3xl items-center justify-center font-bold mb-5">
            Dedicated Front end developer.
          </h4>
          <p className=" flex items-center justify-center  ">
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
