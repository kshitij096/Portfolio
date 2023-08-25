import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const footer = [
    {
      name: faSquareGithub,
      link: "https://github.com/kshitij096/",
    },
    {
      name: faLinkedin,
      link: "https://in.linkedin.com/",
    },
  ];

  return (
    <footer>
      <div name="footer" className="flex flex-col bg-[#2d2e32]">
        <div className=" flex flex-col items-center  justify-center text-center sm:gap-x-96 mt-12 mb-12 mx-10 sm:flex-row  gap-4">
          <h3 className="text-white text-lg  font-bold">
            Copyright © {year}. All rights are reseved
          </h3>

          <div className=" ">
            {footer.map(({ name, link }) => (
              <a
                className=" text-white text-2xl px-2 sm:text-right"
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
      </div>
    </footer>
  );
};

export default Footer;
