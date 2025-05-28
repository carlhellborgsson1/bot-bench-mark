
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, FileCheck, AlertTriangle, Info } from "lucide-react";

const Security = () => {
  const securityData = [
    {
      chatbot: "GPT-4",
      encryption: "AES-256",
      dataRetention: "30 days",
      compliance: ["SOC 2", "GDPR", "CCPA"],
      privacy: "High",
      score: 9.1
    },
    {
      chatbot: "Claude 3",
      encryption: "AES-256",
      dataRetention: "No storage",
      compliance: ["SOC 2", "GDPR"],
      privacy: "Very High",
      score: 9.5
    },
    {
      chatbot: "Gemini Pro",
      encryption: "AES-256",
      dataRetention: "18 months",
      compliance: ["SOC 2", "GDPR"],
      privacy: "Medium",
      score: 8.2
    },
    {
      chatbot: "ChatGPT-3.5",
      encryption: "AES-256",
      dataRetention: "30 days",
      compliance: ["SOC 2", "GDPR"],
      privacy: "High",
      score: 8.8
    }
  ];

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/10 to-blue-500/10">
            <Shield className="h-6 w-6 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold">Security Assessment</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Comprehensive security analysis covering encryption, data handling, compliance standards, 
          and privacy protection measures across different AI platforms.
        </p>
      </div>

      {/* Security Metrics Explanation */}
      <Card className="mb-8 bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-900">
            <Info className="h-5 w-5" />
            Understanding Security Metrics
          </CardTitle>
          <CardDescription className="text-green-700">
            Here's what each security metric means for your data protection:
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-3 bg-white rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="h-4 w-4 text-green-600" />
              <h4 className="font-semibold text-green-900">Encryption</h4>
            </div>
            <p className="text-sm text-green-700">Type of encryption standard used to protect data in transit and at rest</p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="h-4 w-4 text-green-600" />
              <h4 className="font-semibold text-green-900">Data Retention</h4>
            </div>
            <p className="text-sm text-green-700">How long your conversation data is stored on the provider's servers</p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <FileCheck className="h-4 w-4 text-green-600" />
              <h4 className="font-semibold text-green-900">Compliance</h4>
            </div>
            <p className="text-sm text-green-700">Industry certifications and regulatory standards the platform meets</p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-green-600" />
              <h4 className="font-semibold text-green-900">Privacy Level</h4>
            </div>
            <p className="text-sm text-green-700">Overall privacy protection rating based on data practices and policies</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 mb-8">
        {securityData.map((data, index) => (
          <Card key={data.chatbot} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CardTitle className="text-xl">{data.chatbot}</CardTitle>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Security Score: {data.score}/10
                  </Badge>
                </div>
                <Badge 
                  variant={data.privacy === "Very High" ? "default" : data.privacy === "High" ? "secondary" : "outline"}
                  className={data.privacy === "Very High" ? "bg-green-500 text-white" : ""}
                >
                  {data.privacy} Privacy
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="flex items-center gap-3">
                  <Lock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">{data.encryption}</p>
                    <p className="text-sm text-muted-foreground">Encryption</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Eye className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">{data.dataRetention}</p>
                    <p className="text-sm text-muted-foreground">Data Retention</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="flex flex-wrap gap-1">
                      {data.compliance.map((cert) => (
                        <Badge key={cert} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">Compliance</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">{data.privacy}</p>
                    <p className="text-sm text-muted-foreground">Privacy Level</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              Security Features Comparison
            </CardTitle>
            <CardDescription>Key security differentiators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="font-semibold text-green-900">Best Privacy Protection</p>
              <p className="text-green-700">Claude 3 - No data storage policy</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="font-semibold text-blue-900">Most Compliant</p>
              <p className="text-blue-700">GPT-4 - Comprehensive certification coverage</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="font-semibold text-yellow-900">Longest Retention</p>
              <p className="text-yellow-700">Gemini Pro - 18 months data storage</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              Security Considerations
            </CardTitle>
            <CardDescription>Important factors to evaluate</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Data Location</h4>
              <p className="text-muted-foreground">Consider where your data is processed and stored</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Access Controls</h4>
              <p className="text-muted-foreground">Review user authentication and authorization methods</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Audit Logs</h4>
              <p className="text-muted-foreground">Ensure comprehensive logging for compliance</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Third-party Integrations</h4>
              <p className="text-muted-foreground">Assess security of connected services</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Security;
