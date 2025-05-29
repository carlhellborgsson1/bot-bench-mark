
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

export const APITechnicalDetails = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <Zap className="h-5 w-5 text-yellow-600" />
            Performance Metrics
          </CardTitle>
          <CardDescription className="text-black">API speed and reliability</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-black">OpenAI GPT-4</span>
              <div className="text-right">
                <p className="text-sm font-medium text-black">2.3s</p>
                <p className="text-xs text-black">Avg latency</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-black">Anthropic Claude</span>
              <div className="text-right">
                <p className="text-sm font-medium text-black">3.1s</p>
                <p className="text-xs text-black">Avg latency</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-black">Google Gemini</span>
              <div className="text-right">
                <p className="text-sm font-medium text-black">1.8s</p>
                <p className="text-xs text-black">Avg latency</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-black">Authentication</CardTitle>
          <CardDescription className="text-black">Security and access control</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 border rounded-lg">
              <p className="font-medium text-sm text-black">API Keys</p>
              <p className="text-xs text-black">Standard across all platforms</p>
            </div>
            <div className="p-3 border rounded-lg">
              <p className="font-medium text-sm text-black">OAuth 2.0</p>
              <p className="text-xs text-black">OpenAI, Google</p>
            </div>
            <div className="p-3 border rounded-lg">
              <p className="font-medium text-sm text-black">Organization Keys</p>
              <p className="text-xs text-black">Enterprise features</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-black">Error Handling</CardTitle>
          <CardDescription className="text-black">API reliability features</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-black">Rate Limiting</span>
              <Badge variant="outline" className="text-xs">All</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-black">Retry Logic</span>
              <Badge variant="outline" className="text-xs">SDK</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-black">Status Codes</span>
              <Badge variant="outline" className="text-xs">Standard</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-black">Webhooks</span>
              <Badge variant="outline" className="text-xs">Limited</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
