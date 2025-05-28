
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BusinessImpact = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
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
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Small (1-50): Gemini Workspace or ChatGPT Team</li>
                <li>• Medium (51-500): Claude for Work or GPT-4 Enterprise</li>
                <li>• Large (500+): Custom enterprise solutions</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm mb-2">Critical Success Factors:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
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
