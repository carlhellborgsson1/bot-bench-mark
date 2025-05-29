
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle } from "lucide-react";

export const SecurityComparison = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <Shield className="h-5 w-5 text-green-600" />
            Security Features Comparison
          </CardTitle>
          <CardDescription className="text-black">Key security differentiators</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="font-semibold text-black">Best Privacy Protection</p>
            <p className="text-black">Claude 3 - No data storage policy</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold text-black">Most Compliant</p>
            <p className="text-black">GPT-4 - Comprehensive certification coverage</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <p className="font-semibold text-black">Longest Retention</p>
            <p className="text-black">Gemini Pro - 18 months data storage</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            Security Considerations
          </CardTitle>
          <CardDescription className="text-black">Important factors to evaluate</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2 text-black">Data Location</h4>
            <p className="text-black">Consider where your data is processed and stored</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-black">Access Controls</h4>
            <p className="text-black">Review user authentication and authorization methods</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-black">Audit Logs</h4>
            <p className="text-black">Ensure comprehensive logging for compliance</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-black">Third-party Integrations</h4>
            <p className="text-black">Assess security of connected services</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
