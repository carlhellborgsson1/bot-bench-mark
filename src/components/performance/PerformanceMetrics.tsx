
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Target, Zap, BarChart3 } from "lucide-react";

const metrics = [
  {
    chatbot: "GPT-5",
    responseTime: "1.8s",
    accuracy: "96%",
    throughput: "Very High",
    reliability: "99.9%",
    score: 9.5
  },
  {
    chatbot: "Claude 4.5 Sonnet",
    responseTime: "1.5s",
    accuracy: "95%",
    throughput: "High",
    reliability: "99.8%",
    score: 9.4
  },
  {
    chatbot: "Gemini 2.5 Pro",
    responseTime: "1.2s",
    accuracy: "94%",
    throughput: "Very High",
    reliability: "99.9%",
    score: 9.3
  },
  {
    chatbot: "GPT-5 mini",
    responseTime: "1.0s",
    accuracy: "92%",
    throughput: "Very High",
    reliability: "99.9%",
    score: 9.0
  },
  {
    chatbot: "Perplexity AI",
    responseTime: "2.2s",
    accuracy: "93%",
    throughput: "High",
    reliability: "99.5%",
    score: 8.9
  },
  {
    chatbot: "Microsoft Copilot",
    responseTime: "1.9s",
    accuracy: "91%",
    throughput: "High",
    reliability: "99.7%",
    score: 8.8
  },
  {
    chatbot: "Llama 3.3 70B",
    responseTime: "2.5s",
    accuracy: "89%",
    throughput: "Medium",
    reliability: "99.2%",
    score: 8.4
  },
  {
    chatbot: "Mistral Large 2",
    responseTime: "1.3s",
    accuracy: "88%",
    throughput: "Very High",
    reliability: "99.3%",
    score: 8.5
  }
];

export const PerformanceMetrics = () => {
  return (
    <div className="grid gap-6 mb-8">
      {metrics.map((metric, index) => (
        <Card key={metric.chatbot} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CardTitle className="text-xl text-black">{metric.chatbot}</CardTitle>
                <Badge variant="secondary" className="bg-blue-100 text-black">
                  Overall Score: {metric.score}/10
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-white" />
                <div>
                  <p className="font-semibold text-black">{metric.responseTime}</p>
                  <p className="text-sm text-black">Response Time</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-white" />
                <div>
                  <p className="font-semibold text-black">{metric.accuracy}</p>
                  <p className="text-sm text-black">Accuracy</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-white" />
                <div>
                  <p className="font-semibold text-black">{metric.throughput}</p>
                  <p className="text-sm text-black">Throughput</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BarChart3 className="h-5 w-5 text-white" />
                <div>
                  <p className="font-semibold text-black">{metric.reliability}</p>
                  <p className="text-sm text-black">Uptime</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
