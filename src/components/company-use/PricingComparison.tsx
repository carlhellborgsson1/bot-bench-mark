
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PricingComparison = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-black">Enterprise Pricing Comparison</CardTitle>
        <CardDescription className="text-black">Cost breakdown for business deployment</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-black">Team</h3>
              <p className="text-3xl font-bold text-black">$25-30</p>
              <p className="text-black">/user/month</p>
            </div>
            <ul className="space-y-2 text-sm text-black">
              <li>• 5-100 users</li>
              <li>• Basic admin controls</li>
              <li>• Email support</li>
              <li>• Usage analytics</li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-black">Business</h3>
              <p className="text-3xl font-bold text-black">$50-60</p>
              <p className="text-black">/user/month</p>
            </div>
            <ul className="space-y-2 text-sm text-black">
              <li>• 100-1000 users</li>
              <li>• Advanced security</li>
              <li>• SSO integration</li>
              <li>• Priority support</li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-green-200">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-black">Enterprise</h3>
              <p className="text-3xl font-bold text-black">Custom</p>
              <p className="text-black">pricing</p>
            </div>
            <ul className="space-y-2 text-sm text-black">
              <li>• Unlimited users</li>
              <li>• Custom integrations</li>
              <li>• Dedicated support</li>
              <li>• SLA guarantees</li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border-2 border-orange-200">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-black">API Usage</h3>
              <p className="text-3xl font-bold text-black">Pay</p>
              <p className="text-black">per use</p>
            </div>
            <ul className="space-y-2 text-sm text-black">
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
