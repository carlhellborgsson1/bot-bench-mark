
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Cog, Building } from "lucide-react";

const UseCaseCards = () => {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader className="text-center">
          <Users className="h-8 w-8 text-amber-700 mx-auto mb-2" />
          <CardTitle className="text-lg text-amber-900">Customer Support</CardTitle>
          <CardDescription className="text-sm text-amber-700">AI-powered help desk solutions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-center mb-4">
            <Badge className="bg-blue-100 text-amber-800">Recommended: GPT-4</Badge>
          </div>
          <ul className="text-sm space-y-2 text-amber-800">
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
          <TrendingUp className="h-8 w-8 text-amber-700 mx-auto mb-2" />
          <CardTitle className="text-lg text-amber-900">Sales & Marketing</CardTitle>
          <CardDescription className="text-sm text-amber-700">Revenue generation and lead nurturing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-center mb-4">
            <Badge className="bg-green-100 text-amber-800">Recommended: Claude</Badge>
          </div>
          <ul className="text-sm space-y-2 text-amber-800">
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
          <Cog className="h-8 w-8 text-amber-700 mx-auto mb-2" />
          <CardTitle className="text-lg text-amber-900">Operations</CardTitle>
          <CardDescription className="text-sm text-amber-700">Process automation and efficiency</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-center mb-4">
            <Badge className="bg-purple-100 text-amber-800">Recommended: Gemini</Badge>
          </div>
          <ul className="text-sm space-y-2 text-amber-800">
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
          <Building className="h-8 w-8 text-amber-700 mx-auto mb-2" />
          <CardTitle className="text-lg text-amber-900">HR & Training</CardTitle>
          <CardDescription className="text-sm text-amber-700">Human resources and development</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-center mb-4">
            <Badge className="bg-orange-100 text-amber-800">Recommended: Claude</Badge>
          </div>
          <ul className="text-sm space-y-2 text-amber-800">
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
