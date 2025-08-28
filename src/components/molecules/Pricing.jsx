"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RoomsPricingSection = ({ title, rooms }) => {
  const swiperRef = useRef(null);

  const handleBooking = () => {
    const bookingUrl =
      "https://direct-book.com/properties/wangshichinapalacedirect?locale=en&referrer=canvas&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2025-07-22&checkOutDate=2025-07-23&trackPage=yes";
    window.open(bookingUrl, "_blank");
  };

  // Handle the previous and next slide navigation
  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
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

        {/* Swiper Slider */}
        <div className="relative">
          {/* Custom Navigation Buttons */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-600 hover:bg-yellow-700 text-white p-3 rounded-none transition-colors duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-600 hover:bg-yellow-700 text-white p-3 rounded-none transition-colors duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Swiper Container */}
          <div className="hidden lg:block lg:px-16">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false, 
              }}
              breakpoints={{
               640: {
                  slidesPerView: 1, // 1 slide per view on mobile
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2, // 2 slides per view on tablet
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3, // 3 slides per view on desktop
                  spaceBetween: 30,
                },
                
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="facilities-swiper"
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
