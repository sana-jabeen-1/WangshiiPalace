import Image from "next/image";

const LimoPolicyHero = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h1 className="text-4xl lg:text-5xl font-lora font-light text-gray-900 mb-6">
            Limo Policy
          </h1>

          {/* Decorative fleur-de-lis with lines */}
          <div className="flex items-center justify-center gap-4 mb-8">
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

          <p className="text-lg text-gray-600 font-lora font-light leading-relaxed max-w-3xl mx-auto">
            Experience luxury transportation with our complimentary limousine
            service. We're pleased to offer this exclusive amenity to enhance
            your stay with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LimoPolicyHero;
