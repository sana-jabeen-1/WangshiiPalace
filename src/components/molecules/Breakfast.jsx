"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BreakfastMenuSection = () => {
  const swiperRef = useRef(null);

  const breakfastItems = [
    {
      id: 1,
      name: "Asian Noodle Salad",
      image: "/assets/breakfast/food.jpg",
      description:
        "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,",
      
    },
    {
      id: 2,
      name: "Chopped Romaine",
      image: "/assets/breakfast/food-2.jpg",
      description:
        "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,",
      
    },
    {
      id: 3,
      name: "Roma Vegetables",
      image: "/assets/breakfast/food-3.jpg",
      description:
        "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,",
      
    },
    {
      id: 4,
      name: "Toasted Pecan Caramel",
      image: "/assets/breakfast/food-4.jpg",
      description:
        "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,",
      
    },
    {
      id: 5,
      name: "Bok Chow Slaw",
      image: "/assets/breakfast/food-5.jpg",
      description:
        "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,",
     
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

  // Add isMobile state and check window width on mount and resize
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="py-16">
      <div className=" px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-lora font-light text-gray-800 mb-8">
            Breakfast
          </h2>
        </div>

        {/* Swiper Container */}
        <div className="relative ">
          {/* Custom Navigation Buttons */}
          <button
            onClick={handlePrevSlide}
            className="absolute -left-1 lg:left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 lg:w-12 lg:h-12 bg-white bg-opacity-80 hover:bg-opacity-100 rounded transition-all duration-200 flex items-center justify-center shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={handleNextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 lg:w-12 lg:h-12 bg-white bg-opacity-80 hover:bg-opacity-100 rounded transition-all duration-200 flex items-center justify-center shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Swiper */}
          <div className="px-5">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={isMobile ? 20 : 10}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="breakfast-menu-swiper w-80 md:w-[650px] lg:w-[1800px] flex items-center justify-center gap-10 lg:gap-8"
            >
              {breakfastItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 md:w-[250px] lg:w-[350px] lg:h-[537px] flex flex-col md:ml-10 lg:ml-10">
                    {/* Food Image */}
                    <div className="relative w-96 h-72 overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="p-4 flex flex-col flex-grow">
                      {/* Item Name */}
                      <h3 className="text-lg font-lora font-light text-gray-900 mb-2">
                        {item.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm font-lora font-light leading-relaxed mb-4 flex-grow line-clamp-3">
                        {item.description}
                      </p>

                      {/* Price */}
                      <div className="flex items-center mt-auto">
                        <span className="text-2xl font-lora font-light text-secondary">
                          {item.price}
                        </span>
                        
                      </div>
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

export default BreakfastMenuSection;
