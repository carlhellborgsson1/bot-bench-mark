
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

const SecurityCompliance = () => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-green-600" />
          Enterprise Security & Compliance
        </CardTitle>
        <CardDescription>Security features for business environments</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-3">Security Features</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Single Sign-On (SSO)</span>
                <Badge className="bg-green-100 text-green-700">All Enterprise</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Multi-Factor Authentication</span>
                <Badge className="bg-green-100 text-green-700">Standard</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Data Loss Prevention</span>
                <Badge className="bg-blue-100 text-blue-700">Premium</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Audit Logging</span>
                <Badge className="bg-green-100 text-green-700">All Enterprise</Badge>
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-3">Compliance Standards</h4>
            <div className="grid grid-cols-2 gap-2">
              <Badge variant="outline" className="justify-center">SOC 2 Type II</Badge>
              <Badge variant="outline" className="justify-center">ISO 27001</Badge>
              <Badge variant="outline" className="justify-center">GDPR</Badge>
              <Badge variant="outline" className="justify-center">HIPAA*</Badge>
              <Badge variant="outline" className="justify-center">FedRAMP*</Badge>
              <Badge variant="outline" className="justify-center">PCI DSS*</Badge>
            </div>
            <p className="text-xs text-blue-600 mt-2">*Available with enterprise agreements</p>
          </div>

          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-3">Data Protection</h4>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>• End-to-end encryption in transit</li>
              <li>• Encryption at rest (AES-256)</li>
              <li>• Regional data residency options</li>
              <li>• Data retention controls</li>
              <li>• Right to be forgotten compliance</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityCompliance;
