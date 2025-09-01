import Image from "next/image";

const AboutTimelineSection = () => {
  const timelineItems = [
    {
      id: 1,
      title: "The Beginning",
      image: "/assets/about/timeline.webp",
      description:
        "WangShi China Palace was founded by Dow McCarty and Victoria McCarty . This husband-wife duo turned their home located in Oklahoma City, into a relaxing Bed and Breakfast Inn for Guests.",
      position: "right",
    },
    {
      id: 2,
      title: "The Beginning",
      image: "/assets/about/timeline-2.webp",
      description:
        "WangShi China Palace was founded by Dow McCarty and Victoria McCarty .This husband-wife duo turned their home located in Oklahoma City, into a relaxing Bed and Breakfast Inn for Guests.",
      position: "left",
    },
    {
      id: 3,
      title: "Member In Hotel Association",
      image: "/assets/about/timeline-3.webp",
      description:
        "WangShi China Palace was founded by Dow McCarty and Victoria McCarty .This husband-wife duo turned their home located in Oklahoma City, into a relaxing Bed and Breakfast Inn for Guests.",
      position: "right",
    },
    {
      id: 4,
      title: "International Standards",
      image: "/assets/about/timeline-4.webp",
      description:
        "WangShi China Palace was established by Dow and Victoria McCarty, a dynamic husband-and-wife team. They transformed their private residence in Oklahoma City into a serene Bed and Breakfast Inn.  ",
      position: "left",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="lg:max-w-6xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            

            {/* Timeline Items */}
            <div className="space-y-10">
              {timelineItems.map((item, index) => (
                <div key={item.id} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content */}
                  <div
                    className={`flex items-center ${
                      item.position === "left" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    {/* Image Side */}
                    <div className="w-1/2 px-2 md:px-7 lg:px-8">
                      <div
                        className={`${
                          item.position === "left" ? "ml-auto" : "mr-auto"
                        } w-full lg:max-w-md`}
                      >
                        <div className="relative w-36 h-36 md:w-100 md:h-36 lg:w-full lg:h-64 overflow-hidden shadow-lg">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                             layout="fill"  // Ensure the image fills its container
                             objectFit="cover"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-1/2 px-8">
                      <div
                        className={`${
                          item.position === "left"
                            ? "mr-auto text-right"
                            : "ml-auto text-left"
                        } w-full lg:max-w-md`}
                      >
                        <div className="space-y-4">
                          {/* Title */}
                          <h3 className="text-lg lg:text-2xl font-lora font-light text-gray-900 leading-tight">
                            {item.title}
                          </h3>

                          {/* Decorative Line */}
                          <div
                            className={`flex items-center gap-3 ${
                              item.position === "left"
                                ? "justify-end"
                                : "justify-start"
                            }`}
                          >
                            <Image
                              src="/assets/resources/element.png"
                              alt="Fleur-de-lis"
                              width={30}
                              height={30}
                              className="w-6 h-6"
                            />
                            <div className="h-0.5 w-12 bg-secondary"></div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-600 font-lora font-light leading-relaxed text-xs lg:text-sm text-justify">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimelineSection;
