
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, ExternalLink } from "lucide-react";
import { getAffiliateLink } from "@/utils/recommendations";

const EnterpriseComparison = () => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-black">
          <Briefcase className="h-5 w-5 text-blue-600" />
          Enterprise Solutions Comparison
        </CardTitle>
        <CardDescription className="text-black">Professional-grade AI for business environments</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-lg text-black">GPT-4 Enterprise</h4>
              <Badge className="bg-blue-500 text-white">Most Popular</Badge>
            </div>
            <p className="text-black mb-3">
              Comprehensive enterprise solution with advanced security and admin controls.
            </p>
            <div className="grid md:grid-cols-2 gap-3 mb-4">
              <div>
                <p className="font-medium text-sm text-black">Key Features:</p>
                <ul className="text-sm text-black space-y-1">
                  <li>• Advanced admin dashboard</li>
                  <li>• SSO integration</li>
                  <li>• Usage analytics</li>
                  <li>• Custom data retention</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-sm text-black">Pricing:</p>
                <ul className="text-sm text-black space-y-1">
                  <li>• $60/user/month</li>
                  <li>• Volume discounts available</li>
                  <li>• Unlimited GPT-4 usage</li>
                  <li>• Priority support</li>
                </ul>
              </div>
            </div>
            <Button 
              onClick={() => window.open(getAffiliateLink("GPT-4 Enterprise"), '_blank')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Get GPT-4 Enterprise
            </Button>
          </div>

          <div className="p-4 border rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-lg text-black">Claude for Work</h4>
              <Badge className="bg-purple-500 text-white">Best Security</Badge>
            </div>
            <p className="text-black mb-3">
              Privacy-focused enterprise AI with constitutional safety guarantees.
            </p>
            <div className="grid md:grid-cols-2 gap-3 mb-4">
              <div>
                <p className="font-medium text-sm text-black">Key Features:</p>
                <ul className="text-sm text-black space-y-1">
                  <li>• No data training usage</li>
                  <li>• Constitutional AI safety</li>
                  <li>• Long context windows</li>
                  <li>• European data centers</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-sm text-black">Pricing:</p>
                <ul className="text-sm text-black space-y-1">
                  <li>• Custom enterprise pricing</li>
                  <li>• Usage-based billing</li>
                  <li>• Dedicated support</li>
                  <li>• SLA guarantees</li>
                </ul>
              </div>
            </div>
            <Button 
              onClick={() => window.open(getAffiliateLink("Claude for Work"), '_blank')}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Get Claude for Work
            </Button>
          </div>

          <div className="p-4 border rounded-lg bg-gradient-to-r from-green-50 to-teal-50">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-lg text-black">Google Workspace AI</h4>
              <Badge className="bg-green-500 text-white">Best Integration</Badge>
            </div>
            <p className="text-black mb-3">
              Seamlessly integrated with Google Workspace for enhanced productivity.
            </p>
            <div className="grid md:grid-cols-2 gap-3 mb-4">
              <div>
                <p className="font-medium text-sm text-black">Key Features:</p>
                <ul className="text-sm text-black space-y-1">
                  <li>• Native Workspace integration</li>
                  <li>• Gmail and Docs AI</li>
                  <li>• Meet transcription</li>
                  <li>• Sheets analysis</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-sm text-black">Pricing:</p>
                <ul className="text-sm text-black space-y-1">
                  <li>• $30/user/month</li>
                  <li>• Includes Workspace Premium</li>
                  <li>• Unlimited Gemini access</li>
                  <li>• Enterprise support</li>
                </ul>
              </div>
            </div>
            <Button 
              onClick={() => window.open(getAffiliateLink("Google Workspace AI"), '_blank')}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Get Google Workspace AI
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnterpriseComparison;
