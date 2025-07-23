import Link from "next/link";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { Navbar } from "./Navbar";

const Header = () => {
  return (
    <div className="h-20  lg:h-40 flex flex-col md:justify-center w-full">
      {/* Top Bar - Hidden on mobile */}
      <section className="bg-primary h-12 md:hidden lg:flex justify-between px-4 lg:px-72 font-roboto font-normal hidden">
        <div className="flex items-center gap-3">
          {/* Location */}
          <div className="text-secondary flex items-center gap-2 text-xs">
            <FaLocationArrow />
            <span className="text-xs hover:text-white transition-colors duration-300 cursor-default">
              3108 E Hefner Rd, Oklahoma City, OK 73131, United States
            </span>
          </div>
        </div>
        {/* Contact */}
        <div className="flex items-center gap-5 text-secondary">
          <span className="flex items-center gap-2 text-xs">
            <FaPhone className="rotate-90" />
            <Link
              href={"tel:4055481035"}
              className="hover:text-white transition-colors duration-300"
            >
              (405) 548-1035
            </Link>
          </span>
          <div className="bg-secondary/50 h-4 w-[0.5px]" />
          <span className="flex items-center gap-2 text-xs">
            <FaPhone className="rotate-90" />
            <Link
              href={"tel:4059239648"}
              className="hover:text-white transition-colors duration-300"
            >
              (405) 923-9648
            </Link>
          </span>
        </div>
      </section>
      {/* Navbar */}
      <section className="flex items-center justify-between h-full md:justify-between lg:justify-around px-4 md:px-10">
        {/* Logo */}
        <Link href={"/"} className="cursor-pointer">
          <span className="text-secondary font-medium font-lora text-xl">
            Wang Shi China Palace
          </span>
        </Link>
        <Navbar />
      </section>
    </div>
  );
};

export default Header;
