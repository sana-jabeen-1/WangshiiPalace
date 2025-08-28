"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const RoomsPricingSectionn = ({ title, rooms }) => {

  const handleBooking = () => {
    // Open the booking link in a new window
    const bookingUrl =
      "https://direct-book.com/properties/wangshichinapalacedirect?locale=en&referrer=canvas&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2025-07-22&checkOutDate=2025-07-23&trackPage=yes";
    window.open(bookingUrl, "_blank");
  };

  return (
    <section className="py-16 font-lora font-light">
      <div className="px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-lora font-medium text-gray-900 mb-6">
            {title}
          </h2>

          {/* Decorative fleur-de-lis with lines */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-0.5 w-16 bg-gray-300"></div>
            <Image
              src="/assets/resources/element.png"
              alt="Fleur-de-lis"
              width={40}
              height={40}
              className="w-8 h-8"
            />
            <div className="h-0.5 w-16 bg-gray-300"></div>
          </div>
        </div>

        {/* Horizontal Scrollable Room Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-4">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="w-full flex flex-col items-center justify-center"
            >
              {/* Room Image */}
              <div className="relative w-full h-64 overflow-hidden group">
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={room.title}
                  layout="fill"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 transition-opacity duration-300 group-hover:opacity-100">
                  <Button 
                    onClick={handleBooking}
                    className="bg-secondary hover:bg-primary text-primary hover:text-white px-6 py-2 rounded-none "
                  >
                    Book Now
                  </Button>
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6 bg-[#ffffff] w-[90%] -mt-16 z-10 relative">
                {/* Room Title */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {room.title}
                </h3>

                {/* Amenities */}
                <div className="flex items-center gap-2 mb-4">
                  {room.amenities.map((amenity, index) => (
                    <span
                      key={amenity}
                      className="text-secondary text-roboto font-medium text-lg"
                    >
                      {amenity}
                      {index < room.amenities.length - 1 && (
                        <span className="mx-2">-</span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {room.description}
                </p>

                {/* Price Button */}
                {/* <div className="flex justify-end">
                  <Button
                    className={`px-8 py-3 rounded-none font-medium bg-secondary hover:bg-primary text-black hover:text-white self-end`}
                  >
                    {room.price}/Night
                  </Button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default RoomsPricingSectionn;
