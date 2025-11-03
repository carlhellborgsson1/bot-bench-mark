
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const apiData = [
  {
    name: "OpenAI API (GPT-5)",
    badge: "Most Advanced",
    badgeColor: "bg-blue-100 text-blue-700",
    rateLimit: 10000,
    rateLimitText: "10,000 requests/min",
    contextLength: 272000,
    contextLengthText: "272K tokens (~200,000 words)",
    responseTime: 2,
    responseTimeText: "1-3 seconds average",
    streaming: "Yes (real-time)",
    features: ["Function Calling", "Vision API", "Fine-tuning", "Reasoning"]
  },
  {
    name: "Anthropic API (Claude 4.5)",
    badge: "Best Coding",
    badgeColor: "bg-purple-100 text-purple-700",
    rateLimit: 5000,
    rateLimitText: "5,000 requests/min",
    contextLength: 200000,
    contextLengthText: "200K tokens (~150,000 words)",
    responseTime: 2.5,
    responseTimeText: "1-4 seconds average",
    streaming: "Yes (real-time)",
    features: ["Computer Use", "Long Context", "Vision", "Tool Use"]
  },
  {
    name: "Google Gemini 2.5 API",
    badge: "Fastest & Largest Context",
    badgeColor: "bg-green-100 text-green-700",
    rateLimit: 1500,
    rateLimitText: "1,500 requests/day (free tier)",
    contextLength: 2000000,
    contextLengthText: "2M tokens (~1.5M words)",
    responseTime: 1.4,
    responseTimeText: "0.8-2 seconds average",
    streaming: "Yes (real-time)",
    features: ["Multimodal", "Google Integration", "Ultra-Long Context", "50% Batch Discount"]
  },
  {
    name: "Perplexity API",
    badge: "Search-Focused",
    badgeColor: "bg-orange-100 text-orange-700",
    rateLimit: 2000,
    rateLimitText: "2,000 requests/min",
    contextLength: 16000,
    contextLengthText: "16K tokens (~12,000 words)",
    responseTime: 5.5,
    responseTimeText: "3-8 seconds average",
    streaming: "Yes (real-time)",
    features: ["Web Search", "Citations", "Real-time Data"]
  },
  {
    name: "Microsoft Copilot API",
    badge: "Enterprise",
    badgeColor: "bg-indigo-100 text-indigo-700",
    rateLimit: 8000,
    rateLimitText: "8,000 requests/min",
    contextLength: 272000,
    contextLengthText: "272K tokens (~200,000 words)",
    responseTime: 2,
    responseTimeText: "1-3 seconds average",
    streaming: "Yes (real-time)",
    features: ["Office Integration", "Enterprise Security", "Azure Integration", "GPT-5 Access"]
  }
];

export const APIFeaturesComparison = () => {
  const [sortBy, setSortBy] = useState<string>("default");
  
  const sortedData = [...apiData].sort((a, b) => {
    switch (sortBy) {
      case "responseTimeFast":
        return a.responseTime - b.responseTime;
      case "contextLengthLarge":
        return b.contextLength - a.contextLength;
      case "rateLimitHigh":
        return b.rateLimit - a.rateLimit;
      case "nameAZ":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="flex items-center gap-2 text-black">
            <Terminal className="h-5 w-5 text-green-600" />
            API Features Comparison
          </CardTitle>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[220px] bg-white text-black border-gray-300 z-50">
              <SelectValue placeholder="Sort by..." />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-300 z-50">
              <SelectItem value="default" className="text-black hover:bg-gray-100">Default Order</SelectItem>
              <SelectItem value="responseTimeFast" className="text-black hover:bg-gray-100">Response Time (Fastest)</SelectItem>
              <SelectItem value="contextLengthLarge" className="text-black hover:bg-gray-100">Context Length (Largest)</SelectItem>
              <SelectItem value="rateLimitHigh" className="text-black hover:bg-gray-100">Rate Limit (Highest)</SelectItem>
              <SelectItem value="nameAZ" className="text-black hover:bg-gray-100">Name: A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <CardDescription className="text-black">Core API capabilities and technical limitations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          {sortedData.map((api) => (
            <div key={api.name} className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-black">{api.name}</h4>
                <Badge className={api.badgeColor}>{api.badge}</Badge>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-medium text-black">Rate Limits</p>
                  <p className="text-black">{api.rateLimitText}</p>
                </div>
                <div>
                  <p className="font-medium text-black">Context Length</p>
                  <p className="text-black">{api.contextLengthText}</p>
                </div>
                <div>
                  <p className="font-medium text-black">Response Time</p>
                  <p className="text-black">{api.responseTimeText}</p>
                </div>
                <div>
                  <p className="font-medium text-black">Streaming</p>
                  <p className="text-black">{api.streaming}</p>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-1">
                {api.features.map((feature) => (
                  <Badge key={feature} variant="outline" className="text-xs">{feature}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
