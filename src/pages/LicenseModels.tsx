
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
          <h1 className="text-3xl font-bold text-white">License Models</h1>
        </div>
        <p className="text-lg text-white/80 max-w-3xl">
          Understanding the legal frameworks, usage rights, and licensing terms for different AI chatbot platforms 
          to ensure compliant deployment in your organization.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-all duration-300 bg-transparent border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Scale className="h-5 w-5 text-primary" />
              Commercial Usage Rights
            </CardTitle>
            <CardDescription className="text-white/80">Rights and restrictions for business use</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="p-4 border rounded-lg bg-transparent border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-white">OpenAI (GPT-4)</h4>
                  <Badge className="bg-primary/10 text-white">Commercial OK</Badge>
                </div>
                <ul className="space-y-2 text-sm text-white">
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

              <div className="p-4 border rounded-lg bg-transparent border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-white">Anthropic (Claude)</h4>
                  <Badge className="bg-primary/10 text-white">Commercial OK</Badge>
                </div>
                <ul className="space-y-2 text-sm text-white">
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

              <div className="p-4 border rounded-lg bg-transparent border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-white">Google (Gemini)</h4>
                  <Badge className="bg-primary/10 text-white">Commercial OK</Badge>
                </div>
                <ul className="space-y-2 text-sm text-white">
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

        <Card className="hover:shadow-lg transition-all duration-300 bg-transparent border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <AlertCircle className="h-5 w-5 text-destructive" />
              Usage Restrictions
            </CardTitle>
            <CardDescription className="text-white/80">Important limitations and prohibitions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="p-4 bg-transparent border rounded-lg border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                <h4 className="font-semibold text-white mb-2">Prohibited Uses</h4>
                <ul className="space-y-1 text-sm text-white">
                  <li>• Illegal activities or fraud</li>
                  <li>• Harassment or hate speech</li>
                  <li>• Misinformation generation</li>
                  <li>• Adult content creation</li>
                  <li>• Privacy violations</li>
                </ul>
              </div>

              <div className="p-4 bg-transparent border rounded-lg border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                <h4 className="font-semibold text-white mb-2">Restricted Uses</h4>
                <ul className="space-y-1 text-sm text-white">
                  <li>• Medical diagnosis (without supervision)</li>
                  <li>• Legal advice provision</li>
                  <li>• Financial recommendations</li>
                  <li>• Critical safety systems</li>
                  <li>• Autonomous decision making</li>
                </ul>
              </div>

              <div className="p-4 bg-transparent border rounded-lg border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                <h4 className="font-semibold text-white mb-2">Data Restrictions</h4>
                <ul className="space-y-1 text-sm text-white">
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
        <Card className="bg-transparent border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          <CardHeader>
            <CardTitle className="text-white">Enterprise Licensing</CardTitle>
            <CardDescription className="text-white/80">Business and organizational terms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 border rounded-lg bg-transparent border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                <p className="font-medium text-sm text-white">Custom Agreements</p>
                <p className="text-xs text-white/80">Available for large deployments</p>
              </div>
              <div className="p-3 border rounded-lg bg-transparent border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                <p className="font-medium text-sm text-white">Volume Discounts</p>
                <p className="text-xs text-white/80">Based on usage commitments</p>
              </div>
              <div className="p-3 border rounded-lg bg-transparent border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                <p className="font-medium text-sm text-white">SLA Guarantees</p>
                <p className="text-xs text-white/80">Uptime and support commitments</p>
              </div>
              <div className="p-3 border rounded-lg bg-transparent border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                <p className="font-medium text-sm text-white">Indemnification</p>
                <p className="text-xs text-white/80">IP protection clauses</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-transparent border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          <CardHeader>
            <CardTitle className="text-white">Data Ownership</CardTitle>
            <CardDescription className="text-white/80">Who owns what data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-transparent border rounded-lg border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                <p className="font-medium text-white text-sm">Your Input Data</p>
                <p className="text-xs text-white/80">You retain full ownership</p>
              </div>
              <div className="p-3 bg-transparent border rounded-lg border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                <p className="font-medium text-white text-sm">Generated Output</p>
                <p className="text-xs text-white/80">Typically assigned to you</p>
              </div>
              <div className="p-3 bg-transparent border rounded-lg border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                <p className="font-medium text-white text-sm">Model Weights</p>
                <p className="text-xs text-white/80">Remain with AI provider</p>
              </div>
              <div className="p-3 bg-transparent border rounded-lg border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                <p className="font-medium text-white text-sm">Usage Analytics</p>
                <p className="text-xs text-white/80">Shared or provider-owned</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-transparent border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          <CardHeader>
            <CardTitle className="text-white">Compliance Standards</CardTitle>
            <CardDescription className="text-white/80">Regulatory adherence</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">GDPR</span>
                <Badge className="bg-primary/10 text-white">All</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">CCPA</span>
                <Badge className="bg-primary/10 text-white">All</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">SOC 2</span>
                <Badge className="bg-primary/10 text-white">Most</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">HIPAA</span>
                <Badge className="bg-muted text-white">Enterprise</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">ISO 27001</span>
                <Badge className="bg-primary/10 text-white">Major</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-transparent border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        <CardHeader>
          <CardTitle className="text-white">License Comparison Summary</CardTitle>
          <CardDescription className="text-white/80">Key differences in licensing terms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-transparent border rounded-lg border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              <h4 className="font-semibold text-white mb-2">Most Permissive</h4>
              <p className="text-white mb-2">OpenAI GPT-4</p>
              <p className="text-sm text-white/80">
                Flexible commercial use with minimal restrictions on output usage
              </p>
            </div>
            <div className="p-4 bg-transparent border rounded-lg border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              <h4 className="font-semibold text-white mb-2">Most Ethical</h4>
              <p className="text-white mb-2">Anthropic Claude</p>
              <p className="text-sm text-white/80">
                Strong ethical guidelines and constitutional AI principles
              </p>
            </div>
            <div className="p-4 bg-transparent border rounded-lg border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              <h4 className="font-semibold text-white mb-2">Enterprise Focus</h4>
              <p className="text-white mb-2">Google Gemini</p>
              <p className="text-sm text-white/80">
                Strong enterprise integration and cloud service alignment
              </p>
            </div>
            <div className="p-4 bg-transparent border rounded-lg border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              <h4 className="font-semibold text-white mb-2">Open Alternative</h4>
              <p className="text-white mb-2">Open Source Models</p>
              <p className="text-sm text-white/80">
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
