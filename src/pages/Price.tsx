
import { PricingHeader } from "@/components/pricing/PricingHeader";
import { PricingExplanation } from "@/components/pricing/PricingExplanation";
import { PricingCards } from "@/components/pricing/PricingCards";
import { PricingDetails } from "@/components/pricing/PricingDetails";
import { ValueAnalysis } from "@/components/pricing/ValueAnalysis";

const Price = () => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <PricingHeader />
      <PricingExplanation />
      <PricingCards />
      <PricingDetails />
      <ValueAnalysis />
    </div>
  );
};

export default Price;
