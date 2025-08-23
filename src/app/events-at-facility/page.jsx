import PageHeader from "@/components/layouts/PageHeader";
import EventsEmptyState from "@/components/pages/events/EventsEmpty";
import EventsFacilities from "@/components/pages/events/EventsFacilities";
import EventsHero from "@/components/pages/events/EventsHero";

export default function EventsAtFacilityPage() {
  // This would normally come from an API or database
  const events = []; // Empty for now as mentioned by user

  return (
    <main>
      <PageHeader
        backgroundImage="/assets/resources/events.webp"
        title="Events at Facility"
        breadcrumb={"Events at Facility"}
      />

      {/* Hero Section */}
      <EventsHero />

      {/* Filters Section - Hidden when no events */}
      {events.length > 0 && <EventsFilters showFilters={true} />}

      {/* Events Content */}
      {events.length === 0 ? (
        <EventsEmptyState />
      ) : (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Events would be mapped here when available */}
            </div>
          </div>
        </section>
      )}

      {/* Facilities Section */}
      <EventsFacilities />
    </main>
  );
}
