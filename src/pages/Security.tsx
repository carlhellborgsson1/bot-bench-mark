
import { SecurityHeader } from "@/components/security/SecurityHeader";
import { SecurityMetricsExplanation } from "@/components/security/SecurityMetricsExplanation";
import { SecurityDataCards } from "@/components/security/SecurityDataCards";
import { SecurityComparison } from "@/components/security/SecurityComparison";

const Security = () => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <SecurityHeader />
      <SecurityMetricsExplanation />
      <SecurityDataCards />
      <SecurityComparison />
    </div>
  );
};

export default Security;
