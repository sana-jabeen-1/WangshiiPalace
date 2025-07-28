"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Banner from "../molecules/Banner";
import "swiper/swiper-bundle.css";




const Hero = () => {
  const bannerImages = [
    {
      src: "/assets/hero/banner.png",
      title: "Exceptional Comfort",
      description:
        "Immerse yourself in our thoughtfully designed rooms featuring and elegant decor.",
      cta: [
        {
          text: "Book Now",
           href: "https://direct-book.com/properties/wangshichinapalacedirect?locale=en&referrer=canvas&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2025-07-22&checkOutDate=2025-07-23&trackPage=yes",
          openInNewWindow: true,
        },
        {
          text: "Talk To Us",
          href: "/contact-us",
        },
      ],
    },
    {
      src: "/assets/hero/banner-2.jpg",
      title: "Modern Elegance",
      description:
        "luxury meets contemporary design, creating the perfect retreat for discerning travelers.",
      cta: [
        {
          text: "Book Now",
           href: "https://direct-book.com/properties/wangshichinapalacedirect?locale=en&referrer=canvas&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2025-07-22&checkOutDate=2025-07-23&trackPage=yes",
          openInNewWindow: true,
        },
        {
          text: "Talk To Us",
          href: "/contact-us",
        },
      ],
    },
    {
      src: "/assets/hero/banner-2.png",
      title: "Perfect Urban Escape",
      description:
        "Discover the ideal balance of sophistication and comfort in our carefully curated spaces .",
      cta: [
        {
          text: "Accommodations",
           href: "https://direct-book.com/properties/wangshichinapalacedirect?locale=en&referrer=canvas&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2025-07-22&checkOutDate=2025-07-23&trackPage=yes",
          openInNewWindow: true,
        },
      ],
    },
  ];

  return (
    <div className="w-full h-screen z-1">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // Continue autoplay even after user interaction
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay]}
      >
        {bannerImages.map((banner, index) => (
          <SwiperSlide key={index} className="">
            <Banner  
              bannerImage={banner.src}
              title={banner.title} 
              description={banner.description}
              cta={banner.cta}
              titleClass="banner-title"        // Add class for title
              descriptionClass="banner-desc"   // Add class for description
              ctaClass="banner-cta"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
