import Image from "next/image";
import Link from "next/link";

const Banner = ({ bannerImage, title, description, cta }) => {
  return (
    <div className="relative w-full h-screen sm:h-[700px] z-10">
      <Image
        src={bannerImage}
        alt="banner image"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black opacity-50"></div>
      <div className="absolute inset-0 flex mt-36 lg:mt-0 lg:items-center justify-center text-white px-6 sm:px-12 font-lora">
        <div className="text-center lg:max-w-2xl">
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold mb-8">
            {title}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 max-w-lg mx-auto leading-relaxed opacity-90 font-roboto">
            {description}
          </p>
          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {cta?.map(({ href, text }, linkIndex) => (
              <Link
                key={linkIndex}
                href={href}
                className={` py-4 px-8 shadow-lg transform hover:scale-105 transition-all duration-300 hover:bg-black cursor-pointer ${
                  linkIndex === 0
                    ? "bg-primary hover:bg-secondary text-white hover:text-primary"
                    : "bg-white hover:bg-secondary text-primary "
                } font-semibold font-roboto`}
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
