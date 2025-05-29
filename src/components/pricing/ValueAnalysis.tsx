
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap } from "lucide-react";

export const ValueAnalysis = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-black">
          <Zap className="h-5 w-5 text-yellow-600" />
          Value Analysis
        </CardTitle>
        <CardDescription className="text-black">Cost-effectiveness breakdown</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-semibold text-black mb-2">Best Overall Value</h4>
            <p className="text-black mb-2">Claude 3 Pro</p>
            <p className="text-sm text-black">
              Excellent performance-to-price ratio with constitutional AI benefits
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-black mb-2">Premium Features</h4>
            <p className="text-black mb-2">GPT-4 Plus</p>
            <p className="text-sm text-black">
              Most advanced capabilities with plugin ecosystem access
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-black mb-2">Budget-Friendly</h4>
            <p className="text-black mb-2">Gemini Pro (Free)</p>
            <p className="text-sm text-black">
              Generous free tier with competitive performance levels
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
