import { Car, Clock, MapPin, Users, Phone, Calendar } from "lucide-react";

const LimoReservationForm = () => {
  const formFields = [
    {
      label: "Date:",
      icon: <Calendar className="w-5 h-5 text-secondary" />,
      id: "date",
    },
    {
      label: "Name:",
      icon: <Users className="w-5 h-5 text-secondary" />,
      id: "name",
    },
    {
      label: "Room:",
      icon: <MapPin className="w-5 h-5 text-secondary" />,
      id: "room",
    },
    {
      label: "Phone Number:",
      icon: <Phone className="w-5 h-5 text-secondary" />,
      id: "phone",
    },
    {
      label: "Number of Passengers:",
      icon: <Users className="w-5 h-5 text-secondary" />,
      id: "passengers",
    },
    {
      label: "Leave Time:",
      icon: <Clock className="w-5 h-5 text-secondary" />,
      id: "leaveTime",
    },
    {
      label: "Drop-Off Location:",
      icon: <MapPin className="w-5 h-5 text-secondary" />,
      id: "dropOff",
    },
    {
      label: "Pick-Up Time:",
      icon: <Clock className="w-5 h-5 text-secondary" />,
      id: "pickUp",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Reservation Form Card */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-secondary to-yellow-600 p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Car className="w-8 h-8 text-white" />
                <h2 className="text-3xl font-lora font-light text-white">
                  Limo Reservation
                </h2>
              </div>
              <p className="text-white/90 font-lora font-light">
                Please provide the following information for your limousine
                service
              </p>
            </div>

            {/* Form Fields */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formFields.map((field, index) => (
                  <div
                    key={field.id}
                    className="group p-4 border border-gray-200 rounded-lg hover:border-secondary hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {field.icon}
                      <label className="text-gray-700 font-lora font-light text-lg">
                        {field.label}
                      </label>
                    </div>
                    <div className="ml-8">
                      <div className="h-8 border-b border-gray-200 group-hover:border-secondary transition-colors duration-200"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimoReservationForm;
