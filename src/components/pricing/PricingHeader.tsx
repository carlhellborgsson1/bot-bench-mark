
import { DollarSign } from "lucide-react";

export const PricingHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <DollarSign className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white">Pricing Comparison</h1>
      </div>
      <p className="text-lg text-white max-w-3xl">
        Compare pricing models, subscription tiers, and value propositions across different AI chatbot platforms 
        to find the most cost-effective solution for your needs.
      </p>
    </div>
  );
};
