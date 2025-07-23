import PageHeader from "@/components/layouts/PageHeader";
import AttractionCard from "@/components/molecules/AttractionCard";
import FeaturedAttraction from "@/components/molecules/FeaturedAttractions";

export default function AttractionsPage() {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "" }];

  const featuredAttractions = [
    {
      id: "1",
      name: "Szechuan Story 巴蜀人家",
      image: "/assets/attractions/sch-story.jpeg",
      description:
        "Authentic Szechuan Restaurant serving traditional Chinese dishes with bold flavors and spices.",
      address: "2800 N Classen Blvd #108, Oklahoma City, OK 73106",
      category: "Restaurant",
      rating: 4.5,
      openHours: "11:00 AM - 9:30 PM",
    },
    {
      id: "2",
      name: "Szechuan Bistro",
      image: "/assets/attractions/bistro.jpg",
      description:
        "Modern Chinese bistro offering classic Szechuan cuisine in an elegant setting.",
      address: "1010 W Memorial Rd, Oklahoma City, OK 73114",
      category: "Restaurant",
      rating: 4.3,
      openHours: "11:30 AM - 9:00 PM",
    },
  ];

  const attractions = [
    {
      id: "3",
      name: "Myriad Botanical Gardens",
      image: "/assets/attractions/botanical-gardens.webp",
      description:
        "A 15-acre facility with formal gardens, walking trails, and a tropical conservatory.",
      address: "301 W Reno Ave, Oklahoma City, OK 73102",
      category: "Garden",
      rating: 4.6,
      distance: "2.1 miles",
      openHours: "6:00 AM - 11:00 PM",
      slug: "myriad-botanical-gardens",
    },
    {
      id: "4",
      name: "Bricktown",
      image: "/assets/attractions/bricktown.webp",
      description:
        "Lively entertainment district home to restaurants, bars, and the Bricktown Canal.",
      address: "Bricktown, Oklahoma City, OK",
      category: "Entertainment",
      rating: 4.4,
      distance: "1.8 miles",
      openHours: "24 hours",
      slug: "bricktown",
    },
    {
      id: "5",
      name: "Oklahoma City National Memorial",
      image: "/assets/attractions/museum.jpg",
      description:
        "Garden, pool & sculptural memorial honoring victims of the 1995 bombing.",
      address: "620 N Harvey Ave, Oklahoma City, OK 73102",
      category: "Memorial",
      rating: 4.8,
      distance: "2.5 miles",
      openHours: "9:00 AM - 6:00 PM",
      slug: "oklahoma-city-national-memorial",
    },
    {
      id: "6",
      name: "Chesapeake Energy Arena",
      image: "/assets/attractions/cheaspeake.jpeg",
      description:
        "Home court to the NBA's Oklahoma City Thunder and major concert venue.",
      address: "100 W Reno Ave, Oklahoma City, OK 73102",
      category: "Sports",
      rating: 4.5,
      distance: "2.0 miles",
      openHours: "Event dependent",
      slug: "chesapeake-energy-arena",
    },
    {
      id: "7",
      name: "Frontier City",
      image: "/assets/attractions/frontier-city.jpg",
      description:
        "Western-themed amusement park with roller coasters and family rides.",
      address: "11501 NE Expressway, Oklahoma City, OK 73131",
      category: "Amusement Park",
      rating: 4.2,
      distance: "12.3 miles",
      openHours: "10:00 AM - 8:00 PM",
      slug: "frontier-city",
    },
    {
      id: "8",
      name: "Oklahoma City Zoo and Botanical Garden",
      image: "/assets/attractions/zoo.jpg",
      description:
        "Zoo with animals, walking trails, and beautiful botanical displays.",
      address: "2000 Remington Pl, Oklahoma City, OK 73111",
      category: "Zoo",
      rating: 4.4,
      distance: "8.7 miles",
      openHours: "9:00 AM - 5:00 PM",
      slug: "oklahoma-city-zoo",
    },
    {
      id: "9",
      name: "Science Museum Oklahoma",
      image: "/assets/attractions/science-museum.jpg",
      description:
        "Science museum with children-friendly interactive exhibits and planetarium.",
      address: "2020 Remington Pl, Oklahoma City, OK 73111",
      category: "Museum",
      rating: 4.3,
      distance: "8.5 miles",
      openHours: "9:00 AM - 5:00 PM",
      slug: "science-museum-oklahoma",
    },
  ];

  return (
    <main>
      <PageHeader
        backgroundImage="/placeholder.svg?height=400&width=1200"
        title="Attractions & Restaurants"
        breadcrumb={"Attractions & Restaurants"}
      />

      {/* Main Content */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          {/* Featured Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Featured Attraction */}
            <div>
              <h2 className="text-2xl font-lora font-light text-gray-900 mb-6">
                Featured Restaurant
              </h2>
              <FeaturedAttraction attractions={featuredAttractions} />
            </div>

            {/* Map Section */}
            <div>
              <h2 className="text-2xl font-lora font-light text-gray-900 mb-6">
                Location Map
              </h2>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125398.50753310306!2d-97.5164!3d35.4676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b217e0e3b8c0e5%3A0x7e9b9b9b9b9b9b9b!2sOklahoma%20City%2C%20OK%2C%20USA!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Attractions Grid */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-lora font-light text-gray-900">
                Popular Attractions
              </h2>
              <p className="text-gray-600 font-lora font-light">
                Discover the best attractions and dining options near our hotel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {attractions.map((attraction) => (
                <AttractionCard key={attraction.id} {...attraction} />
              ))}
            </div>
          </div>

          {/* Categories Filter */}
          <div className="text-center">
            <h3 className="text-xl font-lora font-light text-gray-900 mb-4">
              Explore by Category
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "All",
                "Restaurant",
                "Entertainment",
                "Museum",
                "Garden",
                "Sports",
                "Memorial",
              ].map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-white text-gray-600 hover:bg-secondary hover:text-white rounded-full text-sm font-lora font-light transition-colors duration-200 shadow-sm"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
