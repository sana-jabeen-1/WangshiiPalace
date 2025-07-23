import { Calendar, Mail, Phone, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsEmptyState = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Empty State Card */}
          <div className="bg-white rounded-lg shadow-xl p-12 text-center">
            {/* Icon */}
            <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Calendar className="w-12 h-12 text-secondary" />
            </div>

            {/* Title */}
            <h2 className="text-3xl font-lora font-light text-gray-900 mb-4">
              No Events Currently Scheduled
            </h2>

            {/* Description */}
            <p className="text-gray-600 font-lora font-light leading-relaxed mb-8 max-w-2xl mx-auto">
              We're currently planning exciting events and experiences for our
              guests. Check back soon for updates on upcoming celebrations,
              workshops, and special occasions at WangShi Palace.
            </p>

            {/* Call to Action */}
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 font-lora font-light rounded-none">
                  <Plus className="w-5 h-5 mr-2" />
                  Plan Your Event
                </Button>
                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 font-lora font-light rounded-none"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Notified
                </Button>
              </div>

              {/* Contact Information */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-600 font-lora font-light mb-4">
                  Interested in hosting your own event? Contact our events team:
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                  <a
                    href="tel:+14055481035"
                    className="flex items-center gap-2 text-secondary hover:text-gray-900 font-lora font-light transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4" />
                    (405) 548-1035
                  </a>
                  <span className="hidden md:block text-gray-400">|</span>
                  <a
                    href="mailto:events@wangshipalace.com"
                    className="flex items-center gap-2 text-secondary hover:text-gray-900 font-lora font-light transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    events@wangshipalace.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsEmptyState;
