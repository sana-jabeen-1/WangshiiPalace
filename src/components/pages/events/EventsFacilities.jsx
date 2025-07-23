import { Users, Wifi, Car, Utensils, Camera, Music } from "lucide-react";

const EventsFacilities = () => {
  const facilities = [
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Multiple Venues",
      description: "Flexible spaces accommodating 10-300 guests",
    },
    {
      icon: <Utensils className="w-8 h-8 text-secondary" />,
      title: "Catering Services",
      description: "Full-service catering with customizable menus",
    },
    {
      icon: <Wifi className="w-8 h-8 text-secondary" />,
      title: "Modern Technology",
      description: "High-speed WiFi, AV equipment, and presentation tools",
    },
    {
      icon: <Car className="w-8 h-8 text-secondary" />,
      title: "Convenient Parking",
      description: "Ample parking space for all your guests",
    },
    {
      icon: <Camera className="w-8 h-8 text-secondary" />,
      title: "Photography Services",
      description: "Professional photography to capture your special moments",
    },
    {
      icon: <Music className="w-8 h-8 text-secondary" />,
      title: "Entertainment Setup",
      description: "Sound systems and entertainment equipment available",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-lora font-light text-gray-900 mb-4">
              Event Facilities & Services
            </h2>
            <p className="text-gray-600 font-lora font-light max-w-2xl mx-auto">
              Our comprehensive facilities and professional services ensure your
              event is executed flawlessly from start to finish.
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center group-hover:bg-secondary/30 transition-colors duration-300">
                    {facility.icon}
                  </div>
                </div>
                <h3 className="text-lg font-lora font-light text-gray-900 mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600 font-lora font-light text-sm leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsFacilities;
