import PageHeader from "@/components/layouts/PageHeader";
import PetPolicyContent from "@/components/pages/pet/PetPolicyContent";
import PetPolicyHero from "@/components/pages/pet/PetPolicyHero";

export default function PetPolicyPage() {
  return (
    <main>
      <PageHeader
        backgroundImage="/placeholder.svg?height=400&width=1200"
        title="Pet Policy"
        breadcrumb={"Pet Policy"}
      />

      {/* Hero Section */}
      <PetPolicyHero />

      {/* Policy Content */}
      <PetPolicyContent />
    </main>
  );
}
