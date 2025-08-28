import PageHeader from "@/components/layouts/PageHeader";
import PromotionCard from "@/components/molecules/PromotionCard";

export default function PromotionsPage() {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Promotions" }];

  const promotions = [
    {
      id: "1",
      title: "10% off prepaid reservations",
      image: "/assets/gallery/property.avif",
      description:
        "Wang-shi China Palace is offering a discount of 10% to guests who want a non-refundable rate for pre-paid customers only. Book now and save on your luxury stay.",
      discount: "10% OFF",
      validUntil: "December 31, 2024",
      category: "Early Bird Special",
      slug: "10-off-prepaid-reservations",
    },
    {
      id: "2",
      title: "Weekend Getaway Package",
      image: "/assets/gallery/property-2.avif",
      description:
        "Escape to luxury with our weekend package including complimentary breakfast, spa access, and late checkout. Perfect for a romantic getaway or family retreat.",
      discount: "25% OFF",
      validUntil: "March 15, 2025",
      category: "Weekend Special",
      slug: "weekend-getaway-package",
    },
    {
      id: "3",
      title: "Extended Stay Discount",
      image: "/assets/gallery/property-3.avif",
      description:
        "Stay longer and save more! Enjoy significant discounts on stays of 7 nights or more. Includes daily housekeeping and complimentary Wi-Fi throughout your stay.",
      discount: "30% OFF",
      validUntil: "June 30, 2025",
      category: "Long Stay",
      slug: "extended-stay-discount",
    },
    {
      id: "4",
      title: "Honeymoon Romance Package",
      image: "/assets/gallery/property-4.avif",
      description:
        "Celebrate your love with our exclusive honeymoon package. Includes champagne, rose petals, couples spa treatment, and romantic dinner for two.",
      discount: "20% OFF",
      validUntil: "February 14, 2025",
      category: "Romance",
      slug: "honeymoon-romance-package",
    },
  ];

  return (
    <main>
      <PageHeader
        backgroundImage="/assets/facilities/prom-img.webp"
        title="Promotions"
        breadcrumbs={breadcrumbs}
      />

      {/* Promotions Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-lora font-light text-gray-900 mb-4">
              Special Offers & Packages
            </h2>
            <p className="text-gray-600 font-lora font-light max-w-2xl mx-auto">
              Discover our exclusive promotions and packages designed to make
              your stay even more memorable. From romantic getaways to business
              travel, we have something special for everyone.
            </p>
          </div>

          {/* Promotions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {promotions.map((promotionn) => (
              <PromotionCard key={promotionn.id} {...promotionn} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
