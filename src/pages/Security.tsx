
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
          <h1 className="text-3xl font-bold text-black">Security Assessment</h1>
        </div>
        <p className="text-lg text-black max-w-3xl">
          Comprehensive security analysis covering encryption, data handling, compliance standards, 
          and privacy protection measures across different AI platforms.
        </p>
      </div>

      {/* Security Metrics Explanation */}
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

      <div className="grid gap-6 mb-8">
        {securityData.map((data, index) => (
          <Card key={data.chatbot} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CardTitle className="text-xl text-black">{data.chatbot}</CardTitle>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Security Score: {data.score}/10
                  </Badge>
                </div>
                <Badge 
                  variant={data.privacy === "Very High" ? "default" : data.privacy === "High" ? "secondary" : "outline"}
                  className={data.privacy === "Very High" ? "bg-green-500 text-white" : "text-black"}
                >
                  {data.privacy} Privacy
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="flex items-center gap-3">
                  <Lock className="h-5 w-5 text-black" />
                  <div>
                    <p className="font-semibold text-black">{data.encryption}</p>
                    <p className="text-sm text-black">Encryption</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Eye className="h-5 w-5 text-black" />
                  <div>
                    <p className="font-semibold text-black">{data.dataRetention}</p>
                    <p className="text-sm text-black">Data Retention</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-black" />
                  <div>
                    <div className="flex flex-wrap gap-1">
                      {data.compliance.map((cert) => (
                        <Badge key={cert} variant="outline" className="text-xs text-black">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-black">Compliance</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-black" />
                  <div>
                    <p className="font-semibold text-black">{data.privacy}</p>
                    <p className="text-sm text-black">Privacy Level</p>
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
            <CardTitle className="flex items-center gap-2 text-black">
              <Shield className="h-5 w-5 text-green-600" />
              Security Features Comparison
            </CardTitle>
            <CardDescription className="text-black">Key security differentiators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="font-semibold text-black">Best Privacy Protection</p>
              <p className="text-black">Claude 3 - No data storage policy</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="font-semibold text-black">Most Compliant</p>
              <p className="text-black">GPT-4 - Comprehensive certification coverage</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="font-semibold text-black">Longest Retention</p>
              <p className="text-black">Gemini Pro - 18 months data storage</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-black">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              Security Considerations
            </CardTitle>
            <CardDescription className="text-black">Important factors to evaluate</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 text-black">Data Location</h4>
              <p className="text-black">Consider where your data is processed and stored</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-black">Access Controls</h4>
              <p className="text-black">Review user authentication and authorization methods</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-black">Audit Logs</h4>
              <p className="text-black">Ensure comprehensive logging for compliance</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-black">Third-party Integrations</h4>
              <p className="text-black">Assess security of connected services</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Security;
