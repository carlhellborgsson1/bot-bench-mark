
import { PerformanceHeader } from "@/components/performance/PerformanceHeader";
import { MetricsExplanation } from "@/components/performance/MetricsExplanation";
import { PerformanceMetrics } from "@/components/performance/PerformanceMetrics";
import { PerformanceInsights } from "@/components/performance/PerformanceInsights";

const Performance = () => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <PerformanceHeader />
      <MetricsExplanation />
      <PerformanceMetrics />
      <PerformanceInsights />
    </div>
  );
};

export default Performance;
