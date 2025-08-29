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
      text: "My roommate, a friend and myself stayed here over Memorial Day weekend. We were attending a con in OKC and wanted to stay somewhere other than home. Its really close to the city, only about 15 minute drive and a good deal cheaper than what we would have paid at one of the hotels closer. The rooms were spacious, beautiful and very clean. The pool and hot tub were absolutely a delight.",
      author: "Seras Alverna",
      title: "Friends",
      year: "2025",
    },
    {
      id: 2,
      text: "We had an amazing experience here. We wanted to stay somewhere to enjoy the con and we switched to this b&b because it was cheaper than the big hotels. The woman over it was so sweet even though we woke her up at 1 am when we got there due to scheduling on a website. I recommend calling for reservations but that was due to the website, not them. She was sweet and her and the others took great care of us!",
      author: "Roda Stoat",
      title: "Friends",
      year: "2023",
    },
    {
      id: 3,
      text: "This is a unique B&B close enough to the city but secluded for peace and relaxation. The owner was sweet and VERY friendly and hospitable. She was always there to attend to anything we wanted.The breakfast was good. The bacon was cooked perfectly and they will make you waffles if you ask.We loved the mornings on the balcony in our room to have coffee and look out at the natural landscape.",
      author: "Brad Townsend",
      title: "Couple",
      year: "2024",
    },
    {
      id: 4,
      text: "Beautiful, quiet, secluded bed & breakfast.  The owner was as sweet as she can be & so helpful! Breakfast was delicious & hot. Coffee was awesome. Pool was fabulous. I got married on their gazebo & they were absolutely amazing & accommodating! They welcomed every happy moment for my special day!! They had a heater to keep it cozy for our friends & family. She Decorated my room so beautifully.  And this was all on Thanksgiving! They provided wonderful limo service to dinner & picked us up. Very at home feel & cozy ambience.  It was so peaceful & amazing.  Best day & stay ever.",
      author: "Bridget Bell-Robertson",
      title: "Couple",
      year: "2024",
    },
  ];

  return (
    <section
      className=" w-full bg-cover bg-center bg-no-repeat h-auto lg:h-[600px]"
      style={{
        backgroundImage: `url('/assets/resources/testimonials-bg.jpg')`,
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 bg-opacity-20"></div>

      <div className="relative z-10 flex items-center justify-center py-6 lg:py-12">
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
