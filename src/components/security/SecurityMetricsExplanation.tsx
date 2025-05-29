
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Lock, Eye, FileCheck, Shield } from "lucide-react";

export const SecurityMetricsExplanation = () => {
  return (
    <Card className="mb-8 bg-green-50 border-green-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-black">
          <Info className="h-5 w-5" />
          Understanding Security Metrics
        </CardTitle>
        <CardDescription className="text-black">
          Here's what each security metric means for your data protection:
        </CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-3 bg-white rounded-lg border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <Lock className="h-4 w-4 text-green-600" />
            <h4 className="font-semibold text-black">Encryption</h4>
          </div>
          <p className="text-sm text-black">Type of encryption standard used to protect data in transit and at rest</p>
        </div>
        <div className="p-3 bg-white rounded-lg border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <Eye className="h-4 w-4 text-green-600" />
            <h4 className="font-semibold text-black">Data Retention</h4>
          </div>
          <p className="text-sm text-black">How long your conversation data is stored on the provider's servers</p>
        </div>
        <div className="p-3 bg-white rounded-lg border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <FileCheck className="h-4 w-4 text-green-600" />
            <h4 className="font-semibold text-black">Compliance</h4>
          </div>
          <p className="text-sm text-black">Industry certifications and regulatory standards the platform meets</p>
        </div>
        <div className="p-3 bg-white rounded-lg border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="h-4 w-4 text-green-600" />
            <h4 className="font-semibold text-black">Privacy Level</h4>
          </div>
          <p className="text-sm text-black">Overall privacy protection rating based on data practices and policies</p>
        </div>
      </CardContent>
    </Card>
  );
};
