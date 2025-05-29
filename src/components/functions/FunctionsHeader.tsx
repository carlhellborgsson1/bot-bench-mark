
import { Zap } from "lucide-react";

const FunctionsHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10">
          <Zap className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white">Function Comparison</h1>
      </div>
      <p className="text-lg text-white max-w-3xl">
        Explore the diverse capabilities of AI chatbots including text generation, coding assistance, 
        multimodal features, language support, and integration options.
      </p>
    </div>
  );
};

export default FunctionsHeader;
