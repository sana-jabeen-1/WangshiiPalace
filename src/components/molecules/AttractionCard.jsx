import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Star, ArrowRight } from "lucide-react";

const AttractionCard = ({
  id,
  name,
  image,
  description,
  address,
  category,
  rating,
  distance,
  openHours,
  slug,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
          {category}
        </div>

        {/* Distance Badge */}
        <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
          {distance}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Rating */}
        {rating && (
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700">{rating}</span>
            <span className="text-xs text-gray-500">/5</span>
          </div>
        )}

        {/* Name */}
        <h3 className="text-lg font-lora font-light text-gray-900 mb-2 leading-tight">
          {name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 font-lora font-light text-sm leading-relaxed mb-3 line-clamp-2">
          {description}
        </p>

        {/* Address */}
        <div className="flex items-start gap-2 mb-3">
          <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
          <span className="text-gray-500 text-xs font-lora font-light leading-relaxed">
            {address}
          </span>
        </div>

        {/* Open Hours */}
        {openHours && (
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-gray-500 text-xs font-lora font-light">
              {openHours}
            </span>
          </div>
        )}

        {/* CTA Button */}
        <Link
          href={`/attractions/${slug}`}
          className="inline-flex items-center gap-2 text-secondary hover:text-gray-900 font-lora font-light text-sm transition-colors duration-200 group/link"
        >
          View Details
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default AttractionCard;
