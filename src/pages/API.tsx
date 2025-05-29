
import { APIHeader } from "@/components/api/APIHeader";
import { APIMetricsExplanation } from "@/components/api/APIMetricsExplanation";
import { APIFeaturesComparison } from "@/components/api/APIFeaturesComparison";
import { SDKIntegrationSupport } from "@/components/api/SDKIntegrationSupport";
import { APITechnicalDetails } from "@/components/api/APITechnicalDetails";
import { CodeExamples } from "@/components/api/CodeExamples";

const API = () => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <APIHeader />
      <APIMetricsExplanation />
      
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <APIFeaturesComparison />
        <SDKIntegrationSupport />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <APITechnicalDetails />
      </div>

      <CodeExamples />
    </div>
  );
};

export default API;
