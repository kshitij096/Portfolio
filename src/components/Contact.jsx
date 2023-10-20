import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const contact = [
    {
      id: 1,
      icon: faMapLocationDot,
      location: "Location",
      city: "Gorakhpur",
    },
    {
      id: 2,
      icon: faEnvelopeOpenText,
      location: "Mail",
      address: "singhkshitij210@gmail.com",
    },
  ];

  // const openEmail = () => {
  //   const email = "example@example.com"; // Replace with your email ID
  //   window.location.href = `mailto:${email}`;
  // };

  return (
    <div
      name="contact"
      className="px-10 py-10  md:flex md:flex-row  md:justify-center dark:bg-gray-800"
    >
      <div className="flex flex-col justify-center items-center lg:flex-row gap-20">
        <div className="w-full flex flex-col text-center mt-14 ">
          <h3 className="text-lg font-semibold text-blue-500 mb-2 uppercase ">
            Contact
          </h3>
          <h2 className="text-2xl font-bold text-black mb-12 dark:text-gray-300">
            Don't be shy! Hit me up! 👇
          </h2>
        </div>

        {contact.map(({ id, icon, location, address, city }) => (
          <div
            key={id}
            className="flex flex-col md:flex-row  gap-20 text-center"
          >
            <div className="w-full">
              <i>
                <FontAwesomeIcon
                  className="my-4 mx-10 text-blue-600 text-3xl rounded-full shadow-2xl"
                  icon={icon}
                />
              </i>

              <h3 className="text-lg font-bold text-black mb-2">{location}</h3>
              <p className=" r text-lg font-small text-gray-400 ">{city}</p>
              <p className=" cursor hover:text-blue-600 text-lg font-small text-gray-400 ">
                {address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
