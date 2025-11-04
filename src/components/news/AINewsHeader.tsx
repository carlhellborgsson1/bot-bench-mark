
import { TrendingUp } from "lucide-react";

export const AINewsHeader = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10">
          <TrendingUp className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white">AI News Hub</h1>
      </div>
      <p className="text-lg text-white max-w-3xl mx-auto">
        Stay updated with the latest developments in artificial intelligence, from breakthrough research to industry updates.
      </p>
    </div>
  );
};
