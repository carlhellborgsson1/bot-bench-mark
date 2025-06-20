
import { BarChart3 } from "lucide-react";

export const PerformanceHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
          <BarChart3 className="h-6 w-6 text-white" stroke="white" />
        </div>
        <h1 className="text-3xl font-bold text-white">Performance Comparison</h1>
      </div>
      <p className="text-lg text-blue-100 max-w-3xl">
        Compare AI chatbots across key performance metrics including response time, accuracy, 
        throughput, and reliability to find the fastest and most efficient solution.
      </p>
    </div>
  );
};
