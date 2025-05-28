
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const EnterpriseComparison = () => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-blue-600" />
          Enterprise Solutions Comparison
        </CardTitle>
        <CardDescription>Professional-grade AI for business environments</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-lg">GPT-4 Enterprise</h4>
              <Badge className="bg-blue-500 text-white">Most Popular</Badge>
            </div>
            <p className="text-muted-foreground mb-3">
              Comprehensive enterprise solution with advanced security and admin controls.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <p className="font-medium text-sm text-blue-700">Key Features:</p>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• Advanced admin dashboard</li>
                  <li>• SSO integration</li>
                  <li>• Usage analytics</li>
                  <li>• Custom data retention</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-sm text-indigo-700">Pricing:</p>
                <ul className="text-sm text-indigo-600 space-y-1">
                  <li>• $60/user/month</li>
                  <li>• Volume discounts available</li>
                  <li>• Unlimited GPT-4 usage</li>
                  <li>• Priority support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-4 border rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-lg">Claude for Work</h4>
              <Badge className="bg-purple-500 text-white">Best Security</Badge>
            </div>
            <p className="text-muted-foreground mb-3">
              Privacy-focused enterprise AI with constitutional safety guarantees.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <p className="font-medium text-sm text-purple-700">Key Features:</p>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• No data training usage</li>
                  <li>• Constitutional AI safety</li>
                  <li>• Long context windows</li>
                  <li>• European data centers</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-sm text-pink-700">Pricing:</p>
                <ul className="text-sm text-pink-600 space-y-1">
                  <li>• Custom enterprise pricing</li>
                  <li>• Usage-based billing</li>
                  <li>• Dedicated support</li>
                  <li>• SLA guarantees</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-4 border rounded-lg bg-gradient-to-r from-green-50 to-teal-50">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-lg">Google Workspace AI</h4>
              <Badge className="bg-green-500 text-white">Best Integration</Badge>
            </div>
            <p className="text-muted-foreground mb-3">
              Seamlessly integrated with Google Workspace for enhanced productivity.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <p className="font-medium text-sm text-green-700">Key Features:</p>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Native Workspace integration</li>
                  <li>• Gmail and Docs AI</li>
                  <li>• Meet transcription</li>
                  <li>• Sheets analysis</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-sm text-teal-700">Pricing:</p>
                <ul className="text-sm text-teal-600 space-y-1">
                  <li>• $30/user/month</li>
                  <li>• Includes Workspace Premium</li>
                  <li>• Unlimited Gemini access</li>
                  <li>• Enterprise support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnterpriseComparison;
