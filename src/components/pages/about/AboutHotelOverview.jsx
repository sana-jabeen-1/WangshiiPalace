"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AboutHotelOverviewSection = () => {
  const swiperRef = useRef(null);

  const roomImages = [
    {
      id: 1,
      image: "/assets/about/room.webp",
      title: "Luxury Suite",
      description:
        "The WangShi China Palace Bed and Breakfast Inn offers delightfully comfortable accommodations.",
      category: "Accommodation",
    },
    {
      id: 2,
      image: "/assets/about/room-2.webp",
      title: "Deluxe Room",
      description:
        "The WangShi China Palace Bed and Breakfast Inn offers delightfully comfortable accommodations.",
      category: "Accommodation",
    },
    {
      id: 3,
      image: "/assets/about/room-3.webp",
      title: "Premium Suite",
      description:
        "The WangShi China Palace Bed and Breakfast Inn offers delightfully comfortable accommodations.",
      category: "Accommodation",
    },
  ];

  const statistics = [
    {
      number: "2000+",
      label: "Guests per year",
    },
    {
      number: "250+",
      label: "Rooms",
    },
    {
      number: "12+",
      label: "Cities Covered",
    },
    {
      number: "40+",
      label: "Services",
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
    <section className="mb-12">
      <div className="">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center justify-center gap-6 mb-16 lg:w-5/6">
          {/* Left Side - Room Swiper */}
          <div className="w-full flex items-start justify-center lg:justify-end">
            {/* Room Slider */}
            <div className="relative px-4 w-full lg:w-1/2">
              <div className="relative w-full">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={0}
                  slidesPerView={1}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  className="room-overview-swiper"
                >
                  {roomImages.map((room) => (
                    <SwiperSlide key={room.id}>
                      <div className="space-y-4">
                        {/* Room Image */}
                        <div className="relative w-full h-80  overflow-hidden">
                          <Image
                            src={room.image || "/placeholder.svg"}
                            alt={room.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Room Details */}
                        <div className="space-y-3">
                          <p className="text-xl text-primary font-lora font-medium leading-relaxed ">
                            {room.description}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Category and Navigation - Moved outside Swiper */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-secondary font-lora font-light text-sm">
                    {roomImages[0].category}
                  </span>
                  {/* Navigation Buttons */}
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={handlePrevSlide}
                      className="p-3 bg-gray-100 hover:bg-secondary hover:text-white transition-colors duration-300 rounded-full"
                      aria-label="Previous room"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextSlide}
                      className="p-3 bg-gray-100 hover:bg-secondary hover:text-white transition-colors duration-300 rounded-full"
                      aria-label="Next room"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>

          {/* Right Side - Hotel Title */}
          <div className="flex flex-col md:justify-center gap-6 px-4 w-full">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-lora font-light text-gray-900 leading-tight">
                Finest Hotel in USA
              </h2>

              {/* Decorative fleur-de-lis */}
              <div className="flex items-center gap-4">
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
            {/* Main Hotel Image */}
            <div className="mb-12">
              <div className="relative h-96 lg:h-[500px] overflow-hidden">
                <Image
                  src="/assets/about/hotel.webp"
                  alt="Beautiful hotel courtyard with white architecture and arches"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Description Text */}
        <div className="text-center lg:max-w-4xl lg:mx-auto mb-16 px-4">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl  font-lora font-medium text-primary leading-relaxed">
              WangShi China Palace was founded by Dow McCarty and Victoria McCarty . This husband-wife duo turned their home located in Oklahoma City, into a relaxing Bed and Breakfast Inn for Guests. With combined years of experience in operating "Twin Fountains RV Resort", the couple decided to solely operate a luxurious Bed & Breakfast Inn with attention to all facilities meeting guests'
               needs and desires for a relaxing trip.
            </h3>

            <p className="text-base font-roboto font-light text-gray-500 leading-relaxed text-justify">
              The WangShi China Palace Bed and Breakfast Inn offers delightfully comfortable accommodations, freshly prepared breakfast and a complimentary glass of champagne on arrival. With 5-acres tract, 
              the place is a true retreat with meandering walking trails, gazebo, fire pits, hot tub, swimming pool and picnic area. It is the perfect place to wind down after golfing, tennis, shopping, museum touring, amusement park outing and exploring National Memorial sites, or celebrating a weekend wedding. Accommodations at WangShi are suited to both vacation and business travelers. WangShi is a 26-unit house that is pet friendly. All rooms are decorated with diversified travelers in mind. Each bedroom possesses its own temperature control with a private bathroom, some featuring Jacuzzi tub while others with spacious shower. 
              We deliver daily housekeeping services at WangShi China Bed and Breakfast Inn.
            </p>

            <p className="text-base font-roboto font-light text-gray-500 leading-relaxed text-justify">
               Many of our bedrooms have their own private balconies or patios that provide the mesmerizing views of nature and countryside. You are facilitated with walking trails and fitness areas for our health-conscious guests. 
               You can also enjoy billiards and table tennis in our assembly area or enjoy the fireplace providing a relaxing atmosphere. At WangShi, we have all the facilities required for a perfect weekend. From hot tub to a large heated swimming pool, you can enjoy year-round relaxation. We offer both buffet and made to order breakfast, with dining both inside and outside. You can also request room service for private dining.
Amazing attractions surround WangShi Palace Bed & Breakfast Inn.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:max-w-4xl lg:mx-auto px-4">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 border border-gray-200 hover:bg-secondary transition-colors duration-300"
            >
              <div className="space-y-2">
                <h3 className="text-3xl font-lora font-light text-gray-900">
                  {stat.number}
                </h3>
                <p className="text-gray-500 font-lora font-light text-sm">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHotelOverviewSection;
