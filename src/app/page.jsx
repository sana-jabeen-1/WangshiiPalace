import Booking from "@/components/molecules/Booking";
import BreakfastMenuSection from "@/components/molecules/Breakfast";
import FacilitiesSection from "@/components/molecules/Facilities";
import LocationSection from "@/components/molecules/Location";
import NewsEventsSection from "@/components/molecules/News";
import Newsletter from "@/components/molecules/Newsletter";
import RoomsPricingSection from "@/components/molecules/Pricing";
import RoomSection from "@/components/molecules/RoomDisplay";
import TestimonialsSection from "@/components/molecules/Testimonials";
import WhyHireUsSection from "@/components/molecules/WhyHireUs";
import Hero from "@/components/ui/Hero";
import RelaxSection from "@/components/ui/Place";

const Home = () => {
  const rooms = [
    {
      id: 1,
      title: "Elite Room Type #3",
      image: "/assets/pricing/room.png",
      amenities: ["King & Futon, Shower, Patio, Firepit, Swing"],
      description:
        "Partly Pet Friendly Rooms , If bringing a pet please call ahead",
      price: "$110.0",
      priceColor: "bg-yellow-600 hover:bg-yellow-700 text-white",
    },
    {
      id: 2,
      title: "Family Room Type #5",
      image: "/assets/pricing/room-2.png",
      amenities: ["2 Full XL, King & Futon, Jacuzzi, Shower (Wheel Chair Accessible) , Patio, Fire pit, Swing"],
      description:
        "Pet Friendly Room",
      price: "$165.0",
      priceColor: "bg-gray-900 hover:bg-gray-800 text-white",
      hasBookButton: true,
    },
    {
      id: 3,
      title: "Quadruple Room Type #4",
      image: "/assets/pricing/room-3.png",
      amenities: ["Full XL & King, Jacuzzi Tub, & Shower, Patio, Fire Pit"],
      description:
        "Pet Friendly Room",
      price: "$110.0",
      priceColor: "bg-yellow-600 hover:bg-yellow-700 text-white",
    },
    
  ];

  

  return (
    <div className="font-roboto flex flex-col items-center justify-center">
      <Hero />
      <Booking />
      <RelaxSection />
      <WhyHireUsSection />
      <FacilitiesSection />
      <RoomSection />
      <RoomsPricingSection rooms={rooms} title={"Rooms & Pricing"} />
      <BreakfastMenuSection />
      <NewsEventsSection />
      <TestimonialsSection />
      <LocationSection />
      <Newsletter />
    </div>
  );
};

export default Home;
