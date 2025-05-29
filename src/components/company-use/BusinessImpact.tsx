
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BusinessImpact = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-black">ROI & Business Impact</CardTitle>
          <CardDescription className="text-black">Expected returns on AI investment</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-black mb-2">Productivity Gains</h4>
              <p className="text-black text-sm mb-2">20-40% efficiency improvement</p>
              <p className="text-xs text-black">Typical across writing, analysis, and research tasks</p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-black mb-2">Cost Savings</h4>
              <p className="text-black text-sm mb-2">$10-50K per employee annually</p>
              <p className="text-xs text-black">Through automation and faster task completion</p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-black mb-2">Time to Value</h4>
              <p className="text-black text-sm mb-2">2-8 weeks implementation</p>
              <p className="text-xs text-black">Depending on integration complexity</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-black">Implementation Considerations</CardTitle>
          <CardDescription className="text-black">Key factors for successful deployment</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-sm mb-2 text-black">Team Size Recommendations:</h4>
              <ul className="text-sm text-black space-y-1">
                <li>• Small (1-50): Gemini Workspace or ChatGPT Team</li>
                <li>• Medium (51-500): Claude for Work or GPT-4 Enterprise</li>
                <li>• Large (500+): Custom enterprise solutions</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm mb-2 text-black">Critical Success Factors:</h4>
              <ul className="text-sm text-black space-y-1">
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
  );
};

export default BusinessImpact;
