import Link from "next/link";
import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Newsletter = () => {
  const socials = [
    {
      icon: <FaFacebookF />,
      link: "#",
      title: "Facebook",
    },
    {
      icon: <FaInstagram />,
      link: "#",
      title: "Instagram",
    },
    {
      icon: <FaTwitter />,
      link: "#",
      title: "Twitter",
    },
    {
      icon: <FaLinkedinIn />,
      link: "#",
      title: "LinkedIn",
    },
    {
      icon: <FaPinterestP />,
      link: "#",
      title: "Pinterest",
    },
  ];

  return (
    <div className="min-h-96 w-full relative">
      <div className="absolute inset-0 bg-secondary/90 z-10 flex flex-col items-center justify-center">
        {/* Card */}
        <div className="bg-[#ffffff] w-80 lg:w-[1100px] h-[550px]  -mt-20 lg:-mt-16 flex flex-col items-center justify-center gap-6 py-6">
          <span className="text-secondary font-lora font-medium text-2xl lg:text-4xl">
            Stay in touch
          </span>
          <span className="text-[#777777] text-sm w-1/2 lg:w-full text-center ">
            Signup to receive news and updates from our hotel.
          </span>
          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 focus:outline-none focus:border-secondary transition-colors lg:w-[611px] h-[51px]"
            />
            <FiSend
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-secondary cursor-pointer transition-colors"
              size={22}
            />
          </div>{" "}
        </div>
        <div className="flex flex-col items-center justify-center h-full gap-8 my-5">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {socials.map((social, index) => (
              <Link
                href={social.link}
                key={index}
                className="flex items-center gap-2 hover:scale-110 transition-transform"
              >
                {React.cloneElement(social.icon, {
                  className: "text-white text-3xl",
                })}

                <div className="h-0.5 w-4 bg-white" />
                <span className="text-white text-sm">{social.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/resources/newletter-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default Newsletter;
