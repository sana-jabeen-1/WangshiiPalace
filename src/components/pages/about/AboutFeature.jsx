import Image from "next/image";
import React from "react";

const AboutFeature = () => {
  const features = [
    {
      title: "24/7 Availability",
      iconImage: "/assets/about/24.png",
    },
    {
      title: "Privacy Policies",
      iconImage: "/assets/about/policy.png",
    },
    {
      title: "Discount Coupons",
      iconImage: "/assets/about/discount.png",
    },
    {
      title: "Affordable Prices",
      iconImage: "/assets/about/price.png",
    },
    {
      title: "Quality Services",
      iconImage: "/assets/about/suitcase.png",
    },
    {
      title: "Easy to Reach",
      iconImage: "/assets/about/plane.png",
    },
  ];

  return (
    <div className="p-20 w-full flex flex-col items-center justify-center">
      <div className="flex items-center justify-center flex-wrap gap-6 w-3/4 ">
        {features.map(({ title, iconImage }, index) => (
          <AboutFeatureCard
            key={index}
            index={index}
            title={title}
            iconImage={iconImage}
          />
        ))}
      </div>
      <div className="w-4/6 bg-secondary h-[0.2px] my-28" />
    </div>
  );
};

export default AboutFeature;

const AboutFeatureCard = ({ title, iconImage, index }) => {
  return (
    <section className="flex flex-col items-center">
      <section className="flex flex-row-reverse items-center">
        <div className="w-[0.2px] h-28 bg-secondary" />
        <div className="w-[390px] h-[177px] flex flex-col items-center justify-center gap-3">
          <Image width={67} height={55} src={iconImage} alt={title} />
          <h3 className="text-xl font-lora font-light">{title}</h3>
        </div>
      </section>
      {index < 3 && <div className="w-80 h-[0.2px] bg-secondary" />}
    </section>
  );
};
