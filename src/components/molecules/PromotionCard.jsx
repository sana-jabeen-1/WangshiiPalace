import Link from "next/link";
import Image from "next/image";
import { Calendar, Tag, ArrowRight } from "lucide-react";

const PromotionCard = ({
  id,
  title,
  image,
  description,
  discount,
  validUntil,
  category,
  slug,
}) => {
  return (
    <Link
      href={`/promotions/${slug}`}
      className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Discount Badge */}
        <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 text-sm font-medium">
          {discount}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Category */}
        <div className="flex items-center gap-2 mb-3">
          <Tag className="w-4 h-4 text-secondary" />
          <span className="text-secondary text-sm font-lora font-light">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-lora font-light text-gray-900 mb-3 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 font-lora font-light text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Valid Until */}
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span className="text-gray-500 text-sm font-lora font-light">
            Valid until {validUntil}
          </span>
        </div>

        {/* CTA Button */}
        <button className="inline-flex items-center gap-2 text-secondary hover:text-gray-900 font-lora font-light text-sm transition-colors duration-200 group/link">
          View Details
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
        </button>
      </div>
    </Link>
  );
};

export default PromotionCard;
