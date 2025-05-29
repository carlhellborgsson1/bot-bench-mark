
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, MapPin, Globe, Clock, Wifi } from "lucide-react";

export const AvailabilityMetricsExplanation = () => {
  return (
    <Card className="mb-8 bg-blue-50 border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-black">
          <Info className="h-5 w-5" />
          Understanding Availability Metrics
        </CardTitle>
        <CardDescription className="text-black">
          Here's what each availability metric means for global users:
        </CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-3 bg-white rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-4 w-4 text-blue-600" />
            <h4 className="font-semibold text-black">Regional Access</h4>
          </div>
          <p className="text-sm text-black">Countries and regions where the service is officially available and supported</p>
        </div>
        <div className="p-3 bg-white rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="h-4 w-4 text-blue-600" />
            <h4 className="font-semibold text-black">Language Count</h4>
          </div>
          <p className="text-sm text-black">Number of human languages the AI can understand and respond in effectively</p>
        </div>
        <div className="p-3 bg-white rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-4 w-4 text-blue-600" />
            <h4 className="font-semibold text-black">Uptime %</h4>
          </div>
          <p className="text-sm text-black">Percentage of time the service is operational and accessible over a 30-day period</p>
        </div>
        <div className="p-3 bg-white rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Wifi className="h-4 w-4 text-blue-600" />
            <h4 className="font-semibold text-black">Access Methods</h4>
          </div>
          <p className="text-sm text-black">Different ways to use the service (web browser, mobile app, API, desktop app)</p>
        </div>
      </CardContent>
    </Card>
  );
};
