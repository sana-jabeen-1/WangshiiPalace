import { Info, Clock, MapPin, Phone, Mail, AlertCircle } from "lucide-react";

const LimoPolicyInfo = () => {
  const policyPoints = [
    {
      icon: <MapPin className="w-6 h-6 text-secondary" />,
      title: "Service Area",
      content:
        "We offer free Limo service for our guests (within a 15min radius) and will be shut down at 10 p.m.",
    },
    {
      icon: <Info className="w-6 h-6 text-secondary" />,
      title: "How to Request",
      content:
        "If you would like to use the Limo service please make sure to fill out the information above.",
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-secondary" />,
      title: "Booking Instructions",
      content:
        "When you book a room put all of this in the special requests so that we are able to plan for your requests.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Service Information */}
          <div className="mb-12">
            <h2 className="text-3xl font-lora font-light text-gray-900 mb-8 text-center">
              Service Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {policyPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      {point.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-lora font-light text-gray-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 font-lora font-light leading-relaxed text-sm">
                    {point.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-secondary/10 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-lora font-light text-gray-900 mb-6">
              Need Assistance?
            </h3>
            <p className="text-gray-600 font-lora font-light mb-6">
              Thank you! And if you have any further questions call us at{" "}
              <a
                href="tel:+14055481035"
                className="text-secondary hover:text-gray-900 font-medium transition-colors duration-200"
              >
                (405)-548-1035
              </a>{" "}
              or E-mail us{" "}
              <a
                href="mailto:contact@wangshipalace.com"
                className="text-secondary hover:text-gray-900 font-medium transition-colors duration-200"
              >
                contact@wangshipalace.com
              </a>
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
              <a
                href="tel:+14055481035"
                className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-secondary hover:text-gray-900"
              >
                <Phone className="w-5 h-5" />
                <span className="font-lora font-light">(405) 548-1035</span>
              </a>

              <a
                href="mailto:Contact@wangshipalace.com"
                className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-secondary hover:text-gray-900"
              >
                <Mail className="w-5 h-5" />
                <span className="font-lora font-light">
                  contact@wangshipalace.com
                </span>
              </a>
            </div>
          </div>

          {/* Service Hours */}
          <div className="mt-12 bg-gray-900 p-8 rounded-lg text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-secondary" />
              <h3 className="text-xl font-lora font-light text-white">
                Service Hours
              </h3>
            </div>
            <p className="text-gray-300 font-lora font-light">
              Limousine service is available daily until 10:00 PM
            </p>
            <p className="text-gray-400 font-lora font-light text-sm mt-2">
              Please plan your transportation accordingly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimoPolicyInfo;
