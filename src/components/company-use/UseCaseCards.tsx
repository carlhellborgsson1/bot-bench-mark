
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Cog, Building } from "lucide-react";

const UseCaseCards = () => {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader className="text-center">
          <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
          <CardTitle className="text-lg">Customer Support</CardTitle>
          <CardDescription className="text-sm">AI-powered help desk solutions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-center mb-4">
            <Badge className="bg-blue-100 text-blue-700">Recommended: GPT-4</Badge>
          </div>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>• 24/7 customer assistance</li>
            <li>• Multi-language support</li>
            <li>• Ticket routing automation</li>
            <li>• Knowledge base integration</li>
            <li>• Escalation protocols</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader className="text-center">
          <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
          <CardTitle className="text-lg">Sales & Marketing</CardTitle>
          <CardDescription className="text-sm">Revenue generation and lead nurturing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-center mb-4">
            <Badge className="bg-green-100 text-green-700">Recommended: Claude</Badge>
          </div>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>• Lead qualification</li>
            <li>• Content generation</li>
            <li>• Email automation</li>
            <li>• Proposal writing</li>
            <li>• Market research</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader className="text-center">
          <Cog className="h-8 w-8 text-purple-500 mx-auto mb-2" />
          <CardTitle className="text-lg">Operations</CardTitle>
          <CardDescription className="text-sm">Process automation and efficiency</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-center mb-4">
            <Badge className="bg-purple-100 text-purple-700">Recommended: Gemini</Badge>
          </div>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>• Workflow automation</li>
            <li>• Document processing</li>
            <li>• Inventory management</li>
            <li>• Report generation</li>
            <li>• Quality assurance</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader className="text-center">
          <Building className="h-8 w-8 text-orange-500 mx-auto mb-2" />
          <CardTitle className="text-lg">HR & Training</CardTitle>
          <CardDescription className="text-sm">Human resources and development</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-center mb-4">
            <Badge className="bg-orange-100 text-orange-700">Recommended: Claude</Badge>
          </div>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>• Employee onboarding</li>
            <li>• Training content creation</li>
            <li>• Policy Q&A assistance</li>
            <li>• Performance reviews</li>
            <li>• Recruitment screening</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default UseCaseCards;
