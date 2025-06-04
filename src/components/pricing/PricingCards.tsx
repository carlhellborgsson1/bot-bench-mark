
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const PricingCards = () => {
  return (
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
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700"
            onClick={() => window.open('https://chat.openai.com/auth/login?next=%2F%3Fmodel%3Dgpt-4', '_blank')}
          >
            Get ChatGPT Plus <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
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
          <Button 
            className="w-full bg-purple-600 hover:bg-purple-700"
            onClick={() => window.open('https://claude.ai/upgrade', '_blank')}
          >
            Get Claude Pro <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
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
          <Button 
            className="w-full bg-green-600 hover:bg-green-700"
            onClick={() => window.open('https://one.google.com/about/plans', '_blank')}
          >
            Get Gemini Advanced <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-black">Perplexity AI</CardTitle>
          <CardDescription className="text-black">AI-powered search engine</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div>
            <p className="text-3xl font-bold text-black">$20</p>
            <p className="text-black">/month</p>
          </div>
          <Badge className="bg-orange-100 text-orange-700">Perplexity Pro</Badge>
          <ul className="text-sm space-y-2 text-left">
            <li className="text-black">• 300+ Pro searches/day</li>
            <li className="text-black">• GPT-4 & Claude access</li>
            <li className="text-black">• File uploads</li>
            <li className="text-black">• API credits</li>
            <li className="text-black">• Priority support</li>
          </ul>
          <Button 
            className="w-full bg-orange-600 hover:bg-orange-700"
            onClick={() => window.open('https://perplexity.ai/pro', '_blank')}
          >
            Get Perplexity Pro <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-black">Microsoft Copilot</CardTitle>
          <CardDescription className="text-black">AI assistant for productivity</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div>
            <p className="text-3xl font-bold text-black">$30</p>
            <p className="text-black">/month</p>
          </div>
          <Badge className="bg-indigo-100 text-indigo-700">Copilot Pro</Badge>
          <ul className="text-sm space-y-2 text-left">
            <li className="text-black">• GPT-4 Turbo access</li>
            <li className="text-black">• Office 365 integration</li>
            <li className="text-black">• Image creation</li>
            <li className="text-black">• Priority access</li>
            <li className="text-black">• Enhanced performance</li>
          </ul>
          <Button 
            className="w-full bg-indigo-600 hover:bg-indigo-700"
            onClick={() => window.open('https://copilot.microsoft.com/', '_blank')}
          >
            Get Copilot Pro <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-black">Llama 2 70B</CardTitle>
          <CardDescription className="text-black">Meta's open-source model</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div>
            <p className="text-3xl font-bold text-black">$0-50</p>
            <p className="text-black">/month</p>
          </div>
          <Badge className="bg-red-100 text-red-700">Variable Pricing</Badge>
          <ul className="text-sm space-y-2 text-left">
            <li className="text-black">• Open source model</li>
            <li className="text-black">• Self-hosting options</li>
            <li className="text-black">• Commercial use allowed</li>
            <li className="text-black">• Various providers</li>
            <li className="text-black">• Custom deployments</li>
          </ul>
          <Button 
            className="w-full bg-red-600 hover:bg-red-700"
            onClick={() => window.open('https://llama.meta.com/', '_blank')}
          >
            Learn More <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-black">Mistral 7B</CardTitle>
          <CardDescription className="text-black">European AI alternative</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div>
            <p className="text-3xl font-bold text-black">$15</p>
            <p className="text-black">/month</p>
          </div>
          <Badge className="bg-teal-100 text-teal-700">Mistral Pro</Badge>
          <ul className="text-sm space-y-2 text-left">
            <li className="text-black">• European data centers</li>
            <li className="text-black">• GDPR compliant</li>
            <li className="text-black">• Multilingual support</li>
            <li className="text-black">• Fast responses</li>
            <li className="text-black">• API access</li>
          </ul>
          <Button 
            className="w-full bg-teal-600 hover:bg-teal-700"
            onClick={() => window.open('https://mistral.ai/', '_blank')}
          >
            Get Mistral Pro <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
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
          <Button 
            variant="outline" 
            className="w-full border-gray-400 text-gray-700 hover:bg-gray-50"
            onClick={() => window.open('https://chat.openai.com/', '_blank')}
          >
            Try Free Versions <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
