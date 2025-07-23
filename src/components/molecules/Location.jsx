"use client";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TbDeviceLandlinePhone } from "react-icons/tb";

const LocationSection = () => {
  return (
    <section className="w-full">
      {/* Main Location Section */}
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Left Side - Location Info */}
        <div className="lg:w-1/2 bg-gray-100 px-12 flex flex-col justify-center items-center ">
          <div className="">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-4xl font-lora font-light text-gray-900 mb-4 ">
                Where we are
              </h2>
              <div className="flex items-center gap-4 mb-8">
                <Image
                  src="/assets/resources/element.png"
                  alt="Fleur-de-lis"
                  width={40}
                  height={40}
                  className="w-8 h-8"
                />
                <div className="h-0.5 w-20 bg-secondary" />
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-lora font-light text-gray-800 mb-4">
                Location in the State
              </h3>

              <div className="flex items-center gap-8">
                {/* Address */}
                <div className="space-y-2 text-gray-600 font-lora font-light">
                  <p>3108 East Hefner Road</p>
                  <p>Oklahoma City OK 73131</p>
                  <p>United States</p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <IoMdMail className="text-secondary" />
                    <span className="text-gray-600 font-lora font-light">
                      contact@wangshipalace.com
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-secondary" />
                    <span className="text-gray-600 font-lora font-light">
                       (405) 405-548-1035
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TbDeviceLandlinePhone className="text-secondary" />
                    <span className="text-gray-600 font-lora font-light">
                       (405) 923-9648
                    </span>
                  </div>
                </div>
              </div>

              {/* Get Direction Button */}
              <div className="pt-4">
                <Button className="bg-secondary hover:bg-primary text-primary hover:text-white px-8 py-6 font-lora font-light rounded-none text-lg cursor-pointer">
                  Get Direction
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Google Maps */}
        <div className="w-full mt-10 lg:mt-0 lg:w-1/2 relative min-h-[400px] lg:min-h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d811.2496639044065!2d-97.458631!3d35.578425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b218bf745aabd5%3A0xd1764edb153cb177!2sWangshi%20Palace%20Bed%20%26%20Breakfast!5e0!3m2!1sen!2s!4v1753295223124!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
