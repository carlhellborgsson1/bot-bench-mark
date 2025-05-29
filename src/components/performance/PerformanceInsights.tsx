
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const PerformanceInsights = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-black">Performance Insights</CardTitle>
          <CardDescription className="text-black">Key findings from our analysis</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold text-black">Fastest Response</p>
            <p className="text-black">ChatGPT-3.5 leads with 1.5s average response time</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="font-semibold text-black">Highest Accuracy</p>
            <p className="text-black">GPT-4 achieves 94% accuracy in complex tasks</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="font-semibold text-black">Best Reliability</p>
            <p className="text-black">GPT-4 maintains 99.9% uptime consistency</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-black">Benchmarking Methodology</CardTitle>
          <CardDescription className="text-black">How we measure performance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2 text-black">Response Time</h4>
            <p className="text-black">Average time from query to first response token</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-black">Accuracy</h4>
            <p className="text-black">Correctness on standardized question sets</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-black">Throughput</h4>
            <p className="text-black">Maximum concurrent requests handling</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-black">Reliability</h4>
            <p className="text-black">Service availability over 30-day periods</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
