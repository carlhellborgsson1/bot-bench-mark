
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Clock, Target, Zap, BarChart3 } from "lucide-react";

export const MetricsExplanation = () => {
  return (
    <Card className="mb-8 bg-blue-50 border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-black">
          <Info className="h-5 w-5 text-white" />
          Understanding the Metrics
        </CardTitle>
        <CardDescription className="text-black">
          Here's what each performance metric represents:
        </CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-3 bg-white rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-4 w-4 text-white" />
            <h4 className="font-semibold text-black">Response Time</h4>
          </div>
          <p className="text-sm text-black">Average time from sending a message to receiving the first response token</p>
        </div>
        <div className="p-3 bg-white rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Target className="h-4 w-4 text-white" />
            <h4 className="font-semibold text-black">Accuracy</h4>
          </div>
          <p className="text-sm text-black">Percentage of correct responses on standardized test questions across various topics</p>
        </div>
        <div className="p-3 bg-white rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-4 w-4 text-white" />
            <h4 className="font-semibold text-black">Throughput</h4>
          </div>
          <p className="text-sm text-black">Maximum number of concurrent requests the system can handle effectively</p>
        </div>
        <div className="p-3 bg-white rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="h-4 w-4 text-white" />
            <h4 className="font-semibold text-black">Uptime</h4>
          </div>
          <p className="text-sm text-black">Percentage of time the service is available and functioning properly over 30 days</p>
        </div>
      </CardContent>
    </Card>
  );
};
