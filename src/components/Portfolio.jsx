import React from "react";
import MyTaskImg from "../asset/portfolioImg/Mytaskimg.jpg";
import QuizImage from "../asset/portfolioImg/Quizimg.jpg";
import NetflixCloneImg from "../asset/portfolioImg/NetFlixCloneImg.png";
import EcomImg from "../asset/portfolioImg/Ecommerce-PNG.png";
import BlogImg from "../asset/portfolioImg/blog-dev.-banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = () => {
  const portfolios = [
    {
      key: "project-netflix-clone",
      image: NetflixCloneImg,
      title: "Netflix Clone",
      text: "This is a React project that uses Firebase for real-time database storage. The user can interact with the movie cards and play their trailer in this project. The movies that are shown are constantly changing with time.",
      githubLink: "https://github.com/kshitij096/Netflix_Clone",
      liveSite: "",
      techstack: "React TailwindCss Firebase",
    },
    {
      key: "my-task-app",
      image: MyTaskImg,
      title: "My Task App",
      text: "This is a React project its a simple app for adding notes. In this, you can add or delete the notes with animation and other stuff.",
      githubLink: "https://github.com/kshitij096/My-Task-App",
      liveSite: "",
      techstack: "React TailwindCss",
    },
    {
      key: "time-bound-quiz-app",
      image: QuizImage,
      title: "Time Bound Quiz App",
      text: "In this game, the player can move and eat the food and try to not bump in the walls and don't eat itself.",
      githubLink: "https://github.com/kshitij096/Quiz-App-with-Timer",
      liveSite: "https://time-bound-quizapp-geek.netlify.app/",
      techstack: "React TailwindCss",
    },
  ];

  const comingSoon = [
    {
      key: 1,
      image: BlogImg,
      title: "Blog App",
      text: "This is a Blog app to share your thoughts",
      githubLink: "https://github.com/kshitij096/Blog_Site",
      status: "Coming soon",
    },
    {
      key: 2,
      image: EcomImg,
      title: "Ecom-App MERN",
      text: "This is a MERN stack implemented App.",
      // githubLink: "https://github.com/kshitij096/Blog_Site",
      status: "Coming soon",
    },
  ];

  return (
    <div
      name="portfolio"
      className="flex flex-col shadow-sm bg-slate-100 pb-20 dark:bg-gray-800"
    >
      <div className="flex flex-col items-center justify-center text-center lg:px-60 md:px-20 py-20">
        <div className="flex flex-col mt-24">
          <h3 className="text-lg text-blue-500 font-bold ">PORTFOLIO</h3>
          <p className="flex text-2xl mt-4 mx-10 font-bold items-center justify-center dark:text-gray-300">
            Each project is a unique piece of development 🧩
          </p>
        </div>
        {portfolios.map(
          ({ key, image, title, text, techstack, githubLink, liveSite }) => (
            <div
              key={key}
              className="flex flex-col lg:flex-row mx-10 mt-16 px-8 py-4 shadow-2xl rounded-3xl bg-white dark:bg-gray-500"
            >
              <div className="h-auto w-100 md:w-[30rem] lg:w-100 flex flex-wrap flex-col items-center text-center">
                <img
                  className="w-full h-[300px] rounded-3xl"
                  src={image}
                  alt="portfolioImg"
                />
              </div>
              <div className="flex flex-col h-auto md:w-96 mt-9 lg:mt-0 mx-10 ">
                <h3 className="text-lg mb-4 font-semibold text-black flex items-center justify-center capitalize">
                  {title}
                </h3>
                <p className="flex items-center justify-center ">{text}</p>
                {techstack && (
                  <div className="flex gap-4 mt-6 items-center justify-center ">
                    {techstack.split(" ").map((tech, index) => (
                      <h3
                        key={index}
                        className="font-semibold p-2 shadow-md dark:bg-gray-400 rounded-lg"
                      >
                        {tech}
                      </h3>
                    ))}
                  </div>
                )}
                <div className="flex gap-10 mt-8 items-center justify-center">
                  <h3 className="text-lg font-small p-2 cursor-pointer hover:text-blue-500 dark:hover:text-blue-200">
                    <a href={githubLink}>
                      Github
                      <FontAwesomeIcon
                        icon={faGithub}
                        style={{ marginLeft: "5px" }}
                      />
                    </a>
                  </h3>
                  <h3 className="text-lg font-small p-2 cursor-pointer hover:text-blue-500 dark:hover:text-blue-200">
                    <a href={liveSite}>
                      Live Site
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        style={{ marginLeft: "5px" }}
                      />
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          )
        )}
        {comingSoon.map(({ key, image, title, text, githubLink, status }) => (
          <div
            key={key}
            className="flex flex-col lg:flex-row mx-10 mt-16 px-8 py-4 shadow-2xl rounded-3xl bg-white  dark:bg-gray-500"
          >
            <div className="h-auto w-100 md:w-[30rem] lg:w-100 flex flex-wrap flex-col items-center text-center">
              <img
                className="w-full h-[300px] rounded-3xl"
                src={image}
                alt="portfolioImg"
              />
            </div>
            <div className="flex flex-col h-auto md:w-96 mt-9 lg:mt-0 mx-10 ">
              <h3 className="text-lg mb-4 font-semibold text-black flex items-center justify-center capitalize">
                {title}
              </h3>
              <p className="flex items-center justify-center">{text}</p>

              {githubLink ? (
                <div className="flex flex-col gap-4 mt-8 items-center justify-center">
                  <h3 className="text-lg font-small p-2 cursor-pointer hover:text-blue-500 dark:hover:text-blue-200">
                    <a href={githubLink}>
                      Github
                      <FontAwesomeIcon
                        icon={faGithub}
                        style={{ marginLeft: "5px" }}
                      />
                    </a>
                  </h3>
                  <h3 className="text-3xl font-small p-2 text-red-600 dark:bg-gray-400 rounded-lg">
                    {status}
                  </h3>
                </div>
              ) : (
                <div className="flex gap-10 mt-8 items-center justify-center">
                  <h3 className="text-3xl font-small p-2 text-red-600 dark:bg-gray-400 rounded-lg">
                    {status}
                  </h3>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
