import Image from "next/image";
import { Button } from "@/components/ui/button";

const WhyHireUsSection = () => {
  const cards = [
    {
      image: {
        src: "/assets/hire/image-1.jpg",
        alt: "Safe & Security - Modern hotel interior with security systems",
      },
      title: "Safe & Security",
    },
    {
      image: {
        src: "/assets/hire/image-2.jpg",
        alt: "Professional Staff - Hotel staff providing excellent service",
      },
      title: "Professional Staff",
    },
    {
      image: {
        src: "/assets/hire/image-3.jpg",
        alt: "Luxury Experience - Premium hotel amenities and services",
      },
      title: "Luxury Experience",
    },
  ];

  return (
    <section
      className="bg-gray-900 py-16 w-full font-lora my-16"
      style={{
        backgroundImage: "url('/assets/hire/background.jpg')",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-34 w-full px-4 lg:px-8">
          {/* Left side - Feature Cards */}
          <div className="lg:w-4/6 w-full ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 01 - Safe & Security */}
              {cards.map(({ image, title }, index) => (
                <div className="relative group lg:w-96" key={index}>
                  <div className="relative h-[350px] lg:h-[511px] overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Number overlay */}
                    <div className="absolute top-4 left-4 bg-yellow-500 text-black font-bold text-lg px-3 py-1 rounded">
                      0{index + 1}
                    </div>
                  </div>
                  <div className="bg-gray-800 p-4 text-center w-full">
                    <h3 className="text-white text-lg font-medium">{title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* 
          {/* Right side - Text Content 
          <div className="lg:w-1/2 w-full space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-lora font-semibold text-white leading-tight">
                Why to Hire Us
              </h2>

              {/* Decorative fleur-de-lis with line 
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/resources/element.png"
                  alt="Fleur-de-lis"
                  width={40}
                  height={40}
                  className="w-8 h-8 filter brightness-0 invert"
                />
                <div className="h-0.5 w-24 bg-yellow-500" />
              </div>
              
            </div>

            <div className="space-y-6">
              {/* Main paragraph - white text 
              <p className="text-3xl font-lora font-medium text-white leading-relaxed">
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis pretium.
              </p>

              {/* Secondary paragraph - lighter gray text 
              <p className="text-lg font-lora text-gray-400 leading-relaxed">
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                eleifend tellus.
              </p>
            </div>

            {/* Book Now Button 
            <div className="pt-4">
              <Button className="bg-secondary hover:bg-white text-white hover:text-primary font-medium px-8 py-6 text-lg rounded-none">
                Book Now
              </Button>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default WhyHireUsSection;
