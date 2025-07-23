import PageHeader from "@/components/layouts/PageHeader";
import WangshiRulesContent from "@/components/pages/wangshi-rules/WangshiRulesContent";
import WangshiRulesHero from "@/components/pages/wangshi-rules/WangshiRulesHero";

export default function WangshiRulesPage() {
  return (
    <main>
      <PageHeader
        backgroundImage="/placeholder.svg?height=400&width=1200"
        title="Wangshi Rules"
        breadcrumb={"Wangshi Rules"}
      />

      {/* Hero Section */}
      <WangshiRulesHero />

      {/* Rules Content */}
      <WangshiRulesContent />
    </main>
  );
}
