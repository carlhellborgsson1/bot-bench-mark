
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal } from "lucide-react";

export const APIFeaturesComparison = () => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-black">
          <Terminal className="h-5 w-5 text-green-600" />
          API Features Comparison
        </CardTitle>
        <CardDescription className="text-black">Core API capabilities and technical limitations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-black">OpenAI API (GPT-4)</h4>
              <Badge className="bg-blue-100 text-blue-700">Most Mature</Badge>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-medium text-black">Rate Limits</p>
                <p className="text-black">10,000 requests/min</p>
              </div>
              <div>
                <p className="font-medium text-black">Context Length</p>
                <p className="text-black">128K tokens (~96,000 words)</p>
              </div>
              <div>
                <p className="font-medium text-black">Response Time</p>
                <p className="text-black">2-5 seconds average</p>
              </div>
              <div>
                <p className="font-medium text-black">Streaming</p>
                <p className="text-black">Yes (real-time)</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1">
              <Badge variant="outline" className="text-xs">Function Calling</Badge>
              <Badge variant="outline" className="text-xs">Vision API</Badge>
              <Badge variant="outline" className="text-xs">Fine-tuning</Badge>
            </div>
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-black">Anthropic API (Claude)</h4>
              <Badge className="bg-purple-100 text-purple-700">High Quality</Badge>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-medium text-black">Rate Limits</p>
                <p className="text-black">5,000 requests/min</p>
              </div>
              <div>
                <p className="font-medium text-black">Context Length</p>
                <p className="text-black">200K tokens (~150,000 words)</p>
              </div>
              <div>
                <p className="font-medium text-black">Response Time</p>
                <p className="text-black">3-6 seconds average</p>
              </div>
              <div>
                <p className="font-medium text-black">Streaming</p>
                <p className="text-black">Yes (real-time)</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1">
              <Badge variant="outline" className="text-xs">Constitutional AI</Badge>
              <Badge variant="outline" className="text-xs">Long Context</Badge>
              <Badge variant="outline" className="text-xs">Vision</Badge>
            </div>
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-black">Google Gemini API</h4>
              <Badge className="bg-green-100 text-green-700">Fastest</Badge>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-medium text-black">Rate Limits</p>
                <p className="text-black">15,000 requests/min</p>
              </div>
              <div>
                <p className="font-medium text-black">Context Length</p>
                <p className="text-black">1M tokens (~750,000 words)</p>
              </div>
              <div>
                <p className="font-medium text-black">Response Time</p>
                <p className="text-black">1-3 seconds average</p>
              </div>
              <div>
                <p className="font-medium text-black">Streaming</p>
                <p className="text-black">Yes (real-time)</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1">
              <Badge variant="outline" className="text-xs">Multimodal</Badge>
              <Badge variant="outline" className="text-xs">Google Integration</Badge>
              <Badge variant="outline" className="text-xs">Long Context</Badge>
            </div>
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-black">Perplexity API</h4>
              <Badge className="bg-orange-100 text-orange-700">Search-Focused</Badge>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-medium text-black">Rate Limits</p>
                <p className="text-black">2,000 requests/min</p>
              </div>
              <div>
                <p className="font-medium text-black">Context Length</p>
                <p className="text-black">16K tokens (~12,000 words)</p>
              </div>
              <div>
                <p className="font-medium text-black">Response Time</p>
                <p className="text-black">3-8 seconds average</p>
              </div>
              <div>
                <p className="font-medium text-black">Streaming</p>
                <p className="text-black">Yes (real-time)</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1">
              <Badge variant="outline" className="text-xs">Web Search</Badge>
              <Badge variant="outline" className="text-xs">Citations</Badge>
              <Badge variant="outline" className="text-xs">Real-time Data</Badge>
            </div>
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-black">Microsoft Copilot API</h4>
              <Badge className="bg-indigo-100 text-indigo-700">Enterprise</Badge>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-medium text-black">Rate Limits</p>
                <p className="text-black">8,000 requests/min</p>
              </div>
              <div>
                <p className="font-medium text-black">Context Length</p>
                <p className="text-black">128K tokens (~96,000 words)</p>
              </div>
              <div>
                <p className="font-medium text-black">Response Time</p>
                <p className="text-black">2-4 seconds average</p>
              </div>
              <div>
                <p className="font-medium text-black">Streaming</p>
                <p className="text-black">Yes (real-time)</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1">
              <Badge variant="outline" className="text-xs">Office Integration</Badge>
              <Badge variant="outline" className="text-xs">Enterprise Security</Badge>
              <Badge variant="outline" className="text-xs">Azure Integration</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
