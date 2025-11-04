
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
          <h1 className="text-3xl font-bold text-foreground">License Models</h1>
        </div>
        <p className="text-lg text-foreground/80 max-w-3xl">
          Understanding the legal frameworks, usage rights, and licensing terms for different AI chatbot platforms 
          to ensure compliant deployment in your organization.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-2 border-border shadow-[0_0_15px_rgba(59,130,246,0.1)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Scale className="h-5 w-5 text-primary" />
              Commercial Usage Rights
            </CardTitle>
            <CardDescription className="text-muted-foreground">Rights and restrictions for business use</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="p-4 border-2 rounded-lg bg-transparent border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
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

              <div className="p-4 border-2 rounded-lg bg-transparent border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
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

              <div className="p-4 border-2 rounded-lg bg-transparent border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
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

        <Card className="hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-2 border-border shadow-[0_0_15px_rgba(59,130,246,0.1)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <AlertCircle className="h-5 w-5 text-destructive" />
              Usage Restrictions
            </CardTitle>
            <CardDescription className="text-muted-foreground">Important limitations and prohibitions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="p-4 bg-card/50 backdrop-blur-sm border-2 rounded-lg border-border shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                <h4 className="font-semibold text-foreground mb-2">Prohibited Uses</h4>
                <ul className="space-y-1 text-sm text-foreground">
                  <li>• Illegal activities or fraud</li>
                  <li>• Harassment or hate speech</li>
                  <li>• Misinformation generation</li>
                  <li>• Adult content creation</li>
                  <li>• Privacy violations</li>
                </ul>
              </div>

              <div className="p-4 bg-card/50 backdrop-blur-sm border-2 rounded-lg border-border shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                <h4 className="font-semibold text-foreground mb-2">Restricted Uses</h4>
                <ul className="space-y-1 text-sm text-foreground">
                  <li>• Medical diagnosis (without supervision)</li>
                  <li>• Legal advice provision</li>
                  <li>• Financial recommendations</li>
                  <li>• Critical safety systems</li>
                  <li>• Autonomous decision making</li>
                </ul>
              </div>

              <div className="p-4 bg-card/50 backdrop-blur-sm border-2 rounded-lg border-border shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                <h4 className="font-semibold text-foreground mb-2">Data Restrictions</h4>
                <ul className="space-y-1 text-sm text-foreground">
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
        <Card className="bg-card/50 backdrop-blur-sm border-2 border-border shadow-[0_0_15px_rgba(59,130,246,0.1)]">
          <CardHeader>
            <CardTitle className="text-foreground">Enterprise Licensing</CardTitle>
            <CardDescription className="text-muted-foreground">Business and organizational terms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 border-2 rounded-lg bg-card/50 backdrop-blur-sm border-border shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                <p className="font-medium text-sm text-foreground">Custom Agreements</p>
                <p className="text-xs text-muted-foreground">Available for large deployments</p>
              </div>
              <div className="p-3 border-2 rounded-lg bg-card/50 backdrop-blur-sm border-border shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                <p className="font-medium text-sm text-foreground">Volume Discounts</p>
                <p className="text-xs text-muted-foreground">Based on usage commitments</p>
              </div>
              <div className="p-3 border-2 rounded-lg bg-card/50 backdrop-blur-sm border-border shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                <p className="font-medium text-sm text-foreground">SLA Guarantees</p>
                <p className="text-xs text-muted-foreground">Uptime and support commitments</p>
              </div>
              <div className="p-3 border-2 rounded-lg bg-card/50 backdrop-blur-sm border-border shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                <p className="font-medium text-sm text-foreground">Indemnification</p>
                <p className="text-xs text-muted-foreground">IP protection clauses</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-2 border-border shadow-[0_0_15px_rgba(59,130,246,0.1)]">
          <CardHeader>
            <CardTitle className="text-foreground">Data Ownership</CardTitle>
            <CardDescription className="text-muted-foreground">Who owns what data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-card/50 backdrop-blur-sm border-2 rounded-lg border-border shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                <p className="font-medium text-foreground text-sm">Your Input Data</p>
                <p className="text-xs text-muted-foreground">You retain full ownership</p>
              </div>
              <div className="p-3 bg-card/50 backdrop-blur-sm border-2 rounded-lg border-border shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                <p className="font-medium text-foreground text-sm">Generated Output</p>
                <p className="text-xs text-muted-foreground">Typically assigned to you</p>
              </div>
              <div className="p-3 bg-card/50 backdrop-blur-sm border-2 rounded-lg border-border shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                <p className="font-medium text-foreground text-sm">Model Weights</p>
                <p className="text-xs text-muted-foreground">Remain with AI provider</p>
              </div>
              <div className="p-3 bg-card/50 backdrop-blur-sm border-2 rounded-lg border-border shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                <p className="font-medium text-foreground text-sm">Usage Analytics</p>
                <p className="text-xs text-muted-foreground">Shared or provider-owned</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-2 border-border shadow-[0_0_15px_rgba(59,130,246,0.1)]">
          <CardHeader>
            <CardTitle className="text-foreground">Compliance Standards</CardTitle>
            <CardDescription className="text-muted-foreground">Regulatory adherence</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">GDPR</span>
                <Badge className="bg-primary/10 text-foreground border border-primary/20">All</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">CCPA</span>
                <Badge className="bg-primary/10 text-foreground border border-primary/20">All</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">SOC 2</span>
                <Badge className="bg-primary/10 text-foreground border border-primary/20">Most</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">HIPAA</span>
                <Badge className="bg-muted text-foreground border border-border">Enterprise</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">ISO 27001</span>
                <Badge className="bg-primary/10 text-foreground border border-primary/20">Major</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/50 backdrop-blur-sm border-2 border-border shadow-[0_0_15px_rgba(59,130,246,0.1)]">
        <CardHeader>
          <CardTitle className="text-foreground">License Comparison Summary</CardTitle>
          <CardDescription className="text-muted-foreground">Key differences in licensing terms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-card/50 backdrop-blur-sm border-2 rounded-lg border-border shadow-[0_0_10px_rgba(59,130,246,0.1)]">
              <h4 className="font-semibold text-foreground mb-2">Most Permissive</h4>
              <p className="text-foreground mb-2">OpenAI GPT-4</p>
              <p className="text-sm text-muted-foreground">
                Flexible commercial use with minimal restrictions on output usage
              </p>
            </div>
            <div className="p-4 bg-card/50 backdrop-blur-sm border-2 rounded-lg border-border shadow-[0_0_10px_rgba(59,130,246,0.1)]">
              <h4 className="font-semibold text-foreground mb-2">Most Ethical</h4>
              <p className="text-foreground mb-2">Anthropic Claude</p>
              <p className="text-sm text-muted-foreground">
                Strong ethical guidelines and constitutional AI principles
              </p>
            </div>
            <div className="p-4 bg-card/50 backdrop-blur-sm border-2 rounded-lg border-border shadow-[0_0_10px_rgba(59,130,246,0.1)]">
              <h4 className="font-semibold text-foreground mb-2">Enterprise Focus</h4>
              <p className="text-foreground mb-2">Google Gemini</p>
              <p className="text-sm text-muted-foreground">
                Strong enterprise integration and cloud service alignment
              </p>
            </div>
            <div className="p-4 bg-card/50 backdrop-blur-sm border-2 rounded-lg border-border shadow-[0_0_10px_rgba(59,130,246,0.1)]">
              <h4 className="font-semibold text-foreground mb-2">Open Alternative</h4>
              <p className="text-foreground mb-2">Open Source Models</p>
              <p className="text-sm text-muted-foreground">
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
