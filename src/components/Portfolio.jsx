import React from "react";
import ProjectImg from "../asset/portfolio/Project1.jpg";
import Ecom from "../asset/portfolio/Ecom.jpg";
import Clone from "../asset/portfolio/Netflix.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = () => {
  const portfolios = [
    {
      id: 1,
      title: "keeper app",
      src: ProjectImg,
      content:
        "This project is a Keeper app built using ReactJS 📝. The app can be useful to keep a track of your day-to-day works to do. Notes ",
    },
    {
      id: 2,
      title: "e-com app",
      src: Ecom,
      content:
        "This is a clone of Netflix website b showing my abilities in React.JS to build something advanced like Netflix. It contains the home page, sign-in page, sign-up page, browse page, and movie player.",
    },
    {
      id: 3,
      title: "clone app",
      src: Clone,
      content:
        "This is a clone of Netflix website built using React.JS as a Front-end & Firebase as Back-endthe home page, sign-in page, sign-up page, browse page, and movie player.",
    },
  ];

  const techUse = [
    {
      id: 1,
      name: "React",
    },
    {
      id: 2,
      name: "Tailwind CSS",
    },
  ];

  const Demo = [
    {
      id: 1,
      link: "Github",
      hyperLink: "https://github.com/kshitij096/",
      hyperLinkIcon: faGithub,
    },
    {
      id: 2,
      link: "Live Site",
      hyperLink: "https://github.com/kshitij096/",
      hyperLinkIcon: faArrowUpRightFromSquare,
    },
  ];

  return (
    <div
      name="portfolio"
      className="flex flex-col shadow-sm bg-slate-100 pb-20 "
    >
      <div className="flex flex-col  items-center justify-center  text-center lg:px-60 md:px-20 ">
        <div className="flex flex-col mt-24">
          <h3 className="text-lg text-blue-500 font-bold ">PORTFOLIO</h3>
          <p className="flex  text-2xl mt-4 mx-10 font-bold  items-center justify-center">
            Each project is a unique piece of development 🧩
          </p>
        </div>
        {portfolios.map(({ id, title, src, content }) => (
          <div
            key={id}
            className="flex flex-col lg:flex-row mx-10 mt-16 px-8 py-4 shadow-2xl rounded-3xl bg-white"
          >
            <div className="h-auto w-100 md:w-[30rem] lg:w-100 flex flex-wrap   flex-col items-center text-center">
              <img
                className="w-full  h-[300px] rounded-3xl  "
                src={src}
                alt="portfolioImg"
              />
            </div>
            <div className="flex flex-col  h-auto md:w-96 mt-9 lg:mt-0 mx-10 ">
              <h3 className=" text-lg mb-4 font-semibold text-black flex items-center justify-center capitalize">
                {title}
              </h3>
              <p className=" flex items-center justify-center  ">{content} </p>

              <div className=" flex gap-4 mt-6 items-center justify-center">
                {techUse.map(({ name }) => (
                  <>
                    <h3 key={id} className="font-semibold p-2 shadow-md">
                      {name}
                    </h3>
                  </>
                ))}
              </div>
              <div className=" flex gap-10 mt-8 items-center justify-center">
                {Demo.map(({ link, hyperLink, hyperLinkIcon }) => (
                  <>
                    <h3 className="text-lg font-small p-2  cursor-pointer hover:text-blue-500">
                      <a href={hyperLink}>
                        {link}{" "}
                        <FontAwesomeIcon
                          className="text-xl"
                          icon={hyperLinkIcon}
                        />
                      </a>
                    </h3>
                  </>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
