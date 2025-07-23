import Image from 'next/image';


const RelaxSection = () => {
  return (
    <section className="flex flex-col lg:flex-row mt-72 lg:mt-0 justify-center items-center lg:mx-auto lg:max-w-7xl gap-20 pl-5">
      {/* Left Content */}
      <div className="space-y-6 text-justify w-3/4 lg:w-1/2">
        <div className="space-y-4">
          <h2 className="text-4xl lg:text-6xl font-lora font-medium text-gray-900 llg:eading-tight pt-20 pl-5">
            Relax in Our Place
          </h2>

          {/* Decorative fleur-de-lis */}
          <div className="flex items-center gap-3 justify-start">
            <Image
              src={"/assets/resources/element.png"}
              alt="Fleur-de-lis"
              width={50}
              height={50}
              className="w-10 h-10"
            />
            <div className="h-0.5 w-20 bg-secondary" />
          </div>
        </div>

        <div className="space-y-6">
          {/* Main paragraph - darker text */}
          <p className="text-lg text-gray-800 leading-relaxed pl-5">
           WangShi is more than just a place to stay—it's a retreat. After a day spent golfing, tennis, shopping,
            or touring local museums, 
           return to your sanctuary to refresh and unwind.
          </p>

          {/* Secondary paragraph - lighter text */}
          <p className="text-base text-gray-500 leading-relaxed pl-5">
            Celebrate a special occasion, such as a weekend wedding, or simply savor the peace and beauty of the surroundings.
          </p>

          {/* Third paragraph - lighter text */}
          <p className="text-base text-gray-500 leading-relaxed pl-5">
            Whether you're soaking in the serenity of our scenic walking trails, unwinding in the gazebo, or enjoying a peaceful evening by the fire pits,
             WangShi provides multiple relaxing spots designed to help you escape the everyday hustle.
          </p>

          {/* Bottom text */}
          <p className="text-base text-gray-600 font-medium pt-4 pl-5">
            Luxury Hotel & Best Resort Discover our Locations
          </p>
        </div>
      </div>

      {/* Right Images Grid */}
      <div className="flex items-center justify-center ml-20 lg:ml-0 lg:w-1/2">
        <Image
          src="/assets/relax/image.png"
          alt="Luxury hotel room with red bedding"
          width={950}
          height={950}
          className="lg:w-[850] lg:h-[650px] object-cover mix-blend-multiply w-[310px] h-[310px]"
        />
      </div>
    </section>
  );
};

export default RelaxSection;
