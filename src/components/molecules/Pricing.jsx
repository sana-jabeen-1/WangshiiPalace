"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const RoomsPricingSection = ({ title, rooms }) => {
  const swiperRef = useRef(null);

  const handleBooking = () => {
    const bookingUrl =
      "https://direct-book.com/properties/wangshichinapalacedirect?locale=en&referrer=canvas&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2025-07-22&checkOutDate=2025-07-23&trackPage=yes";
    window.open(bookingUrl, "_blank");
  };

  return (
    <section className="py-16">
      <div className="lg:container lg:mx-auto lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-lora font-medium text-gray-900 mb-6">
            {title}
          </h2>

          {/* Decorative fleur-de-lis */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-0.5 w-20 bg-secondary" />
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

        {/* Horizontal Scrollable Room Cards */}
        <div className="flex overflow-x-auto gap-8 py-4 scroll-smooth">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="flex-shrink-0 w-[calc(33.33%-2rem)] flex flex-col items-center justify-center"
            >
              {rooms.map((room, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-none">
                    <div className="relative lg:h-64">
                      <Image
                        src={room.image || "/placeholder.svg"}
                        alt={room.title}
                        layout="fill"
                        objectFit="cover"
                        className="object-cover"
                      />
                    </div>
                    {/* Room Details */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {room.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {room.description}
                      </p>
                      <Button
                        onClick={handleBooking}
                        className="bg-secondary hover:bg-primary text-white font-medium px-8 py-3 rounded-none"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsPricingSection;
