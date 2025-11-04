
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Scale, AlertCircle, CheckCircle } from "lucide-react";

const LicenseModels = () => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">License Models</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Understanding the legal frameworks, usage rights, and licensing terms for different AI chatbot platforms 
          to ensure compliant deployment in your organization.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" />
              Commercial Usage Rights
            </CardTitle>
            <CardDescription>Rights and restrictions for business use</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-black">OpenAI (GPT-4)</h4>
                  <Badge className="bg-primary/10 text-primary">Commercial OK</Badge>
                </div>
                <ul className="space-y-2 text-sm text-black">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Commercial applications allowed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Revenue generation permitted</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-primary" />
                    <span>Output attribution not required</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-primary" />
                    <span>Cannot train competing models</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-black">Anthropic (Claude)</h4>
                  <Badge className="bg-primary/10 text-primary">Commercial OK</Badge>
                </div>
                <ul className="space-y-2 text-sm text-black">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Business use permitted</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Integration in products allowed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-primary" />
                    <span>Usage monitoring applies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-primary" />
                    <span>Constitutional AI principles</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-black">Google (Gemini)</h4>
                  <Badge className="bg-primary/10 text-primary">Commercial OK</Badge>
                </div>
                <ul className="space-y-2 text-sm text-black">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Commercial deployment allowed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Google Cloud integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-primary" />
                    <span>Data usage agreements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-primary" />
                    <span>Regional compliance required</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              Usage Restrictions
            </CardTitle>
            <CardDescription>Important limitations and prohibitions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="p-4 bg-white border rounded-lg">
                <h4 className="font-semibold text-black mb-2">Prohibited Uses</h4>
                <ul className="space-y-1 text-sm text-black">
                  <li>• Illegal activities or fraud</li>
                  <li>• Harassment or hate speech</li>
                  <li>• Misinformation generation</li>
                  <li>• Adult content creation</li>
                  <li>• Privacy violations</li>
                </ul>
              </div>

              <div className="p-4 bg-white border rounded-lg">
                <h4 className="font-semibold text-black mb-2">Restricted Uses</h4>
                <ul className="space-y-1 text-sm text-black">
                  <li>• Medical diagnosis (without supervision)</li>
                  <li>• Legal advice provision</li>
                  <li>• Financial recommendations</li>
                  <li>• Critical safety systems</li>
                  <li>• Autonomous decision making</li>
                </ul>
              </div>

              <div className="p-4 bg-white border rounded-lg">
                <h4 className="font-semibold text-black mb-2">Data Restrictions</h4>
                <ul className="space-y-1 text-sm text-black">
                  <li>• Cannot use output to train models</li>
                  <li>• Personal data handling limits</li>
                  <li>• Reverse engineering prohibited</li>
                  <li>• Rate limiting enforcement</li>
                  <li>• API key sharing restrictions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Enterprise Licensing</CardTitle>
            <CardDescription>Business and organizational terms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm text-black">Custom Agreements</p>
                <p className="text-xs text-black">Available for large deployments</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm text-black">Volume Discounts</p>
                <p className="text-xs text-black">Based on usage commitments</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm text-black">SLA Guarantees</p>
                <p className="text-xs text-black">Uptime and support commitments</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm text-black">Indemnification</p>
                <p className="text-xs text-black">IP protection clauses</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Ownership</CardTitle>
            <CardDescription>Who owns what data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-white border rounded-lg">
                <p className="font-medium text-black text-sm">Your Input Data</p>
                <p className="text-xs text-black">You retain full ownership</p>
              </div>
              <div className="p-3 bg-white border rounded-lg">
                <p className="font-medium text-black text-sm">Generated Output</p>
                <p className="text-xs text-black">Typically assigned to you</p>
              </div>
              <div className="p-3 bg-white border rounded-lg">
                <p className="font-medium text-black text-sm">Model Weights</p>
                <p className="text-xs text-black">Remain with AI provider</p>
              </div>
              <div className="p-3 bg-white border rounded-lg">
                <p className="font-medium text-black text-sm">Usage Analytics</p>
                <p className="text-xs text-black">Shared or provider-owned</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compliance Standards</CardTitle>
            <CardDescription>Regulatory adherence</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-black">GDPR</span>
                <Badge className="bg-primary/10 text-primary">All</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-black">CCPA</span>
                <Badge className="bg-primary/10 text-primary">All</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-black">SOC 2</span>
                <Badge className="bg-primary/10 text-primary">Most</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-black">HIPAA</span>
                <Badge className="bg-muted text-black">Enterprise</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-black">ISO 27001</span>
                <Badge className="bg-primary/10 text-primary">Major</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>License Comparison Summary</CardTitle>
          <CardDescription>Key differences in licensing terms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-white border rounded-lg">
              <h4 className="font-semibold text-black mb-2">Most Permissive</h4>
              <p className="text-black mb-2">OpenAI GPT-4</p>
              <p className="text-sm text-black">
                Flexible commercial use with minimal restrictions on output usage
              </p>
            </div>
            <div className="p-4 bg-white border rounded-lg">
              <h4 className="font-semibold text-black mb-2">Most Ethical</h4>
              <p className="text-black mb-2">Anthropic Claude</p>
              <p className="text-sm text-black">
                Strong ethical guidelines and constitutional AI principles
              </p>
            </div>
            <div className="p-4 bg-white border rounded-lg">
              <h4 className="font-semibold text-black mb-2">Enterprise Focus</h4>
              <p className="text-black mb-2">Google Gemini</p>
              <p className="text-sm text-black">
                Strong enterprise integration and cloud service alignment
              </p>
            </div>
            <div className="p-4 bg-white border rounded-lg">
              <h4 className="font-semibold text-black mb-2">Open Alternative</h4>
              <p className="text-black mb-2">Open Source Models</p>
              <p className="text-sm text-black">
                Consider Llama, Mistral for maximum license flexibility
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LicenseModels;
