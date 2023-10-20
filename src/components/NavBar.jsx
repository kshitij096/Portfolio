import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import ThemeBtn from "./ThemeBtn";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-12  text-white dark:bg-slate-500  bg-amber-100 shadow-md fixed">
      <div>
        <h1 className=" text-black text-xl font-bold ">Kshitij.Dev</h1>
      </div>

      <ul className="hidden md:flex mr-10">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className=" mr-4 text-lg cursor-pointer capitalize font-semibold text-gray-900 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        <li className="pt-1">
          <ThemeBtn />
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer gap-2 mr-4 z-10 flex flex-row  text-black md:hidden"
      >
        <div className="md:hidden mr-3">
          <ThemeBtn />
        </div>
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 dark:bg-gray-600 w-full h-screen bg-amber-50 text-black">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="font-semibold cursor-pointer capitalize py-6 text-2xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const NavBar = () => {
//   const [nav, setNav] = useState(false);

//   const links = [
//     {
//       id: 1,
//       link: "home",
//     },
//     {
//       id: 2,
//       link: "about",
//     },
//     {
//       id: 3,
//       link: "projects",
//     },
//     {
//       id: 4,
//       link: "contact",
//     },
//   ];
//   return (
//     <div>
//       <h5 className=" text-[1.35rem] text-black mx-8 font-semibold">
//         Kshitij.dev
//       </h5>
//       <ul className="md:flex  font-semibold  mx-12 hidden mr-8">
//         {links.map(({ id, link }) => (
//           <li
//             key={id}
//             className="mr-[20px]  text-[1.07rem] cursor-pointer capitalize hover:scale-105 hover:text-blue-500 duration-200"
//           >
//             {link}
//           </li>
//         ))}
//       </ul>
//       <div
//         onClick={() => setNav(!nav)}
//         className="cursor-pointer md:hidden pr-4 z-10 text-gray-800 transition-transform"
//       >
//         {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
//       </div>
//       {nav && (
//         <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  text-black-500">
//           {links.map(({ id, link }) => (
//             <li
//               key={id}
//               className="  px-4  mx-4 my-4 text-xl font-semibold capitalize cursor-pointer hover:scale-105 hover:text-blue-500 duration-150"
//             >
//               {link}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default NavBar;
