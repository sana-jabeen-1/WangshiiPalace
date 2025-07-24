import PageHeader from "@/components/layouts/PageHeader";
import LimoPolicyHero from "@/components/pages/limo/LimoPolicyHero";
import LimoPolicyInfo from "@/components/pages/limo/LimoPolicyInfo";
import LimoReservationForm from "@/components/pages/limo/LimoReservationForm";

export default function LimoPolicyPage() {
  return (
    <main>
      <PageHeader
        backgroundImage="/assets/facilities/limo-img.jpg"
        title="Limo Policy"
        breadcrumb={"Limo Policy"}
      />

      {/* Hero Section */}
      <LimoPolicyHero />

      {/* Reservation Form */}
      <LimoReservationForm />

      {/* Policy Information */}
      <LimoPolicyInfo />
    </main>
  );
}
