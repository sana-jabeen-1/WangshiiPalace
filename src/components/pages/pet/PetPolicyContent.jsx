import { Check, Heart, Shield, Phone, Mail } from "lucide-react";

const PetPolicyContent = () => {
  const policyRules = [
    {
      icon: <Check className="w-5 h-5 text-secondary" />,
      text: "My pet(s) weighs 75 pounds or less. (Pets other than dogs may be accepted into the B&B at the General Manager's discretion)",
    },
    {
      icon: <Check className="w-5 h-5 text-secondary" />,
      text: "I understand that only two pets are allowed per room.",
    },
    {
      icon: <Check className="w-5 h-5 text-secondary" />,
      text: "My pet(s) vaccinations are up-to-date, and he or she is free of fleas and ticks.",
    },
    {
      icon: <Check className="w-5 h-5 text-secondary" />,
      text: "My pet(s) is not aggressive and is well socialized with other animals and guests.",
    },
    {
      icon: <Check className="w-5 h-5 text-secondary" />,
      text: "I understand that my pet(s) is NOT PERMITTED in any of the night's food and drink areas, the pool, patio, main entrance, or other public areas.",
    },
    {
      icon: <Check className="w-5 h-5 text-secondary" />,
      text: "I agree to clean up after my pet(s) and properly dispose of any waste.",
    },
    {
      icon: <Check className="w-5 h-5 text-secondary" />,
      text: "I understand that Housekeeping will not enter my room with an unattended pet(s) inside. My pet must be restrained or removed from the room while hotel staff is present working.",
    },
    {
      icon: <Check className="w-5 h-5 text-secondary" />,
      text: "I will assume responsibility for notifying the Front Desk if there are special times for servicing my room.",
    },
    {
      icon: <Check className="w-5 h-5 text-secondary" />,
      text: "My pet will always be on a leash with a maximum length of six feet or in a carrier when outside of the room.",
    },
  ];

  const additionalPolicies = [
    {
      title: "Pet Accommodation & Fees",
      content:
        "I understand that WangShi Palace will provide designated rooms for guests bringing pets, and will collect a $200 deposit upon check-in. This deposit will be used to cover any accidents caused by the animals, including all stains left by animals on the bed, carpet, furniture, and walls, but not normal wear and tear. A $25 per night pet fee will also be charged for each pet.",
    },
    {
      title: "Damage Responsibility",
      content:
        "As a pet owner, I am liable for any disturbances my pet(s) causes to guests staying at WangShi China Palace Bed & Breakfast. On the second incident of a reported disturbance, WangShi palace may ask for the pet(s) to be removed from the property with no refund.",
    },
    {
      title: "Policy Acknowledgment",
      content:
        "I acknowledge that I have been informed of WangShi's pet-friendly policies and procedures.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-secondary" />
              <h2 className="text-2xl font-lora font-light text-gray-900">
                Welcome Your Beloved Pets
              </h2>
            </div>
            <p className="text-gray-600 font-lora font-light leading-relaxed mb-6">
              To ensure that all our visitors have an enjoyable stay, we ask
              that guests traveling with their four-legged friends sign the
              policy below upon check-in.
            </p>
          </div>

          {/* Policy Rules */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-6 h-6 text-secondary" />
              <h2 className="text-2xl font-lora font-light text-gray-900">
                Pet Policy Guidelines
              </h2>
            </div>

            <div className="space-y-6">
              {policyRules.map((rule, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 mt-1">{rule.icon}</div>
                  <p className="text-gray-700 font-lora font-light leading-relaxed">
                    {rule.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Policies */}
          <div className="space-y-8 mb-12">
            {additionalPolicies.map((policy, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-lora font-light text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  {policy.title}
                </h3>
                <p className="text-gray-600 font-lora font-light leading-relaxed">
                  {policy.content}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="bg-secondary/10 p-8 rounded-lg">
            <h3 className="text-xl font-lora font-light text-gray-900 mb-6 text-center">
              Questions About Our Pet Policy?
            </h3>
            <p className="text-gray-600 font-lora font-light text-center mb-6">
              If you have any questions or concerns about our pet policies
              above, please send us an email or give us a call at:
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a
                href="tel:+14055481035"
                className="flex items-center gap-3 text-secondary hover:text-gray-900 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <span className="font-lora font-light">(405) 548-1035</span>
              </a>

              <div className="hidden md:block w-px h-6 bg-gray-300"></div>

              <a
                href="mailto:contact@wangshipalace.com"
                className="flex items-center gap-3 text-secondary hover:text-gray-900 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span className="font-lora font-light">
                  contact@wangshipalace.com
                </span>
              </a>
            </div>
          </div>

          {/* Closing Message */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 font-lora font-light italic">
              "We look forward to welcoming you and your furry friend to
              WangShi!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetPolicyContent;
