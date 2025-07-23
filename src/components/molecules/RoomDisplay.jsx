"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RoomSection = () => {
  const roomImages = [
    {
      id: 1,
      src: "/assets/displayRooms/room.png",
      alt: "Luxury bedroom with tufted headboard and seating area",
      title: "Master Bedroom Suite",
    },
    {
      id: 2,
      src: "/assets/displayRooms/room-2.jpg",
      alt: "Modern living room with sofa and contemporary decor",
      title: "Living Room Area",
    },
    {
      id: 3,
      src: "/assets/displayRooms/room-3.png",
      alt: "Elegant bedroom with modern styling and warm lighting",
      title: "Premium Room View",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(roomImages[2]); // Default to the third image
  const [currentIndex, setCurrentIndex] = useState(2);

  const handlePrevious = () => {
    const newIndex =
      currentIndex > 0 ? currentIndex - 1 : roomImages.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(roomImages[newIndex]);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex < roomImages.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(roomImages[newIndex]);
  };

  const handleThumbnailClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  return (
    <section className="w-full py-16">
      <div className="lg:container lg:mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-40">
          {/* Left Content */}
          <div className="lg:w-1/2 w-full">
            <div className="space-y-8">
              {/* Header with Navigation */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-4xl lg:text-5xl font-lora font-medium text-gray-900 leading-tight">
                    Luxury Experience
                  </h2>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrevious}
                      className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200"
                      aria-label="Previous room image"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200"
                      aria-label="Next room image"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>
                </div>

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

              {/* Text Content */}
              <div className="space-y-6">
                <p className="text-lg text-gray-800 leading-relaxed">
                 With every detail thoughtfully curated for your comfort,
                  WangShi China Palace ensures that each visit is a luxury experience you'll cherish forever.
                </p>

                <p className="text-base text-gray-500 leading-relaxed">
                  Indulge in a premier getaway at WangShi China Palace Bed and Breakfast Inn, where luxury meets serenity. 
                  Our elegant accommodations are designed for both business and leisure travelers, offering the perfect blend of comfort and refinement. From the moment you arrive, enjoy a complimentary glass of champagne, 
                  setting the tone for a truly memorable stay.
                </p>
              </div>
              <div className="block lg:hidden lg:w-1/2 w-full">
                <div className="relative h-96 lg:h-full overflow-hidden shadow-xl">
                  <Image
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    fill
                    className="object-cover transition-opacity duration-500"
                    priority
                  />

                  {/* Image Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <h3 className="text-white text-xl font-semibold">
                      {selectedImage.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-3 lg:gap-20 mt-8">
                {roomImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => handleThumbnailClick(image, index)}
                    className={`relative w-32 h-32 md:w-56 md:h-56 lg:w-72 lg:h-72 overflow-hidden transition-all duration-300 group cursor-pointer outline-none ${
                      selectedImage.id === image.id ? "" : ""
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Display */}
          <div className="hidden lg:block lg:w-1/2 w-full">
            <div className="relative h-96 lg:h-full overflow-hidden shadow-xl">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-cover transition-opacity duration-500"
                priority
              />

              {/* Image Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomSection;
