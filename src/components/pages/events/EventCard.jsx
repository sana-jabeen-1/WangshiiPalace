import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";

const EventCard = ({
  id,
  title,
  image,
  description,
  date,
  time,
  location,
  capacity,
  category,
  slug,
  featured = false,
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
        featured ? "ring-2 ring-secondary" : ""
      }`}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
          {category}
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            Featured
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Date and Time */}
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-secondary" />
            <span className="font-lora font-light">{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-secondary" />
            <span className="font-lora font-light">{time}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-lora font-light text-gray-900 mb-3 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 font-lora font-light text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Location and Capacity */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="font-lora font-light">{location}</span>
          </div>
          {capacity && (
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-secondary" />
              <span className="font-lora font-light">{capacity} guests</span>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <Link
          href={`/events/${slug}`}
          className="inline-flex items-center gap-2 text-secondary hover:text-gray-900 font-lora font-light text-sm transition-colors duration-200 group/link"
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
