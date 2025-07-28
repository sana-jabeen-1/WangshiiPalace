"use client";
import { useState } from "react";
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

const Booking = () => {
  const [checkInDate, setCheckInDate] = useState(new Date()); // Jun 17
  const [checkOutDate, setCheckOutDate] = useState(
    new Date(Date.now() + 24 * 60 * 60 * 1000) // Fixed: proper Date object
  ); // Jun 18
  const [adults, setAdults] = useState("2");
  const [kids, setKids] = useState("1");

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleCheckInDateChange = (date) => {
    if (date) {
      setCheckInDate(date);
      // If checkout date is before or equal to new check-in date, set it to next day
      if (new Date(checkOutDate) <= date) {
        const nextDay = new Date(date);
        nextDay.setDate(date.getDate() + 1);
        setCheckOutDate(nextDay);
      }
    }
  };

  const handleCheckOutDateChange = (date) => {
    if (date && date > checkInDate) {
      setCheckOutDate(date);
    }
  };

  const handleBooking = () => {
    const checkInFormatted = format(checkInDate, 'yyyy-MM-dd');
    const checkOutFormatted = format(checkOutDate, 'yyyy-MM-dd');
    const bookingUrl = `https://direct-book.com/properties/wangshichinapalacedirect?locale=en&from_widget=true&roomTypeId=&checkInDate=${checkInFormatted}&checkOutDate=${checkOutFormatted}&referrer=canvas&items[0][adults]=${adults}&items[0][children]=${kids}&items[0][infants]=0&currency=USD&trackPage=yes`;
    window.open(bookingUrl, '_blank');
  };

  return (
   
    <Card className="absolute top-077 bottom-0 lg:-bottom-63 lg:p-0 left-1/2 bottom-1/7 transform -translate-x-2/4 -translate-y-1/20 w-10/12 lg:max-w-6xl rounded-none shadow-xl z-20">
      <CardContent className="py-0 lg:p-2">
        <div className="flex flex-col lg:flex-row lg:min-h-[100px]">
          {/* Left section - White background */}
          <div className="flex-1 bg-white p-8">
            <div className="grid lg:grid-cols-3 items-center justify-center lg:items-start lg:justify-start gap-8">
              {/* Check In */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <CalendarIcon className="w-5 h-5" />
                  <span className="text-2xl font-semibold">Check In</span>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="cursor-pointer">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl text-gray-900">
                          {format(checkInDate, "dd")}
                        </span>
                        <div>
                          <span className="text-lg text-gray-600">
                            {format(checkInDate, "MMM")} /{" "}
                            {format(checkInDate, "dd")}
                          </span>
                        </div>
                        <span className="text-gray-400 text-2xl">...</span>
                      </div>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 bg-white border shadow-lg"
                    align="start"
                    sideOffset={5}
                    style={{ zIndex: 9999 }}
                  >
                    <Calendar
                      mode="single"
                      selected={checkInDate}
                      onSelect={handleCheckInDateChange}
                      initialFocus
                      className="bg-white"
                      disabled={(date) => date < today}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Check Out */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <CalendarIcon className="w-6 h-6" />
                  <span className="text-2xl font-semibold">Check Out</span>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="cursor-pointer">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-semibold text-gray-900">
                          {format(new Date(checkOutDate), "dd")}
                        </span>
                        <div>
                          <span className="text-lg text-gray-600">
                            {format(new Date(checkOutDate), "MMM")} /{" "}
                            {format(new Date(checkOutDate), "dd")}
                          </span>
                        </div>
                        <span className="text-gray-400 text-2xl">...</span>
                      </div>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 bg-white border shadow-lg"
                    align="start"
                    sideOffset={5}
                    style={{ zIndex: 9999 }}
                  >
                    <Calendar
                      mode="single"
                      selected={new Date(checkOutDate)}
                      onSelect={handleCheckOutDateChange}
                      initialFocus
                      className="bg-white"
                      disabled={(date) => date <= checkInDate}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <div className="text-gray-500 text-2xl font-medium font-roboto">
                  Guests : Kids + Adults
                </div>
                <div className="flex items-center gap-4">
                  {/* Kids Selection */}
                  <select
                    value={kids}
                    onChange={(e) => setKids(e.target.value)}
                    className="w-16 text-xl font-medium text-gray-900 border-0 focus:outline-none cursor-pointer"
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>

                  <span className="text-2xl font-medium text-gray-900">+</span>

                  {/* Adults Selection */}
                  <select
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="w-24 text-2xl font-medium font-roboto text-gray-900 border-0 focus:outline-none cursor-pointer"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right section - Dark background */}
          <div className="lg:w-96 bg-gray-900 flex flex-col justify-center items-center text-center py-8 p-10">
            <div className="text-white text-lg mb-6">
              Click below for Booking
            </div>
            <Button 
              onClick={handleBooking}
              className="bg-secondary hover:bg-white text-white hover:text-primary px-8 py-4 text-lg font-medium rounded-none"
            >
              Check Availability
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
   
  );
};

export default Booking;
