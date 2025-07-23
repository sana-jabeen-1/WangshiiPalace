"use client";
import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AboutAwardsSection = () => {
  const swiperRef = useRef(null);

  const awards = [
    {
      id: 1,
      name: "Travel & Hospitality Award Winner",
      image: "/assets/about/award.png",
      year: "2023",
    },
    {
      id: 2,
      name: "TripAdvisor Travelers Choice",
      image: "/assets/about/award-2.png",
      year: "2018",
    },
    {
      id: 3,
      name: "World Luxury Hotel Awards",
      image: "/assets/about/award-3.png",
      year: "2017",
    },
    {
      id: 4,
      name: "Best of the Best",
      image: "/assets/about/award-4.png",
      year: "2022",
    },
  ];

  return (
    <section className="my-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-lora font-light text-gray-900 mb-8">
            Awards we Received
          </h2>

          {/* Decorative fleur-de-lis with lines */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-0.5 w-16 bg-secondary"></div>
            <Image
              src="/assets/resources/element.png"
              alt="Fleur-de-lis"
              width={40}
              height={40}
              className="w-8 h-8"
            />
            <div className="h-0.5 w-16 bg-secondary"></div>
          </div>
        </div>

        {/* Awards Carousel */}
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet awards-bullet",
              bulletActiveClass:
                "swiper-pagination-bullet-active awards-bullet-active",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="awards-swiper"
          >
            {awards.map((award) => (
              <SwiperSlide key={award.id}>
                <div className="text-center group">
                  {/* Award Image */}
                  <div className="flex justify-center mb-4">
                    <div className="relative h-32 w-40 flex items-center justify-center">
                      <Image
                        src={award.image || "/placeholder.svg"}
                        alt={award.name}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Award Details */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-lora font-light text-gray-800 leading-tight">
                      {award.name}
                    </h3>
                    <p className="text-xs text-secondary font-lora font-light">
                      {award.year}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .awards-swiper .swiper-pagination {
          bottom: -40px !important;
        }

        .awards-bullet {
          width: 8px !important;
          height: 8px !important;
          background: rgba(200, 181, 104, 0.3) !important;
          opacity: 1 !important;
          margin: 0 4px !important;
          transition: all 0.3s ease !important;
        }

        .awards-bullet-active {
          background: #c8b568 !important;
          transform: scale(1.2) !important;
        }

        .awards-swiper .swiper-pagination-bullet:hover {
          background: rgba(200, 181, 104, 0.7) !important;
        }
      `}</style>
    </section>
  );
};

export default AboutAwardsSection;
