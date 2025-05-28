
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Shield, TrendingUp, Briefcase, Cog } from "lucide-react";

const CompanyUse = () => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10">
            <Building className="h-6 w-6 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold">AI Chatbots for Business Use</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Enterprise-grade AI chatbot solutions for businesses of all sizes. Compare features, security, 
          scalability, and integration capabilities to transform your organization's productivity.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-blue-600" />
              Enterprise Solutions Comparison
            </CardTitle>
            <CardDescription>Professional-grade AI for business environments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-lg">GPT-4 Enterprise</h4>
                  <Badge className="bg-blue-500 text-white">Most Popular</Badge>
                </div>
                <p className="text-muted-foreground mb-3">
                  Comprehensive enterprise solution with advanced security and admin controls.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="font-medium text-sm text-blue-700">Key Features:</p>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Advanced admin dashboard</li>
                      <li>• SSO integration</li>
                      <li>• Usage analytics</li>
                      <li>• Custom data retention</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-indigo-700">Pricing:</p>
                    <ul className="text-sm text-indigo-600 space-y-1">
                      <li>• $60/user/month</li>
                      <li>• Volume discounts available</li>
                      <li>• Unlimited GPT-4 usage</li>
                      <li>• Priority support</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-lg">Claude for Work</h4>
                  <Badge className="bg-purple-500 text-white">Best Security</Badge>
                </div>
                <p className="text-muted-foreground mb-3">
                  Privacy-focused enterprise AI with constitutional safety guarantees.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="font-medium text-sm text-purple-700">Key Features:</p>
                    <ul className="text-sm text-purple-600 space-y-1">
                      <li>• No data training usage</li>
                      <li>• Constitutional AI safety</li>
                      <li>• Long context windows</li>
                      <li>• European data centers</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-pink-700">Pricing:</p>
                    <ul className="text-sm text-pink-600 space-y-1">
                      <li>• Custom enterprise pricing</li>
                      <li>• Usage-based billing</li>
                      <li>• Dedicated support</li>
                      <li>• SLA guarantees</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-r from-green-50 to-teal-50">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-lg">Google Workspace AI</h4>
                  <Badge className="bg-green-500 text-white">Best Integration</Badge>
                </div>
                <p className="text-muted-foreground mb-3">
                  Seamlessly integrated with Google Workspace for enhanced productivity.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="font-medium text-sm text-green-700">Key Features:</p>
                    <ul className="text-sm text-green-600 space-y-1">
                      <li>• Native Workspace integration</li>
                      <li>• Gmail and Docs AI</li>
                      <li>• Meet transcription</li>
                      <li>• Sheets analysis</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-teal-700">Pricing:</p>
                    <ul className="text-sm text-teal-600 space-y-1">
                      <li>• $30/user/month</li>
                      <li>• Includes Workspace Premium</li>
                      <li>• Unlimited Gemini access</li>
                      <li>• Enterprise support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

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
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center">
            <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <CardTitle className="text-lg">Customer Support</CardTitle>
            <CardDescription className="text-sm">AI-powered help desk solutions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-center mb-4">
              <Badge className="bg-blue-100 text-blue-700">Recommended: GPT-4</Badge>
            </div>
            <ul className="text-sm space-y-2">
              <li>• 24/7 customer assistance</li>
              <li>• Multi-language support</li>
              <li>• Ticket routing automation</li>
              <li>• Knowledge base integration</li>
              <li>• Escalation protocols</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center">
            <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <CardTitle className="text-lg">Sales & Marketing</CardTitle>
            <CardDescription className="text-sm">Revenue generation and lead nurturing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-center mb-4">
              <Badge className="bg-green-100 text-green-700">Recommended: Claude</Badge>
            </div>
            <ul className="text-sm space-y-2">
              <li>• Lead qualification</li>
              <li>• Content generation</li>
              <li>• Email automation</li>
              <li>• Proposal writing</li>
              <li>• Market research</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center">
            <Cog className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <CardTitle className="text-lg">Operations</CardTitle>
            <CardDescription className="text-sm">Process automation and efficiency</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-center mb-4">
              <Badge className="bg-purple-100 text-purple-700">Recommended: Gemini</Badge>
            </div>
            <ul className="text-sm space-y-2">
              <li>• Workflow automation</li>
              <li>• Document processing</li>
              <li>• Inventory management</li>
              <li>• Report generation</li>
              <li>• Quality assurance</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center">
            <Building className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <CardTitle className="text-lg">HR & Training</CardTitle>
            <CardDescription className="text-sm">Human resources and development</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-center mb-4">
              <Badge className="bg-orange-100 text-orange-700">Recommended: Claude</Badge>
            </div>
            <ul className="text-sm space-y-2">
              <li>• Employee onboarding</li>
              <li>• Training content creation</li>
              <li>• Policy Q&A assistance</li>
              <li>• Performance reviews</li>
              <li>• Recruitment screening</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>ROI & Business Impact</CardTitle>
            <CardDescription>Expected returns on AI investment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Productivity Gains</h4>
                <p className="text-green-700 text-sm mb-2">20-40% efficiency improvement</p>
                <p className="text-xs text-green-600">Typical across writing, analysis, and research tasks</p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Cost Savings</h4>
                <p className="text-blue-700 text-sm mb-2">$10-50K per employee annually</p>
                <p className="text-xs text-blue-600">Through automation and faster task completion</p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Time to Value</h4>
                <p className="text-purple-700 text-sm mb-2">2-8 weeks implementation</p>
                <p className="text-xs text-purple-600">Depending on integration complexity</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Implementation Considerations</CardTitle>
            <CardDescription>Key factors for successful deployment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-sm mb-2">Team Size Recommendations:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Small (1-50): Gemini Workspace or ChatGPT Team</li>
                  <li>• Medium (51-500): Claude for Work or GPT-4 Enterprise</li>
                  <li>• Large (500+): Custom enterprise solutions</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm mb-2">Critical Success Factors:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Executive sponsorship and change management</li>
                  <li>• Clear use case definition and pilot programs</li>
                  <li>• Employee training and adoption support</li>
                  <li>• Security and compliance review process</li>
                  <li>• Performance metrics and ROI tracking</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Enterprise Pricing Comparison</CardTitle>
          <CardDescription>Cost breakdown for business deployment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-blue-700">Team</h3>
                <p className="text-3xl font-bold text-blue-600">$25-30</p>
                <p className="text-blue-600">/user/month</p>
              </div>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• 5-100 users</li>
                <li>• Basic admin controls</li>
                <li>• Email support</li>
                <li>• Usage analytics</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-purple-700">Business</h3>
                <p className="text-3xl font-bold text-purple-600">$50-60</p>
                <p className="text-purple-600">/user/month</p>
              </div>
              <ul className="space-y-2 text-sm text-purple-700">
                <li>• 100-1000 users</li>
                <li>• Advanced security</li>
                <li>• SSO integration</li>
                <li>• Priority support</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-green-200">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-green-700">Enterprise</h3>
                <p className="text-3xl font-bold text-green-600">Custom</p>
                <p className="text-green-600">pricing</p>
              </div>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Unlimited users</li>
                <li>• Custom integrations</li>
                <li>• Dedicated support</li>
                <li>• SLA guarantees</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border-2 border-orange-200">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-orange-700">API Usage</h3>
                <p className="text-3xl font-bold text-orange-600">Pay</p>
                <p className="text-orange-600">per use</p>
              </div>
              <ul className="space-y-2 text-sm text-orange-700">
                <li>• Development flexibility</li>
                <li>• Custom implementations</li>
                <li>• Volume discounts</li>
                <li>• Technical support</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyUse;
