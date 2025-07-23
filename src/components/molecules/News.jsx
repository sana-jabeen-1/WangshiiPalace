import Image from "next/image";
import { ArrowRight } from "lucide-react";

const NewsEventsSection = () => {
  const newsEvents = [
    {
      id: 1,
      date: "July 16, 2018",
      title: "Orientation Program for the new students",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...",
    },
    {
      id: 2,
      date: "May 13, 2018",
      title: "Enrolling new members into the Library",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...",
    },
    {
      id: 3,
      date: "April 20, 2018",
      title: "Visualizing the Classroom as a student",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...",
    },
    {
      id: 4,
      date: "August 30, 2017",
      title: "Best Education Channels on YouTube",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...",
    },
  ];

  return (
    <section className="py-16">
      <div className=" px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-lora font-light text-gray-900 mb-6">
            News & Events
          </h2>

          {/* Decorative fleur-de-lis with lines */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-0.5 w-16 bg-gray-300"></div>
            <Image
              src="/assets/resources/element.png"
              alt="Fleur-de-lis"
              width={40}
              height={40}
              className="w-8 h-8"
            />
            <div className="h-0.5 w-16 bg-gray-300"></div>
          </div>
        </div>

        {/* News & Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {newsEvents.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Date */}
              <div className="text-secondary font-lora font-light text-sm mb-4">
                {item.date}
              </div>

              {/* Title */}
              <h3 className="text-xl font-lora font-light text-gray-900 mb-4 leading-relaxed">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 font-lora font-light text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Read More Link */}
              <div className="flex items-center">
                <button className="text-secondary font-lora font-light text-sm hover:text-opacity-80 transition-colors duration-200 flex items-center gap-2">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
