
import { Building } from "lucide-react";
import EnterpriseComparison from "@/components/company-use/EnterpriseComparison";
import SecurityCompliance from "@/components/company-use/SecurityCompliance";
import UseCaseCards from "@/components/company-use/UseCaseCards";
import BusinessImpact from "@/components/company-use/BusinessImpact";
import PricingComparison from "@/components/company-use/PricingComparison";

const CompanyUse = () => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10">
            <Building className="h-6 w-6 text-amber-700" />
          </div>
          <h1 className="text-3xl font-bold text-white">AI Chatbots for Business Use</h1>
        </div>
        <p className="text-lg text-amber-100 max-w-3xl">
          Enterprise-grade AI chatbot solutions for businesses of all sizes. Compare features, security, 
          scalability, and integration capabilities to transform your organization's productivity.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <EnterpriseComparison />
        <SecurityCompliance />
      </div>

      <div className="mb-8">
        <UseCaseCards />
      </div>

      <div className="mb-8">
        <BusinessImpact />
      </div>

      <PricingComparison />
    </div>
  );
};

export default CompanyUse;
