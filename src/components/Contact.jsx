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
      address: "Gorakhpur",
    },
    {
      id: 2,
      icon: faEnvelopeOpenText,
      location: "Mail",
      address: "singhkshitij211@gmail.com",
    },
  ];

  return (
    <div name="contact" className="px-10 mb-20 md:flex-row">
      <div className=" flex flex-col  justify-center items-center ">
        <div className="w-full flex flex-col text-center mt-14">
          <h3 className="text-lg font-semibold text-blue-500 mb-2  uppercase ">
            Contact
          </h3>
          <h2 className="text-2xl font-bold text-black mb-12">
            Don't be shy! Hit me up! 👇
          </h2>
        </div>

        {contact.map(({ id, icon, location, address }) => (
          <div key={id} className=" flex flex-row gap-20 text-center">
            <div className="w-full mt-4 ">
              <div className="w-full    ">
                <i>
                  <FontAwesomeIcon
                    className=" my-4  mx-10 text-blue-600 text-3xl rounded-full shadow-2xl "
                    icon={icon}
                  />
                </i>

                <h3 className="text-lg font-bold text-black mb-2">
                  {location}
                </h3>
                <p className="text-lg font-small text-gray-400 ">{address}</p>
              </div>
            </div>
            {/* <div>
              <div>
                <FontAwesomeIcon
                  className=" my-4  mx-10 text-blue-600 text-3xl rounded-full shadow-2xl "
                  icon={faEnvelopeOpenText}
                />
                <h3 className="text-lg font-bold text-black">Mail</h3>
                <p>lorem</p>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
