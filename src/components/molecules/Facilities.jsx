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

const FacilitiesSection = () => {
  const swiperRef = useRef(null);

  const facilities = [
    {
      image: "/assets/facilities/slider.webp",
      title: "Spa & Wellness",
      description: "Relaxing massage and wellness treatments",
    },
    {
      image: "/assets/facilities/slider-2.webp",
      title: "Fine Dining",
      description: "Exquisite restaurant with premium cuisine",
    },
    {
      image: "/assets/facilities/slider-3.webp",
      title: "Wellness Center",
      description: "Complete wellness and fitness facilities",
    },
    {
      image: "/assets/facilities/slider-5.webp",
      title: "Fine Dining",
      description: "Exquisite restaurant with premium cuisine",
    },
    {
      image: "/assets/facilities/slider-2.png",
      title: "Spa & Wellness",
      description: "Relaxing massage and wellness treatments",
    },
  ];

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
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
          {/* Left Content */}
          <div className="lg:w-1/2 w-full space-y-8 flex flex-col items-center justify-center text-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-lora font-medium text-gray-900 leading-tight">
                Facilities Available
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

            <div className="space-y-6 flex items-center justify-center">
              <p className="w-[90%] lg:w-full text-base text-gray-600 leading-relaxed">
                With every detail thoughtfully curated for your comfort,
                 WangShi China Palace ensures that each visit is a luxury experience you'll cherish forever.
                 Start your day with a freshly prepared, delicious breakfast, included with every stay.
                 WangShi provides multiple relaxing spots designed to help you escape the everyday hustle.
                 WangShi China Palace welcomes your furry friends to enjoy the retreat with you, 
                 ensuring a stress-free and memorable stay for all.

              </p>
            </div>

            {/* Read More Button 
            <div className="pt-4">
              <Button className="bg-secondary hover:bg-white text-white hover:text-primary font-medium px-8 py-6 text-lg rounded-none">
                Read More
              </Button>
            </div>*/}
          </div>

          {/* Right Image */}
          <div className="hidden lg:block lg:w-1/2 w-full">
            <div className="relative lg:h-96 overflow-hidden">
              <Image
                src="/assets/facilities/image.png"
                alt="Swimming pool with person relaxing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Slider Section */}
        <div className="hidden lg:block relative">
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
          <div className="hidden lg:block lg:px-16 ">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="facilities-swiper"
            >
              {facilities.map((facility, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-none">
                    <div className="relative lg:h-64">
                      <Image
                        src={facility.image || "/placeholder.svg"}
                        alt={facility.title}
                        fill
                        className="object-cover "
                      />
                    </div>
                    {/* <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {facility.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {facility.description}
                      </p>
                    </div> */}
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

export default FacilitiesSection;
