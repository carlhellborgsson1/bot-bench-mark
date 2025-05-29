
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

export const PricingExplanation = () => {
  return (
    <Card className="mb-8 bg-green-50 border-green-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-black">
          <Info className="h-5 w-5" />
          Understanding Pricing Models
        </CardTitle>
        <CardDescription className="text-black">
          Here's what different pricing terms and models mean:
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-3 bg-white rounded-lg border border-green-200">
            <h4 className="font-semibold text-black mb-2">Monthly Subscription</h4>
            <p className="text-sm text-black">Fixed monthly fee for unlimited or high-limit usage of the AI model with premium features</p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-green-200">
            <h4 className="font-semibold text-black mb-2">API Pricing (per 1K tokens)</h4>
            <p className="text-sm text-black">Pay-per-use model where 1K tokens ≈ 750 words. You pay only for what you consume</p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-green-200">
            <h4 className="font-semibold text-black mb-2">Usage Limits</h4>
            <p className="text-sm text-black">Restrictions on message count per time period (e.g., "40 messages per 3 hours")</p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-green-200">
            <h4 className="font-semibold text-black mb-2">Enterprise Pricing</h4>
            <p className="text-sm text-black">Custom pricing for large organizations with volume discounts and additional features</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
