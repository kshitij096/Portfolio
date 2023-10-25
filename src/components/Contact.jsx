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
    <section name="contact" className="flex justify-center dark:bg-gray-900">
      <div className="w-full md:w-3/4 lg:w-[65rem] px-10 md:mx-20 mx-10 my-[8rem]">
        <div className=" md:text-left text-center mb-14">
          <p className=" uppercase text-blue-600 text-lg font-bold mb-2">
            contact
          </p>
          <h3 className=" text-2xl font-bold text-black mb-12 dark:text-gray-300">
            Don't be shy! Hit me up! 👇
          </h3>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap text-left">
          {contact.map(({ id, icon, location, address, city }) => (
            <div
              key={id}
              className="flex md:flex-row flex-col  md:items-center justify-center items-center  my-0 gap-4 md:mr-28"
            >
              <span>
                <FontAwesomeIcon
                  className="my-2 flex mb-2  text-center  md:mr-1 p-3 shadow-md dark:shadow-slate-100 text-blue-600 text-3xl rounded-full"
                  icon={icon}
                />
              </span>
              <div className="md:mr-20 text-center md:text-left w-full mx-auto md:mx-0 ">
                <h3 className=" text-lg font-bold text-black mb-1 dark:text-slate-100">
                  {location}
                </h3>
                <p className="text-lg font-small text-gray-400 mb-4 md:mb-0">
                  {city}
                </p>
                <p className="cursor hover:text-blue-600 text-lg font-small text-gray-400">
                  {address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // return (
  //   <div
  //     name="contact"
  //     className="px-10 py-10  md:flex md:flex-row  md:justify-center dark:bg-gray-800"
  //   >
  //     <div className="flex flex-col justify-center items-center lg:flex-row gap-20">
  //       <div className="w-full flex flex-col text-center my-8 ">
  //         <h3 className="text-lg font-semibold text-blue-500 mb-2 uppercase ">
  //           Contact
  //         </h3>
  //         <h2 className="text-2xl font-bold text-black mb-12 dark:text-gray-300">
  //           Don't be shy! Hit me up! 👇
  //         </h2>
  //       </div>

  //       {contact.map(({ id, icon, location, address, city }) => (
  //         <div
  //           key={id}
  //           className="flex flex-col md:flex-row  gap-20 text-center"
  //         >
  //           <div className="w-full bg-red-100">
  //             <i>
  //               <FontAwesomeIcon
  //                 className="my-4 mx-10 text-blue-600 text-3xl rounded-full shadow-2xl"
  //                 icon={icon}
  //               />
  //             </i>

  //             <h3 className="text-lg font-bold text-black mb-2">{location}</h3>
  //             <p className=" r text-lg font-small text-gray-400 ">{city}</p>
  //             <p className=" cursor hover:text-blue-600 text-lg font-small text-gray-400 ">
  //               {address}
  //             </p>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default Contact;
