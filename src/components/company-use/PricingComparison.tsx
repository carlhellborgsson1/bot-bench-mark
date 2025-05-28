
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PricingComparison = () => {
  return (
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
  );
};

export default PricingComparison;
