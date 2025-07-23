import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import Image from "next/image";

const ContactInfoSection = () => {
  const contactDetails = [
    {
      icon: <Phone className="w-6 h-6 text-secondary" />,
      label: "Telephone Number 1",
      value: "405-548-1035",
      href: "tel:+14055481035",
    },
    {
      icon: <Phone className="w-6 h-6 text-secondary" />,
      label: "Telephone Number 2",
      value: "405-923-9648",
      href: "tel:+14059239648",
    },
    {
      icon: <Mail className="w-6 h-6 text-secondary" />,
      label: "Email",
      value: "contact@wangshipalace.com",
      href: "mailto:contact@wangshipalace.com",
    },
    {
      icon: <MapPin className="w-6 h-6 text-secondary" />,
      label: "Address",
      value: "HGHR+9G Northeast \n Oklahoma City, \n Oklahoma City, OK, USA",
      href: "https://maps.app.goo.gl/JStsMjMF6FgMSKzi9",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h2 className="text-3xl font-lora font-light text-gray-900">
          Get in Touch
        </h2>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 flex items-center justify-center">
            <Image
              src="/assets/resources/element.png"
              alt="Fleur-de-lis"
              width={40}
              height={40}
              className="w-8 h-8"
            />
          </div>
          <div className="h-0.5 w-20 bg-secondary" />
        </div>
        <p className="text-gray-600 font-lora font-light leading-relaxed">
          We're here to help make your stay exceptional. Contact us for
          reservations, inquiries, or any assistance you may need.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="group">
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="flex-shrink-0 mt-1">{detail.icon}</div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  {detail.label}
                </h3>
                {detail.href ? (
                  <a
                    href={detail.href}
                    target={
                      detail.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      detail.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-gray-900 font-lora font-light hover:text-secondary transition-colors duration-200"
                  >
                    {detail.value.split("\n").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </a>
                ) : (
                  <div className="text-gray-900 font-lora font-light">
                    {detail.value.split("\n").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Business Hours */}
      {/* <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <Clock className="w-5 h-5 text-secondary" />
          <h3 className="text-lg font-lora font-light text-gray-900">
            Business Hours
          </h3>
        </div>
        <div className="space-y-2">
          {businessHours.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-600 font-lora font-light text-sm">
                {schedule.day}
              </span>
              <span className="text-gray-900 font-lora font-light text-sm">
                {schedule.hours}
              </span>
            </div>
          ))}
        </div>
      </div> */}

      {/* Additional Info */}
      {/* <div className="bg-secondary/10 p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-3">
          <Globe className="w-5 h-5 text-secondary" />
          <h3 className="text-lg font-lora font-light text-gray-900">
            Languages Spoken
          </h3>
        </div>
        <p className="text-gray-600 font-lora font-light text-sm">
          English, Chinese (Mandarin), Spanish
        </p>
      </div> */}
    </div>
  );
};

export default ContactInfoSection;
