
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Clock, Target, Zap, Info } from "lucide-react";

const Performance = () => {
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
      score: 8.8
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

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10">
            <BarChart3 className="h-6 w-6 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-white">Performance Comparison</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Compare AI chatbots across key performance metrics including response time, accuracy, 
          throughput, and reliability to find the fastest and most efficient solution.
        </p>
      </div>

      {/* Metrics Explanation */}
      <Card className="mb-8 bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <Info className="h-5 w-5 text-blue-600" />
            Understanding the Metrics
          </CardTitle>
          <CardDescription className="text-blue-700">
            Here's what each performance metric represents:
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-3 bg-white rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-blue-600" />
              <h4 className="font-semibold text-blue-900">Response Time</h4>
            </div>
            <p className="text-sm text-blue-700">Average time from sending a message to receiving the first response token</p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-blue-600" />
              <h4 className="font-semibold text-blue-900">Accuracy</h4>
            </div>
            <p className="text-sm text-blue-700">Percentage of correct responses on standardized test questions across various topics</p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-blue-600" />
              <h4 className="font-semibold text-blue-900">Throughput</h4>
            </div>
            <p className="text-sm text-blue-700">Maximum number of concurrent requests the system can handle effectively</p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="h-4 w-4 text-blue-600" />
              <h4 className="font-semibold text-blue-900">Uptime</h4>
            </div>
            <p className="text-sm text-blue-700">Percentage of time the service is available and functioning properly over 30 days</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 mb-8">
        {metrics.map((metric, index) => (
          <Card key={metric.chatbot} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CardTitle className="text-xl">{metric.chatbot}</CardTitle>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Overall Score: {metric.score}/10
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">{metric.responseTime}</p>
                    <p className="text-sm text-muted-foreground">Response Time</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">{metric.accuracy}</p>
                    <p className="text-sm text-muted-foreground">Accuracy</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">{metric.throughput}</p>
                    <p className="text-sm text-muted-foreground">Throughput</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">{metric.reliability}</p>
                    <p className="text-sm text-muted-foreground">Uptime</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Insights</CardTitle>
            <CardDescription>Key findings from our analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="font-semibold text-blue-900">Fastest Response</p>
              <p className="text-blue-700">ChatGPT-3.5 leads with 1.5s average response time</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="font-semibold text-green-900">Highest Accuracy</p>
              <p className="text-green-700">GPT-4 achieves 94% accuracy in complex tasks</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="font-semibold text-purple-900">Best Reliability</p>
              <p className="text-purple-700">GPT-4 maintains 99.9% uptime consistency</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Benchmarking Methodology</CardTitle>
            <CardDescription>How we measure performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 text-foreground">Response Time</h4>
              <p className="text-foreground">Average time from query to first response token</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-foreground">Accuracy</h4>
              <p className="text-foreground">Correctness on standardized question sets</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-foreground">Throughput</h4>
              <p className="text-foreground">Maximum concurrent requests handling</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-foreground">Reliability</h4>
              <p className="text-foreground">Service availability over 30-day periods</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Performance;
