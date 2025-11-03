
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const PricingCards = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-black">ChatGPT Pro</CardTitle>
          <CardDescription className="text-black">Ultimate AI power user plan</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div>
            <p className="text-3xl font-bold text-black">$200</p>
            <p className="text-black">/month</p>
          </div>
          <Badge className="bg-amber-100 text-amber-700">ChatGPT Pro</Badge>
          <ul className="text-sm space-y-2 text-left">
            <li className="text-black">• Unlimited GPT-5 access</li>
            <li className="text-black">• Advanced reasoning mode</li>
            <li className="text-black">• Unlimited image generation</li>
            <li className="text-black">• Extended context windows</li>
            <li className="text-black">• Priority compute access</li>
          </ul>
          <Button 
            className="w-full bg-amber-600 hover:bg-amber-700"
            onClick={() => window.open('https://chat.openai.com/', '_blank')}
          >
            Get ChatGPT Pro <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-black">GPT-5</CardTitle>
          <CardDescription className="text-black">OpenAI's flagship model</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div>
            <p className="text-3xl font-bold text-black">$20</p>
            <p className="text-black">/month</p>
          </div>
          <Badge className="bg-blue-100 text-blue-700">ChatGPT Plus</Badge>
          <ul className="text-sm space-y-2 text-left">
            <li className="text-black">• GPT-5 & GPT-5 mini access</li>
            <li className="text-black">• Advanced reasoning</li>
            <li className="text-black">• Image generation & analysis</li>
            <li className="text-black">• Deep research capabilities</li>
            <li className="text-black">• Priority access & support</li>
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
          <CardTitle className="text-xl text-black">Claude 4.5</CardTitle>
          <CardDescription className="text-black">Anthropic's latest Sonnet model</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div>
            <p className="text-3xl font-bold text-black">$20</p>
            <p className="text-black">/month</p>
          </div>
          <Badge className="bg-purple-100 text-purple-700">Claude Pro</Badge>
          <ul className="text-sm space-y-2 text-left">
            <li className="text-black">• Claude 4.5 Sonnet access</li>
            <li className="text-black">• 5x more usage than free</li>
            <li className="text-black">• Priority access & speed</li>
            <li className="text-black">• Extended context windows</li>
            <li className="text-black">• Vision & document analysis</li>
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
          <CardTitle className="text-xl text-black">Gemini 2.5</CardTitle>
          <CardDescription className="text-black">Google's latest multimodal AI</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div>
            <p className="text-3xl font-bold text-black">$20</p>
            <p className="text-black">/month</p>
          </div>
          <Badge className="bg-green-100 text-green-700">Google AI Pro</Badge>
          <ul className="text-sm space-y-2 text-left">
            <li className="text-black">• Gemini 2.5 Pro access</li>
            <li className="text-black">• 2TB cloud storage</li>
            <li className="text-black">• Deep Research feature</li>
            <li className="text-black">• Video generation (Veo 3.1)</li>
            <li className="text-black">• Google Workspace integration</li>
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
            <p className="text-3xl font-bold text-black">$20</p>
            <p className="text-black">/month</p>
          </div>
          <Badge className="bg-indigo-100 text-indigo-700">Copilot Pro</Badge>
          <ul className="text-sm space-y-2 text-left">
            <li className="text-black">• GPT-5 access</li>
            <li className="text-black">• Microsoft 365 integration</li>
            <li className="text-black">• AI image generation</li>
            <li className="text-black">• Designer & Editor tools</li>
            <li className="text-black">• Priority access</li>
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
          <CardTitle className="text-xl text-black">Llama 3.3 70B</CardTitle>
          <CardDescription className="text-black">Meta's latest open-source</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div>
            <p className="text-3xl font-bold text-black">$0-50</p>
            <p className="text-black">/month</p>
          </div>
          <Badge className="bg-red-100 text-red-700">Variable Pricing</Badge>
          <ul className="text-sm space-y-2 text-left">
            <li className="text-black">• Open source & free to use</li>
            <li className="text-black">• Self-hosting available</li>
            <li className="text-black">• Commercial use allowed</li>
            <li className="text-black">• Multiple cloud providers</li>
            <li className="text-black">• Custom fine-tuning</li>
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
          <CardTitle className="text-xl text-black">Mistral Large</CardTitle>
          <CardDescription className="text-black">European AI leader</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div>
            <p className="text-3xl font-bold text-black">$15</p>
            <p className="text-black">/month</p>
          </div>
          <Badge className="bg-teal-100 text-teal-700">Mistral Pro</Badge>
          <ul className="text-sm space-y-2 text-left">
            <li className="text-black">• Mistral Large 2 access</li>
            <li className="text-black">• European data centers</li>
            <li className="text-black">• GDPR compliant by design</li>
            <li className="text-black">• Multilingual (100+ languages)</li>
            <li className="text-black">• Function calling & RAG</li>
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
            <li className="text-black">• GPT-5 (limited messages)</li>
            <li className="text-black">• Claude 4.5 Haiku</li>
            <li className="text-black">• Gemini 2.5 Flash</li>
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
