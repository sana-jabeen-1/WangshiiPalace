import PageHeader from "@/components/layouts/PageHeader";
import ContactForm from "@/components/pages/contact/ContactForm";
import ContactInfoSection from "@/components/pages/contact/ContactInfo";
import Image from "next/image";

export default function ContactUsPage() {
  return (
    <main>
      <PageHeader
        backgroundImage="/assets/facilities/contact.webp"
        title="Contact Us"
        breadcrumb={"Contact Us"}
      />

      {/* Main Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Side - Contact Information */}
            <div>
              <ContactInfoSection />
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Map Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-lora font-light text-gray-900 mb-4">
                Find Us
              </h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-0.5 w-16 bg-secondary"></div>
                <Image
                  src="/assets/resources/element.png"
                  alt="Fleur-de-lis"
                  width={40}
                  height={40}
                  className="w-8 h-8"
                />
                <div className="h-0.5 w-16 bg-secondary"></div>
              </div>
              <p className="text-gray-600 font-lora font-light max-w-2xl mx-auto">
                Located in the heart of Oklahoma City, our hotel offers
                convenient access to major attractions and business districts.
              </p>
            </div>

            {/* Interactive Map */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-96 lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.9983893319795!2d-97.46120608830223!3d35.57843157250633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b218bf745aabd5%3A0xd1764edb153cb177!2sWangshi%20Palace%20Bed%20%26%20Breakfast!5e0!3m2!1sen!2s!4v1750693166988!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: "0px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Directions */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-lora font-light text-gray-900 mb-2">
                  From Airport
                </h3>
                <p className="text-gray-600 font-lora font-light text-sm">
                  15 minutes drive from Will Rogers World Airport
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-lora font-light text-gray-900 mb-2">
                  Downtown
                </h3>
                <p className="text-gray-600 font-lora font-light text-sm">
                  10 minutes to downtown Oklahoma City attractions
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-lora font-light text-gray-900 mb-2">
                  Business District
                </h3>
                <p className="text-gray-600 font-lora font-light text-sm">
                  Close to major corporate offices and business centers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
