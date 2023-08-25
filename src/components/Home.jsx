import Profileimg from "../asset/ProfilePic.jpg";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Css from "../asset/TecStack/Css.png";
import HTML from "../asset/TecStack/HTML.png";
import JS from "../asset/TecStack/JS.png";
import React from "../asset/TecStack/React.png";
import tailwind from "../asset/TecStack/tailwind-css-icon.png";

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
  ];
  return (
    <div name="home" className="h-auto w-full bg-neutral-50 shadow-sm">
      <div className=" max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-12 md:flex-row">
        <div className="flex flex-col  h-auto sm:pt-40 ">
          <h2 className=" items-center h-auto justify-center text-5xl sm:text-5xl font-bold mx-10  text-black ">
            <Typewriter
              words={["Front-End React Developer."]}
              typeSpeed={100}
              loop
            />
          </h2>
          <p className="text-gray-600 mt-6 text-lg mx-10 max-w-md">
            Hi, I'm Kshitij Singh. A passionate Front-end React Developer.
          </p>

          <div className="mt-3">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-4 ml-10 mb-20 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row sm:ml-9 sm:mt-20">
            <div className="flex flex-wrap items-center justify-center  ">
              <h3 className="text-lg font-medium leading-8 mb-8 sm:mb-0 sm:mr-8 border-b-2 sm:border-b-0">
                Tech Stack
              </h3>
            </div>
            <div className="flex flex-row sm:flex-wrap items-center justify-center gap-6 px-10">
              {imgStack.map(({ id, src }) => (
                <ul key={id}>
                  <li>
                    <img
                      className="w-12 h-10 cursor-pointer"
                      src={src}
                      alt="framework img"
                    />
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-10 mt-20 ">
          <img
            src={Profileimg}
            alt="my profile"
            className="rounded-2xl px-auto  mt-10 bg-cyan-500 shadow-lg shadow-cyan-500/50 w-2/3 md:w-72 hover:rotate-12 duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
// import ProfilePic from "../asset/ProfilePic.jpg";

// const Home = () => {
//   return (
//     <div className="mt-24">
//       <div className="">
//         <div className="flex flex-col h-auto items-center justify-center">
//           <img className="" src={ProfilePic} alt="my profile" />
//           <div className="md:flex-row">
//             <h2>Front-End React Developer</h2>
//             <p>
//               Hi, I'm Stefan Topalovic. A passionate Front-end React Developer
//               based in Belgrade, Serbia.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//     // <div className="px-7 md:px-10 my-13 md:h-screen">
//     //   <div>
//     //     <div className="w-full h-[10rem] flex flex-col md:flex-row items-center justify-center  relative">
//     //       <div className="text-black">
//     //         <h2 className="font-semibold md:text-5xl text-3xl mt-12">
//     //           Front-End React Developer
//     //         </h2>
//     //         <p className="md:w-96">
//     //           Hi, I'm Stefan Topalovic. A passionate Front-end React Developer
//     //           based in Belgrade, Serbia
//     //         </p>
//     //       </div>
//     //       <div className="order-first md:order-last object-scale-down mt-[25rem]">
//     //         <img src={ProfilePic} alt="My Profile" />
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };

// export default Home;
