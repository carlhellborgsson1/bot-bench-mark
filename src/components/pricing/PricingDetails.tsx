
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, ExternalLink } from "lucide-react";

export const PricingDetails = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            API Pricing
          </CardTitle>
          <CardDescription className="text-black">Pay-per-use pricing for developers</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <span className="font-medium text-black">GPT-4</span>
              <span className="text-sm text-black">$0.03/1K tokens</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
              <span className="font-medium text-black">Claude 3</span>
              <span className="text-sm text-black">$0.015/1K tokens</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <span className="font-medium text-black">Gemini Pro</span>
              <span className="text-sm text-black">$0.001/1K tokens</span>
            </div>
          </div>
          <p className="text-sm text-black">
            Prices vary by model version and usage volume. Enterprise discounts available.
          </p>
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700"
            onClick={() => window.open('https://platform.openai.com/pricing', '_blank')}
          >
            View API Pricing <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <Users className="h-5 w-5 text-green-600" />
            Enterprise Solutions
          </CardTitle>
          <CardDescription className="text-black">Business and team pricing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium text-black">Team Plans</p>
              <p className="text-sm text-black">$25-30/user/month</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium text-black">Enterprise</p>
              <p className="text-sm text-black">Custom pricing</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium text-black">Features</p>
              <p className="text-sm text-black">SSO, admin controls, priority support</p>
            </div>
          </div>
          <Button 
            className="w-full bg-green-600 hover:bg-green-700"
            onClick={() => window.open('https://openai.com/enterprise', '_blank')}
          >
            Contact Sales <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
