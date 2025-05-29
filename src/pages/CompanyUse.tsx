
import { Building, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import EnterpriseComparison from "@/components/company-use/EnterpriseComparison";
import SecurityCompliance from "@/components/company-use/SecurityCompliance";
import UseCaseCards from "@/components/company-use/UseCaseCards";
import BusinessImpact from "@/components/company-use/BusinessImpact";
import PricingComparison from "@/components/company-use/PricingComparison";
import { getAffiliateLink } from "@/utils/recommendations";

const CompanyUse = () => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10">
            <Building className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">AI Chatbots for Business Use</h1>
        </div>
        <p className="text-lg text-white max-w-3xl">
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

      <div className="mb-8">
        <PricingComparison />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Building className="h-5 w-5 text-blue-600" />
            Get Started with Enterprise AI Solutions
          </CardTitle>
          <CardDescription className="text-white">Click below to start using the recommended AI chatbots for business use</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-lg text-black">GPT-4 Enterprise</h4>
                <Badge className="bg-blue-500 text-white">Most Popular</Badge>
              </div>
              <p className="text-muted-foreground mb-4">
                Comprehensive enterprise solution with advanced security and admin controls for large organizations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• $60/user/month</li>
                <li>• Advanced admin dashboard</li>
                <li>• SSO integration</li>
                <li>• Usage analytics</li>
              </ul>
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
              <p className="text-muted-foreground mb-4">
                Privacy-focused enterprise AI with constitutional safety guarantees and no data training usage.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Custom enterprise pricing</li>
                <li>• No data training usage</li>
                <li>• Constitutional AI safety</li>
                <li>• European data centers</li>
              </ul>
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
              <p className="text-muted-foreground mb-4">
                Seamlessly integrated with Google Workspace for enhanced productivity and familiar interface.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• $30/user/month</li>
                <li>• Native Workspace integration</li>
                <li>• Gmail and Docs AI</li>
                <li>• Meet transcription</li>
              </ul>
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
    </div>
  );
};

export default CompanyUse;
