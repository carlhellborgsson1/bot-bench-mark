
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Zap, Terminal, Code, Layers } from "lucide-react";

export const APIMetricsExplanation = () => {
  return (
    <Card className="mb-8 bg-indigo-50 border-indigo-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-black">
          <Info className="h-5 w-5" />
          Understanding API Metrics
        </CardTitle>
        <CardDescription className="text-black">
          Here's what each API metric means for developers:
        </CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-3 bg-white rounded-lg border border-indigo-200">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-4 w-4 text-indigo-600" />
            <h4 className="font-semibold text-black">Rate Limits (RPM)</h4>
          </div>
          <p className="text-sm text-black">Maximum API requests per minute your application can make</p>
        </div>
        <div className="p-3 bg-white rounded-lg border border-indigo-200">
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="h-4 w-4 text-indigo-600" />
            <h4 className="font-semibold text-black">Context Length</h4>
          </div>
          <p className="text-sm text-black">Maximum tokens (words) the AI can process in a single conversation</p>
        </div>
        <div className="p-3 bg-white rounded-lg border border-indigo-200">
          <div className="flex items-center gap-2 mb-2">
            <Code className="h-4 w-4 text-indigo-600" />
            <h4 className="font-semibold text-black">Response Time</h4>
          </div>
          <p className="text-sm text-black">Average time from API request to response completion</p>
        </div>
        <div className="p-3 bg-white rounded-lg border border-indigo-200">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="h-4 w-4 text-indigo-600" />
            <h4 className="font-semibold text-black">Streaming</h4>
          </div>
          <p className="text-sm text-black">Real-time response delivery as the AI generates text (like ChatGPT interface)</p>
        </div>
      </CardContent>
    </Card>
  );
};
