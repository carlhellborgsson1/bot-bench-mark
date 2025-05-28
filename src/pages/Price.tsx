
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Users, Zap, Info } from "lucide-react";

const Price = () => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10">
            <DollarSign className="h-6 w-6 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold">Pricing Comparison</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Compare pricing models, subscription tiers, and value propositions across different AI chatbot platforms 
          to find the most cost-effective solution for your needs.
        </p>
      </div>

      {/* Pricing Explanation */}
      <Card className="mb-8 bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-900">
            <Info className="h-5 w-5" />
            Understanding Pricing Models
          </CardTitle>
          <CardDescription className="text-green-700">
            Here's what different pricing terms and models mean:
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-3 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Monthly Subscription</h4>
              <p className="text-sm text-green-700">Fixed monthly fee for unlimited or high-limit usage of the AI model with premium features</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">API Pricing (per 1K tokens)</h4>
              <p className="text-sm text-green-700">Pay-per-use model where 1K tokens ≈ 750 words. You pay only for what you consume</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Usage Limits</h4>
              <p className="text-sm text-green-700">Restrictions on message count per time period (e.g., "40 messages per 3 hours")</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Enterprise Pricing</h4>
              <p className="text-sm text-green-700">Custom pricing for large organizations with volume discounts and additional features</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">GPT-4</CardTitle>
            <CardDescription>OpenAI's most advanced model</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div>
              <p className="text-3xl font-bold">$20</p>
              <p className="text-muted-foreground">/month</p>
            </div>
            <Badge className="bg-blue-100 text-blue-700">ChatGPT Plus</Badge>
            <ul className="text-sm space-y-2 text-left">
              <li>• 40 messages per 3 hours</li>
              <li>• GPT-4 access</li>
              <li>• Image analysis</li>
              <li>• Plugin access</li>
              <li>• Priority access</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Claude 3</CardTitle>
            <CardDescription>Anthropic's constitutional AI</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div>
              <p className="text-3xl font-bold">$20</p>
              <p className="text-muted-foreground">/month</p>
            </div>
            <Badge className="bg-purple-100 text-purple-700">Claude Pro</Badge>
            <ul className="text-sm space-y-2 text-left">
              <li>• 5x more usage vs free</li>
              <li>• Priority bandwidth</li>
              <li>• Early access features</li>
              <li>• Longer conversations</li>
              <li>• Image uploads</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Gemini Pro</CardTitle>
            <CardDescription>Google's multimodal AI</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div>
              <p className="text-3xl font-bold">$20</p>
              <p className="text-muted-foreground">/month</p>
            </div>
            <Badge className="bg-green-100 text-green-700">Gemini Advanced</Badge>
            <ul className="text-sm space-y-2 text-left">
              <li>• Ultra 1.0 access</li>
              <li>• 2TB Google storage</li>
              <li>• Gmail integration</li>
              <li>• Docs collaboration</li>
              <li>• Priority support</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Free Tiers</CardTitle>
            <CardDescription>Basic access options</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div>
              <p className="text-3xl font-bold">$0</p>
              <p className="text-muted-foreground">/month</p>
            </div>
            <Badge variant="outline">Limited Access</Badge>
            <ul className="text-sm space-y-2 text-left">
              <li>• GPT-3.5 access</li>
              <li>• Basic Claude</li>
              <li>• Gemini Pro</li>
              <li>• Usage limits apply</li>
              <li>• Standard support</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              API Pricing
            </CardTitle>
            <CardDescription>Pay-per-use pricing for developers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="font-medium">GPT-4</span>
                <span className="text-sm">$0.03/1K tokens</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="font-medium">Claude 3</span>
                <span className="text-sm">$0.015/1K tokens</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="font-medium">Gemini Pro</span>
                <span className="text-sm">$0.001/1K tokens</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Prices vary by model version and usage volume. Enterprise discounts available.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-green-600" />
              Enterprise Solutions
            </CardTitle>
            <CardDescription>Business and team pricing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium">Team Plans</p>
                <p className="text-sm text-muted-foreground">$25-30/user/month</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium">Enterprise</p>
                <p className="text-sm text-muted-foreground">Custom pricing</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium">Features</p>
                <p className="text-sm text-muted-foreground">SSO, admin controls, priority support</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-600" />
            Value Analysis
          </CardTitle>
          <CardDescription>Cost-effectiveness breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-2">Best Overall Value</h4>
              <p className="text-yellow-700 mb-2">Claude 3 Pro</p>
              <p className="text-sm text-yellow-600">
                Excellent performance-to-price ratio with constitutional AI benefits
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Premium Features</h4>
              <p className="text-blue-700 mb-2">GPT-4 Plus</p>
              <p className="text-sm text-blue-600">
                Most advanced capabilities with plugin ecosystem access
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Budget-Friendly</h4>
              <p className="text-green-700 mb-2">Gemini Pro (Free)</p>
              <p className="text-sm text-green-600">
                Generous free tier with competitive performance levels
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Price;
