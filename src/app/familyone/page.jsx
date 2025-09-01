import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Tag, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import PromotionCard from "@/components/molecules/PromotionCard";

export default function PromotionDetailPage({  }) {
  // In a real app, you would fetch this data based on the slug
  const promotion = {
    id: "1",
    title: "Family Room 2 Bath Type #1",
    image: "/assets/pricing/room-4.png",
    description:
      "Wang-shi China Palace is offering  to guests who want a non-refundable rate for pre-paid customers only. If you are interested in this deal please contact the front desk at (405) 548-1035 .",
    validUntil: "",
    category: "Early Bird Special",
    slug: "10-off-prepaid-reservations",
    fullDescription: `Wang-shi China Palace is offering a discount of 10% to guests who want a non-refundable rate for pre-paid customers only. If you are interested in this deal please contact the front desk at (405) 548-1035 to get your 10% off today.

This exclusive offer is perfect for travelers who prefer to secure their reservations in advance and enjoy significant savings on their luxury accommodation.`,
    terms: [
      "Non-Refundable",
      "Cancellation: Please note, if cancelled, modified or in case of no-show, the total price of the reservation will be charged.",
      "However, you can reschedule your stay once until 1 day before your stay for the same or higher price. You'll only be charged if there's a price difference between your new and old dates. (Deal not to include same day bookings)",
    ],
    features: [
      "Bathrobe on Request",
      "Evaporative Air-conditioning",
      "Non-Smoking",
      "Television",
      "Bathrobes Provided",
      "Linen and Towels Provided",
      "Rollaway Beds Available",
      "Wireless Internet",
      "Broadband Internet Access",
      "Hairdryer",
      "Shower over bat",
      "Verandah",
      "Linen Provided",
      "Room Service",
      "Views",
      "Cable/Satellite TV",
      "Iron/Ironing board",
      "Sofa Bed",
      "Weekly Room Service",
      "Heating",
      "Mini Fridge",
      "Shower over Bath/Spa",
      "Daily Room Service",
      "Mini Bar",
      "Tea/Coffee Making",
      "Air conditioned",
      "King Bed",
      "Outdoor Setting",
      "Telephone",
    ],
  };

  const rooms = [
     {
      id: 1,
      title: "Elite Room Type #3",
      link: "/elite",
      image: "/assets/pricing/room.png",
      amenities: ["King & Futon, Shower, Patio, Firepit, Swing"],
      description:
        "Partly Pet Friendly Rooms , If bringing a pet please call ahead",
      priceColor: "bg-yellow-600 hover:bg-yellow-700 text-white",
    },
    {
      id: 2,
     title: "Premier Room Type #8",
      image: "/assets/pricing/room-7.png",
      amenities: ["King & Futon, Shower, Balcony, Fire pit, /n Swing"],
      description:
        "Not Pet Friendly Rooms   ",
      priceColor: "bg-yellow-600 hover:bg-yellow-700 text-white",
       link: "/rooms",
    },
    {
      id: 3,
      title: "Quadruple Room Type #4",
      image: "/assets/pricing/room-3.png",
      amenities: ["Full XL & King, Jacuzzi Tub, & Shower, Patio, Fire Pit"],
      description:
        "Pet Friendly Room",
      priceColor: "bg-yellow-600 hover:bg-yellow-700 text-white",
       link: "/rooms",
    },
    {
      id: 4,
       link: "/rooms",
      title: "Family Room 2 Bath Type #1",
      image: "/assets/pricing/room-4.png",
      amenities: ["Full XL & King, 2 Bath w/ Jacuzzi Tubs, No Balcony/No Patio "],
      description:
        "Not Pet Friendly Rooms",
      priceColor: "bg-yellow-600 hover:bg-yellow-700 text-white",
    },
   
  ];

  return (
    <main>
      {/* Back Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-6">
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 text-secondary hover:text-gray-900 font-lora font-light transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            See all rooms
          </Link>
        </div>
      </div>

      {/* Promotion Detail */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-secondary" />
                <span className="text-secondary font-lora font-light">
                  {promotion.category}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-lora font-light text-gray-900 mb-6">
                {promotion.title}
              </h1>
            </div>

            {/* Main Image */}
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl mb-12">
                
              <Image
                src={promotion.image || "/placeholder.svg"}
                alt={promotion.title}
                fill
                className="object-cover"
              />
           
              {/* Discount Badge */}
              <div className="absolute top-6 left-6 bg-secondary text-white px-4 py-2 rounded-full text-lg font-medium">
                {promotion.discount}
              </div>
            </div>

            {/* Promotion Info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-lora font-light text-gray-900 mb-4">
                    About This Offer
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    {promotion.fullDescription
                      .split("\n\n")
                      .map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-gray-600 font-lora font-light leading-relaxed mb-4"
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-lora font-light text-gray-900 mb-4 w-full">
                    What's Included.......
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    {promotion.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 font-lora font-light text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div>
                  <h3 className="text-xl font-lora font-light text-gray-900 mb-4">
                    Terms & Conditions
                  </h3>
                  <div className="space-y-3">
                    {promotion.terms.map((term, index) => (
                      <div
                        key={index}
                        className="text-gray-600 font-lora font-light text-sm leading-relaxed"
                      >
                        {term.includes(":") ? (
                          <div>
                            <strong className="text-gray-800">
                              {term.split(":")[0]}:
                            </strong>
                            {term.split(":")[1]}
                          </div>
                        ) : (
                          <div>
                            <strong className="text-gray-800">{term}</strong>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Info */}
                {/* <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-lora font-light text-gray-900 mb-4">
                    Promotion Details
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Tag className="w-5 h-5 text-secondary" />
                      <div>
                        <div className="text-sm text-gray-500">Discount</div>
                        <div className="font-medium text-gray-900">
                          {promotion.discount}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-secondary" />
                      <div>
                        <div className="text-sm text-gray-500">Valid Until</div>
                        <div className="font-medium text-gray-900">
                          {promotion.validUntil}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-secondary" />
                      <div>
                        <div className="text-sm text-gray-500">
                          Booking Type
                        </div>
                        <div className="font-medium text-gray-900">
                          Prepaid Only
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* CTA */}
                {/* <div className="bg-secondary/10 p-6 rounded-lg text-center">
                  <h4 className="text-lg font-lora font-light text-gray-900 mb-3">
                    Ready to Book?
                  </h4>
                  <p className="text-sm text-gray-600 font-lora font-light mb-4">
                    Contact our front desk to secure this exclusive offer
                  </p>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-lora font-light">
                    Book Now
                  </Button>
                  <p className="text-xs text-gray-500 mt-3">(405) 548-1035</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Promotions */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-lora font-light text-gray-900">
              More Rooms
            </h2>
            <Link
              href="/rooms"
              className="text-secondary hover:text-gray-900 font-lora font-light transition-colors duration-200"
            >
              See All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 max-w-full">
            {rooms.map((promo) => (
              <PromotionCard key={promo.id} {...promo} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
