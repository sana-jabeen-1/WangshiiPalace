import PageHeader from "@/components/layouts/PageHeader";
import TestimonialsSection from "@/components/molecules/Testimonials";
import AboutAwardsSection from "@/components/pages/about/AboutAwardsSection";
import AboutFeature from "@/components/pages/about/AboutFeature";
import AboutHotelOverviewSection from "@/components/pages/about/AboutHotelOverview";
import AboutTimelineSection from "@/components/pages/about/AboutTimeline";

const About = () => {
  return (
    <div className="">
      <PageHeader
        title={"About Us"}
        breadcrumb={""}
        backgroundImage={"/assets/about/about-bg.jpg"}
      />
      <AboutFeature />
      <AboutHotelOverviewSection />
      <AboutTimelineSection />
      <TestimonialsSection />
      <AboutAwardsSection />
    </div>
  );
};

export default About;
