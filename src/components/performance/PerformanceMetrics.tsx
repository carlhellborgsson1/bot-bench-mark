
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Target, Zap, BarChart3 } from "lucide-react";

const metrics = [
  {
    chatbot: "GPT-4",
    responseTime: "2.3s",
    accuracy: "94%",
    throughput: "High",
    reliability: "99.9%",
    score: 9.2
  },
  {
    chatbot: "Claude 3",
    responseTime: "1.8s",
    accuracy: "92%",
    throughput: "High",
    reliability: "99.7%",
    score: 9.0
  },
  {
    chatbot: "Gemini Pro",
    responseTime: "2.1s",
    accuracy: "90%",
    throughput: "Medium",
    reliability: "99.5%",
    score: 8.5
  },
  {
    chatbot: "ChatGPT-3.5",
    responseTime: "1.5s",
    accuracy: "88%",
    throughput: "Very High",
    reliability: "99.8%",
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
                <Badge variant="secondary" className="bg-amber-100 text-black">
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
