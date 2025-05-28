
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Scale, AlertCircle, CheckCircle } from "lucide-react";

const LicenseModels = () => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500/10 to-orange-500/10">
            <FileText className="h-6 w-6 text-amber-600" />
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
              <Scale className="h-5 w-5 text-blue-600" />
              Commercial Usage Rights
            </CardTitle>
            <CardDescription>Rights and restrictions for business use</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">OpenAI (GPT-4)</h4>
                  <Badge className="bg-green-100 text-green-700">Commercial OK</Badge>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Commercial applications allowed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Revenue generation permitted</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                    <span>Output attribution not required</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                    <span>Cannot train competing models</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">Anthropic (Claude)</h4>
                  <Badge className="bg-green-100 text-green-700">Commercial OK</Badge>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Business use permitted</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Integration in products allowed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                    <span>Usage monitoring applies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                    <span>Constitutional AI principles</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">Google (Gemini)</h4>
                  <Badge className="bg-green-100 text-green-700">Commercial OK</Badge>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Commercial deployment allowed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Google Cloud integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                    <span>Data usage agreements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
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
              <AlertCircle className="h-5 w-5 text-red-600" />
              Usage Restrictions
            </CardTitle>
            <CardDescription>Important limitations and prohibitions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">Prohibited Uses</h4>
                <ul className="space-y-1 text-sm text-red-700">
                  <li>• Illegal activities or fraud</li>
                  <li>• Harassment or hate speech</li>
                  <li>• Misinformation generation</li>
                  <li>• Adult content creation</li>
                  <li>• Privacy violations</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">Restricted Uses</h4>
                <ul className="space-y-1 text-sm text-yellow-700">
                  <li>• Medical diagnosis (without supervision)</li>
                  <li>• Legal advice provision</li>
                  <li>• Financial recommendations</li>
                  <li>• Critical safety systems</li>
                  <li>• Autonomous decision making</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Data Restrictions</h4>
                <ul className="space-y-1 text-sm text-blue-700">
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
                <p className="font-medium text-sm">Custom Agreements</p>
                <p className="text-xs text-muted-foreground">Available for large deployments</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm">Volume Discounts</p>
                <p className="text-xs text-muted-foreground">Based on usage commitments</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm">SLA Guarantees</p>
                <p className="text-xs text-muted-foreground">Uptime and support commitments</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="font-medium text-sm">Indemnification</p>
                <p className="text-xs text-muted-foreground">IP protection clauses</p>
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
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="font-medium text-green-900 text-sm">Your Input Data</p>
                <p className="text-xs text-green-700">You retain full ownership</p>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="font-medium text-blue-900 text-sm">Generated Output</p>
                <p className="text-xs text-blue-700">Typically assigned to you</p>
              </div>
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="font-medium text-yellow-900 text-sm">Model Weights</p>
                <p className="text-xs text-yellow-700">Remain with AI provider</p>
              </div>
              <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="font-medium text-gray-900 text-sm">Usage Analytics</p>
                <p className="text-xs text-gray-700">Shared or provider-owned</p>
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
                <span className="text-sm">GDPR</span>
                <Badge className="bg-green-100 text-green-700">All</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">CCPA</span>
                <Badge className="bg-green-100 text-green-700">All</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">SOC 2</span>
                <Badge className="bg-green-100 text-green-700">Most</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">HIPAA</span>
                <Badge className="bg-yellow-100 text-yellow-700">Enterprise</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">ISO 27001</span>
                <Badge className="bg-green-100 text-green-700">Major</Badge>
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
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Most Permissive</h4>
              <p className="text-blue-700 mb-2">OpenAI GPT-4</p>
              <p className="text-sm text-blue-600">
                Flexible commercial use with minimal restrictions on output usage
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Most Ethical</h4>
              <p className="text-purple-700 mb-2">Anthropic Claude</p>
              <p className="text-sm text-purple-600">
                Strong ethical guidelines and constitutional AI principles
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Enterprise Focus</h4>
              <p className="text-green-700 mb-2">Google Gemini</p>
              <p className="text-sm text-green-600">
                Strong enterprise integration and cloud service alignment
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Open Alternative</h4>
              <p className="text-orange-700 mb-2">Open Source Models</p>
              <p className="text-sm text-orange-600">
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
