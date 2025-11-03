
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, Eye, FileCheck, Shield } from "lucide-react";

const securityData = [
  {
    chatbot: "GPT-5",
    encryption: "AES-256",
    dataRetention: "30 days",
    compliance: ["SOC 2 Type II", "GDPR", "CCPA", "ISO 27001"],
    privacy: "High",
    score: 9.3
  },
  {
    chatbot: "Claude 4.5",
    encryption: "AES-256",
    dataRetention: "No training storage",
    compliance: ["SOC 2 Type II", "GDPR", "HIPAA"],
    privacy: "Very High",
    score: 9.7
  },
  {
    chatbot: "Gemini 2.5",
    encryption: "AES-256",
    dataRetention: "18 months",
    compliance: ["SOC 2", "GDPR", "ISO 27001"],
    privacy: "Medium",
    score: 8.5
  },
  {
    chatbot: "GPT-5 mini",
    encryption: "AES-256",
    dataRetention: "30 days",
    compliance: ["SOC 2", "GDPR", "CCPA"],
    privacy: "High",
    score: 9.0
  },
  {
    chatbot: "Perplexity AI",
    encryption: "AES-256",
    dataRetention: "90 days",
    compliance: ["GDPR", "CCPA"],
    privacy: "High",
    score: 8.6
  },
  {
    chatbot: "Microsoft Copilot",
    encryption: "AES-256",
    dataRetention: "Variable",
    compliance: ["SOC 2", "GDPR", "CCPA", "HIPAA", "ISO 27001"],
    privacy: "High",
    score: 9.2
  },
  {
    chatbot: "Llama 3.3",
    encryption: "Depends on host",
    dataRetention: "Variable",
    compliance: ["Varies by deployment"],
    privacy: "Variable",
    score: 7.8
  },
  {
    chatbot: "Mistral Large 2",
    encryption: "AES-256",
    dataRetention: "7 days",
    compliance: ["GDPR", "EU AI Act Ready"],
    privacy: "Very High",
    score: 8.8
  }
];

export const SecurityDataCards = () => {
  return (
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
  );
};
