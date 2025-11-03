
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const pricingData = [
  {
    name: "ChatGPT Pro",
    model: "Ultimate AI power user plan",
    price: 200,
    badge: "ChatGPT Pro",
    badgeColor: "bg-amber-100 text-amber-700",
    buttonColor: "bg-amber-600 hover:bg-amber-700",
    features: [
      "• Unlimited GPT-5 access",
      "• Advanced reasoning mode",
      "• Unlimited image generation",
      "• Extended context windows",
      "• Priority compute access"
    ],
    url: "https://chat.openai.com/"
  },
  {
    name: "GPT-5",
    model: "OpenAI's flagship model",
    price: 20,
    badge: "ChatGPT Plus",
    badgeColor: "bg-blue-100 text-blue-700",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    features: [
      "• GPT-5 & GPT-5 mini access",
      "• Advanced reasoning",
      "• Image generation & analysis",
      "• Deep research capabilities",
      "• Priority access & support"
    ],
    url: "https://chat.openai.com/auth/login?next=%2F%3Fmodel%3Dgpt-4"
  },
  {
    name: "Claude 4.5",
    model: "Anthropic's latest Sonnet model",
    price: 20,
    badge: "Claude Pro",
    badgeColor: "bg-purple-100 text-purple-700",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    features: [
      "• Claude 4.5 Sonnet access",
      "• 5x more usage than free",
      "• Priority access & speed",
      "• Extended context windows",
      "• Vision & document analysis"
    ],
    url: "https://claude.ai/upgrade"
  },
  {
    name: "Gemini 2.5",
    model: "Google's latest multimodal AI",
    price: 20,
    badge: "Google AI Pro",
    badgeColor: "bg-green-100 text-green-700",
    buttonColor: "bg-green-600 hover:bg-green-700",
    features: [
      "• Gemini 2.5 Pro access",
      "• 2TB cloud storage",
      "• Deep Research feature",
      "• Video generation (Veo 3.1)",
      "• Google Workspace integration"
    ],
    url: "https://one.google.com/about/plans"
  },
  {
    name: "Perplexity AI",
    model: "AI-powered search engine",
    price: 20,
    badge: "Perplexity Pro",
    badgeColor: "bg-orange-100 text-orange-700",
    buttonColor: "bg-orange-600 hover:bg-orange-700",
    features: [
      "• 300+ Pro searches/day",
      "• GPT-4 & Claude access",
      "• File uploads",
      "• API credits",
      "• Priority support"
    ],
    url: "https://perplexity.ai/pro"
  },
  {
    name: "Microsoft Copilot",
    model: "AI assistant for productivity",
    price: 20,
    badge: "Copilot Pro",
    badgeColor: "bg-indigo-100 text-indigo-700",
    buttonColor: "bg-indigo-600 hover:bg-indigo-700",
    features: [
      "• GPT-5 access",
      "• Microsoft 365 integration",
      "• AI image generation",
      "• Designer & Editor tools",
      "• Priority access"
    ],
    url: "https://copilot.microsoft.com/"
  },
  {
    name: "Llama 3.3 70B",
    model: "Meta's latest open-source",
    price: 25,
    badge: "Variable Pricing",
    badgeColor: "bg-red-100 text-red-700",
    buttonColor: "bg-red-600 hover:bg-red-700",
    features: [
      "• Open source & free to use",
      "• Self-hosting available",
      "• Commercial use allowed",
      "• Multiple cloud providers",
      "• Custom fine-tuning"
    ],
    url: "https://llama.meta.com/"
  },
  {
    name: "Mistral Large",
    model: "European AI leader",
    price: 15,
    badge: "Mistral Pro",
    badgeColor: "bg-teal-100 text-teal-700",
    buttonColor: "bg-teal-600 hover:bg-teal-700",
    features: [
      "• Mistral Large 2 access",
      "• European data centers",
      "• GDPR compliant by design",
      "• Multilingual (100+ languages)",
      "• Function calling & RAG"
    ],
    url: "https://mistral.ai/"
  },
  {
    name: "Free Tiers",
    model: "Basic access options",
    price: 0,
    badge: "Limited Access",
    badgeColor: "bg-gray-100 text-gray-700 border border-gray-400",
    buttonColor: "bg-gray-600 hover:bg-gray-700",
    features: [
      "• GPT-5 (limited messages)",
      "• Claude 4.5 Haiku",
      "• Gemini 2.5 Flash",
      "• Usage limits apply",
      "• Standard support"
    ],
    url: "https://chat.openai.com/"
  }
];

export const PricingCards = () => {
  const [sortBy, setSortBy] = useState<string>("default");
  
  const sortedData = [...pricingData].sort((a, b) => {
    switch (sortBy) {
      case "priceLowHigh":
        return a.price - b.price;
      case "priceHighLow":
        return b.price - a.price;
      case "nameAZ":
        return a.name.localeCompare(b.name);
      default:
        return 0; // default order
    }
  });

  return (
    <div className="space-y-6 mb-8">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">Sort by:</h3>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[200px] bg-white text-black border-gray-300 z-50">
            <SelectValue placeholder="Sort by..." />
          </SelectTrigger>
          <SelectContent className="bg-white border-gray-300 z-50">
            <SelectItem value="default" className="text-black hover:bg-gray-100">Default Order</SelectItem>
            <SelectItem value="priceLowHigh" className="text-black hover:bg-gray-100">Price: Low to High</SelectItem>
            <SelectItem value="priceHighLow" className="text-black hover:bg-gray-100">Price: High to Low</SelectItem>
            <SelectItem value="nameAZ" className="text-black hover:bg-gray-100">Name: A-Z</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {sortedData.map((item) => (
        <Card key={item.name} className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-black">{item.name}</CardTitle>
            <CardDescription className="text-black">{item.model}</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div>
              <p className="text-3xl font-bold text-black">${item.price}{item.price === 25 ? "-50" : ""}</p>
              <p className="text-black">/month</p>
            </div>
            <Badge className={item.badgeColor} variant={item.name === "Free Tiers" ? "outline" : "default"}>
              {item.badge}
            </Badge>
            <ul className="text-sm space-y-2 text-left">
              {item.features.map((feature, idx) => (
                <li key={idx} className="text-black">{feature}</li>
              ))}
            </ul>
            <Button 
              className={`w-full ${item.buttonColor}`}
              variant={item.name === "Free Tiers" ? "outline" : "default"}
              onClick={() => window.open(item.url, '_blank')}
            >
              {item.name === "Free Tiers" ? "Try Free Versions" : 
               item.name === "Llama 3.3 70B" ? "Learn More" :
               `Get ${item.badge}`} <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      ))}
      </div>
    </div>
  );
};
