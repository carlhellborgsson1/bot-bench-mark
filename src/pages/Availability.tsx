
import { AvailabilityHeader } from "@/components/availability/AvailabilityHeader";
import { AvailabilityMetricsExplanation } from "@/components/availability/AvailabilityMetricsExplanation";
import { RegionalAvailability } from "@/components/availability/RegionalAvailability";
import { LanguageSupport } from "@/components/availability/LanguageSupport";
import { ServiceMetrics } from "@/components/availability/ServiceMetrics";
import { RegionalConsiderations } from "@/components/availability/RegionalConsiderations";

const Availability = () => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <AvailabilityHeader />
      <AvailabilityMetricsExplanation />
      
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <RegionalAvailability />
        <LanguageSupport />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <ServiceMetrics />
      </div>

      <RegionalConsiderations />
    </div>
  );
};

export default Availability;
