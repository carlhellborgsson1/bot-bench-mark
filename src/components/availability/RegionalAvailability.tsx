
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

export const RegionalAvailability = () => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-black">
          <MapPin className="h-5 w-5 text-red-500" />
          Regional Availability
        </CardTitle>
        <CardDescription className="text-black">Geographic access and restrictions by country/region</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-black">GPT-5 / ChatGPT</h4>
              <Badge className="bg-green-100 text-green-700">Global</Badge>
            </div>
            <p className="text-sm text-black mb-2">Available in 160+ countries with full feature access</p>
            <div className="flex flex-wrap gap-1">
              <Badge variant="outline" className="text-xs">US</Badge>
              <Badge variant="outline" className="text-xs">EU</Badge>
              <Badge variant="outline" className="text-xs">Asia</Badge>
              <Badge variant="outline" className="text-xs">Australia</Badge>
              <Badge variant="outline" className="text-xs">Africa</Badge>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-black">Claude 4.5</h4>
              <Badge className="bg-green-100 text-green-700">Expanding</Badge>
            </div>
            <p className="text-sm text-black mb-2">Available globally, gradually expanding to all regions</p>
            <div className="flex flex-wrap gap-1">
              <Badge variant="outline" className="text-xs">US</Badge>
              <Badge variant="outline" className="text-xs">UK</Badge>
              <Badge variant="outline" className="text-xs">Canada</Badge>
              <Badge variant="outline" className="text-xs">EU</Badge>
              <Badge variant="outline" className="text-xs">Australia</Badge>
            </div>
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-black">Gemini 2.5</h4>
              <Badge className="bg-green-100 text-green-700">Global</Badge>
            </div>
            <p className="text-sm text-black mb-2">Rapidly expanding globally with Google integration</p>
            <div className="flex flex-wrap gap-1">
              <Badge variant="outline" className="text-xs">US</Badge>
              <Badge variant="outline" className="text-xs">EU</Badge>
              <Badge variant="outline" className="text-xs">Japan</Badge>
              <Badge variant="outline" className="text-xs">India</Badge>
              <Badge variant="outline" className="text-xs">Latin America</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
