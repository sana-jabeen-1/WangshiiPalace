"use client";
import { useState } from "react";
import Image from "next/image";

const PhotoGallerySection = () => {
  const [activeTab, setActiveTab] = useState("All photos");

  const tabs = ["All photos", "Property and surroundings", "Rooms", "Events"];

  const propertyPhotos = Array(16)
    .fill()
    .map((_, index) => ({
      id: index + 1,
      image:
        index === 0
          ? "/assets/gallery/property.webp"
          : `/assets/gallery/property-${index + 1}.webp`,
      category: "Property and surroundings",
      title: `Property View ${index + 1}`,
    }));

  const roomPhotos = Array(14)
    .fill()
    .map((_, index) => ({
      id: index + 1,
      image:
        index === 0
          ? "/assets/gallery/room.webp"
          : `/assets/gallery/room-${index + 1}.webp`,
      category: "Rooms",
      title: `Room ${index + 1}`,
    }));

  const eventPhotos = Array(4)
    .fill()
    .map((_, index) => ({
      id: index + 1,
      image:
        index === 0
          ? "/assets/gallery/event.webp"
          : `/assets/gallery/event-${index + 1}.webp`,
      category: "Events",
      title: `Event Space ${index + 1}`,
    }));

  const photos = [...propertyPhotos, ...roomPhotos, ...eventPhotos];

  const filteredPhotos =
    activeTab === "All photos"
      ? photos
      : photos.filter((photo) => photo.category === activeTab);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-col md:flex-row lg:flex-row flex-wrap gap-2 bg-gray-100 p-2 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer px-6 py-3 text-sm font-medium rounded-md transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gray-900 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:max-w-7xl mx-auto px-4">
        {filteredPhotos.map((photo, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Photo */}
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={photo.image || "/placeholder.svg"}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Results Count */}
      <div className="text-center mt-12">
        <p className="text-gray-500 font-lora font-light">
          Showing {filteredPhotos.length}{" "}
          {filteredPhotos.length === 1 ? "photo" : "photos"}
          {activeTab !== "All photos" && ` in ${activeTab}`}
        </p>
      </div>
    </section>
  );
};

export default PhotoGallerySection;
