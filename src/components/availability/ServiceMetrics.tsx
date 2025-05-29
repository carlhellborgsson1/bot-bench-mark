
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Wifi } from "lucide-react";

export const ServiceMetrics = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <Clock className="h-5 w-5 text-orange-500" />
            Uptime & Reliability
          </CardTitle>
          <CardDescription className="text-black">Service availability metrics</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-black">GPT-4</span>
              <Badge className="bg-green-100 text-green-700">99.9%</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-black">Claude 3</span>
              <Badge className="bg-green-100 text-green-700">99.7%</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-black">Gemini Pro</span>
              <Badge className="bg-green-100 text-green-700">99.5%</Badge>
            </div>
          </div>
          <p className="text-xs text-black">
            Based on 30-day rolling average
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <Wifi className="h-5 w-5 text-green-500" />
            Access Methods
          </CardTitle>
          <CardDescription className="text-black">How to use each platform</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-black">Web Interface</span>
              <Badge variant="outline">All</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-black">Mobile Apps</span>
              <Badge variant="outline">Most</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-black">API Access</span>
              <Badge variant="outline">All</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-black">Desktop Apps</span>
              <Badge variant="outline">Limited</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-black">Mobile Availability</CardTitle>
          <CardDescription className="text-black">iOS and Android apps</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 border rounded-lg">
              <p className="font-medium text-sm text-black">ChatGPT</p>
              <div className="flex gap-2 mt-1">
                <Badge variant="outline" className="text-xs">iOS</Badge>
                <Badge variant="outline" className="text-xs">Android</Badge>
              </div>
            </div>
            <div className="p-3 border rounded-lg">
              <p className="font-medium text-sm text-black">Claude</p>
              <div className="flex gap-2 mt-1">
                <Badge variant="outline" className="text-xs">iOS</Badge>
                <Badge variant="outline" className="text-xs">Android</Badge>
              </div>
            </div>
            <div className="p-3 border rounded-lg">
              <p className="font-medium text-sm text-black">Gemini</p>
              <div className="flex gap-2 mt-1">
                <Badge variant="outline" className="text-xs">iOS</Badge>
                <Badge variant="outline" className="text-xs">Android</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
