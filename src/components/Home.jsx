import Profileimg from "../asset/ProfilePic.jpg";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const imgStack = [
    {
      id: 1,
      src: "https://skillicons.dev/icons?i=html",
    },
    {
      id: 2,
      src: "https://skillicons.dev/icons?i=css",
    },
    {
      id: 3,
      src: "https://skillicons.dev/icons?i=js",
    },
    {
      id: 4,
      src: "https://skillicons.dev/icons?i=react",
    },
    {
      id: 5,
      src: "https://skillicons.dev/icons?i=tailwind",
    },
    {
      id: 6,
      src: "https://skillicons.dev/icons?i=ts",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      name: faSquareGithub,
      link: "https://github.com/kshitij096/",
    },
    {
      id: 2,
      name: faLinkedin,
      link: "https://in.linkedin.com/",
    },
  ];

  return (
    <div
      name="home"
      className=" h-full w-full bg-neutral-50 shadow-sm dark:bg-gray-800 dark:text-white"
    >
      <div className=" max-w-screen mx-auto md:mx-10  flex flex-col-reverse items-center justify-center h-full  px-12 md:px-0 md:flex-row">
        <div className="flex flex-col  h-[600px] w-[400px]  sm:w-[460px] md:h-[550px] lg:h-[550px] md:w-[600px] md:mt-56 mb-20 md:mx-14">
          <h2 className=" items-center h-[150px] sm:h-[160px] md:h-[150px] lg:h-[120px] justify-center text-cyan-400 text-5xl text-center sm:text-center md:text-left sm:text-5xl font-bold mx-10 md:mx-0 ">
            {/* Front End React Developer. */}
            <Typewriter
              words={["Front End React Developer."]}
              typeSpeed={100}
              loop
            />
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-6 text-center sm:text-center md:text-left text-lg mx-10 sm:mx-auto md:mx-0 max-w-md">
            Hi, I'm Kshitij Singh. A passionate Front-end React Developer.
          </p>

          <div className="mt-3 md:w-0  ">
            <div className="flex flex-row mx-10 md:mx-0  md:gap-4  justify-center sm:justify-start">
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group  text-white w-fit px-4 mx-auto mb-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300 ">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
              <a
                href="https://drive.google.com/file/d/1Vs3aN7kHwv-o6_lEDR27zikHzlYF7_n-/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-white w-fit px-4 mx-auto mb-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Resume
                <span className="group-hover:rotate-90 duration-300 ">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </a>
            </div>
            <div className="  flex md:flex-row md:mx-auto  gap-4 mb-6 md:mb-0  mt-6 text-center   sm:text-center  text-lg mx-40 sm:mx-40  max-w-md">
              {socialLinks.map(({ id, name, link }) => (
                <a
                  key={id}
                  className=" text-4xl text-black dark:text-gray-300 sm:ml-5 md:ml-0  lg:ml-0 sm:text-right"
                  href={link}
                >
                  <FontAwesomeIcon
                    className=" hover:scale-125 duration-200 "
                    icon={name}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:mx-auto md:ml-0 sm:mt-16">
            <div className="flex flex-wrap  items-center justify-center  ">
              <h3 className="text-lg font-medium leading-8 mb-8 sm:mb-0 sm:mr-8 border-b-2 sm:border-b-0">
                Tech Stack
              </h3>
            </div>
            <div className="flex flex-row  items-center justify-center gap-2 ">
              {imgStack.map(({ id, src }) => (
                <img
                  key={id}
                  className="w-12 h-10 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-110 duration-300"
                  src={src}
                  alt="framework img"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mb-10 mt-20 md:ml-10 md:mt-[-80px] lg:mt-20">
          <img
            src={Profileimg}
            alt="my profile"
            className="rounded-2xl px-auto  mt-10 md:mt-4 mx-auto  bg-cyan-500 shadow-lg shadow-cyan-500/50 w-3/3 md:w-[25rem] lg:w-[19rem] "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
