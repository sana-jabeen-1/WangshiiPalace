import Image from "next/image";

const PetPolicyHero = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-lora font-light text-gray-900 mb-6">
              Pet Policy
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
              At WangShi, we understand that your pet is just as much a part of
              the family as other members. We're thrilled to be a pet-friendly
              hotel and welcome your furry companions.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl mb-8">
            <Image
              src="/assets/resources/pet.jpeg"
              alt="Various pets including dogs, cats, parrots, and rabbits sitting together on a cozy couch"
              fill
              className="object-cover"
              priority
            />

            {/* Overlay with welcome message */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <h2 className="text-2xl lg:text-3xl font-lora font-bold text-white mb-2">
                  Your Furry Friends Are Welcome
                </h2>
                <p className="text-white/90 font-lora font-medium">
                  Creating memorable experiences for the whole family
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetPolicyHero;
