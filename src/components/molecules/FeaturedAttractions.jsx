"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Star, Clock } from "lucide-react";

const FeaturedAttraction = ({ attractions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentAttraction = attractions[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex(
      currentIndex > 0 ? currentIndex - 1 : attractions.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      currentIndex < attractions.length - 1 ? currentIndex + 1 : 0
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={currentAttraction.image || "/placeholder.svg"}
            alt={currentAttraction.name}
            fill
            className="object-cover"
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
            aria-label="Previous attraction"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
            aria-label="Next attraction"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
            {currentAttraction.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Rating */}
          {currentAttraction.rating && (
            <div className="flex items-center gap-1 mb-3">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-lg font-medium text-gray-700">
                {currentAttraction.rating}
              </span>
              <span className="text-sm text-gray-500">/5</span>
            </div>
          )}

          {/* Name */}
          <h3 className="text-2xl font-lora font-light text-gray-900 mb-3">
            {currentAttraction.name}
          </h3>

          {/* Address */}
          <div className="flex items-start gap-2 mb-3">
            <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
            <span className="text-gray-600 font-lora font-light">
              {currentAttraction.address}
            </span>
          </div>

          {/* Open Hours */}
          {currentAttraction.openHours && (
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600 font-lora font-light">
                {currentAttraction.openHours}
              </span>
            </div>
          )}

          {/* Description */}
          <p className="text-gray-600 font-lora font-light leading-relaxed">
            {currentAttraction.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedAttraction;
