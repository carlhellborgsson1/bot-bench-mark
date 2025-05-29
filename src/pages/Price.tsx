
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Users, Zap, Info } from "lucide-react";

const Price = () => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10">
            <DollarSign className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">Pricing Comparison</h1>
        </div>
        <p className="text-lg text-white max-w-3xl">
          Compare pricing models, subscription tiers, and value propositions across different AI chatbot platforms 
          to find the most cost-effective solution for your needs.
        </p>
      </div>

      {/* Pricing Explanation */}
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

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-black">GPT-4</CardTitle>
            <CardDescription className="text-black">OpenAI's most advanced model</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div>
              <p className="text-3xl font-bold text-black">$20</p>
              <p className="text-black">/month</p>
            </div>
            <Badge className="bg-blue-100 text-blue-700">ChatGPT Plus</Badge>
            <ul className="text-sm space-y-2 text-left">
              <li className="text-black">• 40 messages per 3 hours</li>
              <li className="text-black">• GPT-4 access</li>
              <li className="text-black">• Image analysis</li>
              <li className="text-black">• Plugin access</li>
              <li className="text-black">• Priority access</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-black">Claude 3</CardTitle>
            <CardDescription className="text-black">Anthropic's constitutional AI</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div>
              <p className="text-3xl font-bold text-black">$20</p>
              <p className="text-black">/month</p>
            </div>
            <Badge className="bg-purple-100 text-purple-700">Claude Pro</Badge>
            <ul className="text-sm space-y-2 text-left">
              <li className="text-black">• 5x more usage vs free</li>
              <li className="text-black">• Priority bandwidth</li>
              <li className="text-black">• Early access features</li>
              <li className="text-black">• Longer conversations</li>
              <li className="text-black">• Image uploads</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-black">Gemini Pro</CardTitle>
            <CardDescription className="text-black">Google's multimodal AI</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div>
              <p className="text-3xl font-bold text-black">$20</p>
              <p className="text-black">/month</p>
            </div>
            <Badge className="bg-green-100 text-green-700">Gemini Advanced</Badge>
            <ul className="text-sm space-y-2 text-left">
              <li className="text-black">• Ultra 1.0 access</li>
              <li className="text-black">• 2TB Google storage</li>
              <li className="text-black">• Gmail integration</li>
              <li className="text-black">• Docs collaboration</li>
              <li className="text-black">• Priority support</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-black">Free Tiers</CardTitle>
            <CardDescription className="text-black">Basic access options</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div>
              <p className="text-3xl font-bold text-black">$0</p>
              <p className="text-black">/month</p>
            </div>
            <Badge variant="outline" className="text-black border-black">Limited Access</Badge>
            <ul className="text-sm space-y-2 text-left">
              <li className="text-black">• GPT-3.5 access</li>
              <li className="text-black">• Basic Claude</li>
              <li className="text-black">• Gemini Pro</li>
              <li className="text-black">• Usage limits apply</li>
              <li className="text-black">• Standard support</li>
            </ul>
          </CardContent>
        </Card>
      </div>

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
          </CardContent>
        </Card>
      </div>

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
    </div>
  );
};

export default Price;
