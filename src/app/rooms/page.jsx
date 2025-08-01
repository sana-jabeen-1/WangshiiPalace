import PageHeader from "@/components/layouts/PageHeader";
import RoomsPricingSection from "@/components/molecules/Pricing";
import RoomSection from "@/components/molecules/RoomDisplay";
import React from "react";

const Rooms = () => {
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
    {
      id: 4,
      title: "Family Room 2 Bath Type #1",
      image: "/assets/pricing/room-4.png",
      amenities: ["Full XL & King, 2 Bath w/ Jacuzzi Tubs, No Balcony/No Patio "],
      description:
        "Not Pet Friendly Rooms",
      price: "$110.0",
      priceColor: "bg-yellow-600 hover:bg-yellow-700 text-white",
    },
    {
      id: 5,
      title: "Quadruple Room Type #6",
      image: "/assets/pricing/room-5.png",
      amenities: ["Full XL, King & Futon, Jacuzzi Tub & Shower, Patio, Fire Pit "],
      description:
        "Pet Friendly Room",
      price: "$110.0",
      priceColor: "bg-yellow-600 hover:bg-yellow-700 text-white",
    },
    {
      id: 6,
      title: "Panoramic Room Type #7",
      image: "/assets/pricing/room-6.png",
      amenities: ["Full XL & Futon, Jacuzzi Tub, Pool View"],
      description:
        "Not Pet-friendly rooms",
      price: "$110.0",
      priceColor: "bg-yellow-600 hover:bg-yellow-700 text-white",
    },
     {
      id: 7,
      title: "Premier Room Type #8",
      image: "/assets/pricing/room-7.png",
      amenities: ["King & Futon, Shower, Balcony, Fire pit, Swing"],
      description:
        "Not Pet Friendly Rooms",
      price: "$110.0",
      priceColor: "bg-yellow-600 hover:bg-yellow-700 text-white",
    },
      {
      id: 8,
      title: "Family Room Type #9",
      image: "/assets/pricing/room-8.png",
      amenities: ["2 Full XL, King, Futon & Couch, Jacuzzi Tub, Balcony, Fire pit, Swing"],
      description:
        "Not Pet Friendly Room",
      price: "$110.0",
      priceColor: "bg-yellow-600 hover:bg-yellow-700 text-white",
    },
    {
      id: 9,
      title: "Quadruple Room Type # 10",
      image: "/assets/pricing/room-9.png",
      amenities: ["Full XL, King & Futon, Jacuzzi Tub & Shower, Bidet, Balcony, Firepit, Swing"],
      description:
        "Not Pet Friendly Room",
      price: "$110.0",
      priceColor: "bg-yellow-600 hover:bg-yellow-700 text-white",
    },
    {
      id: 10,
      title: "Signature Room type # 2",
      image: "/assets/pricing/room-10.png",
      amenities: ["King & Futon, Shower, Jacuzzi Tub, Patio"],
      description:
        "Pet Friendly Room",
      price: "$110.0",
      priceColor: "bg-yellow-600 hover:bg-yellow-700 text-white",
    },
     {
      id: 11,
      title: "Standard Suite Type #11",
      image: "/assets/pricing/room-11.png",
      amenities: ["2 Bedroom, King & Queen Beds, Shower, Kitchen, Living Room"],
      description:
        "",
      price: "$110.0",
      priceColor: "bg-yellow-600 hover:bg-yellow-700 text-white",
    },
    {
      id: 12,
      title: "Classic Double Room Type #12",
      image: "/assets/pricing/room-12.png",
      amenities: ["2 Full XL, Shower, Jacuzzi Tub"],
      description:
        "NOT a pet-friendly room",
      price: "$110.0",
      priceColor: "bg-yellow-600 hover:bg-yellow-700 text-white",
    },
  ];

  return (
    <div className="">
      <PageHeader
        title={"Rooms"}
        backgroundImage={"/assets/displayRooms/room-2.jpg"}
      />
      <RoomsPricingSection rooms={rooms} title={"Rooms"} />
    </div>
  );
};

export default Rooms;
