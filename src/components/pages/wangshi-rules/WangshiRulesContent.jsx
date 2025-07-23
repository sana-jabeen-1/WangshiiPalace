import {
  FileText,
  ExternalLink,
  Info,
  Shield,
  Users,
  Clock,
} from "lucide-react";

const WangshiRulesContent = () => {
  const ruleCategories = [
    {
      icon: <Users className="w-6 h-6 text-secondary" />,
      title: "Guest Conduct",
      description:
        "Guidelines for respectful behavior and interactions with staff and other guests",
    },
    {
      icon: <Shield className="w-6 h-6 text-secondary" />,
      title: "Safety & Security",
      description:
        "Important safety protocols and security measures for your protection",
    },
    {
      icon: <Clock className="w-6 h-6 text-secondary" />,
      title: "Check-in & Check-out",
      description:
        "Policies regarding arrival, departure times, and room procedures",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Content Card */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-12">
            {/* Header */}
            <div className="bg-gradient-to-r from-secondary to-yellow-600 p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FileText className="w-8 h-8 text-white" />
                <h2 className="text-3xl font-lora font-light text-white">
                  Hotel Guidelines
                </h2>
              </div>
              <p className="text-white/90 font-lora font-light">
                Access our comprehensive rules and regulations document
              </p>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Info className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-lora font-light text-gray-900">
                    Important Information
                  </h3>
                </div>
                <p className="text-gray-600 font-lora font-light leading-relaxed mb-8">
                  Please open and read this link below to learn about Wangshi
                  Rules for your stay with us.
                </p>

                {/* Link Button */}
                <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-200 hover:border-secondary transition-colors duration-200">
                  <a
                    href="https://wangshipalace-my.sharepoint.com/:w:/p/contact/EV-smdTI-HdAiaaU4tcC5zgBJN5rkjfBjfdgSs2FtsQAsQ?e=aEGVh2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-lora font-light text-lg transition-all duration-200 hover:shadow-lg"
                  >
                    <FileText className="w-6 h-6" />
                    View Wangshi Rules Document
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <p className="text-gray-500 text-sm mt-4 font-lora font-light">
                    This link will open in a new window for your convenience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rule Categories Preview */}
          <div className="mb-12">
            <h3 className="text-2xl font-lora font-light text-gray-900 mb-8 text-center">
              What You'll Find
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ruleCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                      {category.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-lora font-light text-gray-900 mb-3">
                    {category.title}
                  </h4>
                  <p className="text-gray-600 font-lora font-light text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-secondary/10 p-8 rounded-lg text-center">
            <h3 className="text-xl font-lora font-light text-gray-900 mb-4">
              Need Assistance?
            </h3>
            <p className="text-gray-600 font-lora font-light mb-6">
              If you have any questions about our rules and policies, or need
              clarification on any guidelines, our front desk team is here to
              help.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <a
                href="tel:+14055481035"
                className="flex items-center gap-2 text-secondary hover:text-gray-900 font-lora font-light transition-colors duration-200"
              >
                <span>Call us: (405) 548-1035</span>
              </a>
              <span className="hidden md:block text-gray-400">|</span>
              <a
                href="mailto:contact@wangshipalace.com"
                className="flex items-center gap-2 text-secondary hover:text-gray-900 font-lora font-light transition-colors duration-200"
              >
                <span>Email: contact@wangshipalace.com</span>
              </a>
            </div>
          </div>

          {/* Compliance Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 font-lora font-light italic">
              By staying with us, you agree to comply with all hotel rules and
              regulations outlined in the document above.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WangshiRulesContent;
