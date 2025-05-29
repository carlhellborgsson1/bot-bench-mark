
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const RegionalConsiderations = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-black">Regional Considerations</CardTitle>
        <CardDescription className="text-black">Important factors for different regions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Europe (GDPR)</h4>
            <p className="text-sm text-blue-700 mb-2">
              All major platforms comply with GDPR requirements
            </p>
            <p className="text-xs text-blue-600">
              Data processing agreements available for enterprise users
            </p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <h4 className="font-semibold text-red-900 mb-2">China</h4>
            <p className="text-sm text-red-700 mb-2">
              Limited access to international AI services
            </p>
            <p className="text-xs text-red-600">
              Local alternatives and VPN considerations required
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">Americas</h4>
            <p className="text-sm text-green-700 mb-2">
              Full access to all platforms and features
            </p>
            <p className="text-xs text-green-600">
              Priority access to new features and models
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
