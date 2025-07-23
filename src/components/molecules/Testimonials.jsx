"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialsSection = () => {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      text: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisl. Aenean vulputate eleifend tellus.",
      author: "Ram",
      title: "Traveller",
      year: "2018",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      author: "Sarah",
      title: "Business Executive",
      year: "2023",
    },
    {
      id: 3,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      author: "Michael",
      title: "Photographer",
      year: "2023",
    },
  ];

  return (
    <section
      className="relative h-[600px] w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/assets/resources/testimonials-bg.jpg')`,
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 bg-opacity-20"></div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet testimonial-bullet",
                bulletActiveClass:
                  "swiper-pagination-bullet-active testimonial-bullet-active",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-white bg-opacity-95 backdrop-blur-sm p-12 rounded-lg shadow-xl max-w-3xl mx-auto">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <svg
                        className="w-12 h-12 text-secondary opacity-60"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-gray-700 text-lg font-lora font-light leading-relaxed mb-8 italic">
                      {testimonial.text}
                    </blockquote>

                    {/* Author Attribution */}
                    <div className="text-right">
                      <cite className="text-gray-600 font-lora font-light text-base not-italic">
                        - {testimonial.author}, {testimonial.title}{" "}
                        {testimonial.year}
                      </cite>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination {
          bottom: 40px !important;
        }

        .testimonial-bullet {
          width: 12px !important;
          height: 12px !important;
          background: rgba(255, 255, 255, 0.5) !important;
          opacity: 1 !important;
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
        }

        .testimonial-bullet-active {
          background: #c8b568 !important;
          transform: scale(1.2) !important;
        }

        .testimonials-swiper .swiper-pagination-bullet:hover {
          background: rgba(200, 181, 104, 0.7) !important;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
