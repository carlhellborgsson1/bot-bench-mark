
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

export const SDKIntegrationSupport = () => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-black">
          <Layers className="h-5 w-5 text-purple-600" />
          SDK & Integration Support
        </CardTitle>
        <CardDescription className="text-black">Development tools and framework support</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-3 text-black">Official SDKs</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="font-medium text-sm text-black">Python</p>
                <p className="text-xs text-black">All platforms</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="font-medium text-sm text-black">Node.js</p>
                <p className="text-xs text-black">All platforms</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <p className="font-medium text-sm text-black">JavaScript</p>
                <p className="text-xs text-black">OpenAI, Anthropic</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="font-medium text-sm text-black">Go</p>
                <p className="text-xs text-black">Community</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-black">Framework Integrations</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm text-black">LangChain</span>
                <Badge variant="outline" className="text-xs">All</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm text-black">LlamaIndex</span>
                <Badge variant="outline" className="text-xs">Most</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm text-black">Vercel AI SDK</span>
                <Badge variant="outline" className="text-xs">OpenAI</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm text-black">Haystack</span>
                <Badge variant="outline" className="text-xs">OpenAI</Badge>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
