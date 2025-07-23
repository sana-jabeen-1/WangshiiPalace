"use client";
import { useState } from "react";
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EventsFilters = ({ onFilterChange, showFilters = true }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Corporate",
    "Wedding",
    "Conference",
    "Social",
    "Cultural",
    "Holiday",
  ];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    onFilterChange?.({ category, search: searchTerm });
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    onFilterChange?.({ category: activeCategory, search: value });
  };

  if (!showFilters) return null;

  return (
    <section className="bg-white py-8 border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10 font-lora font-light border-gray-200 focus:border-secondary"
              />
            </div>
            <Button
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-white font-lora font-light rounded-none"
            >
              <Filter className="w-4 h-4 mr-2" />
              Advanced Filters
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-lora font-light transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-secondary text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsFilters;
