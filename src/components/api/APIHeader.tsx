
import { Code } from "lucide-react";

export const APIHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500/10 to-blue-500/10">
          <Code className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white">API Capabilities</h1>
      </div>
      <p className="text-lg text-white max-w-3xl">
        Comprehensive comparison of API features, developer tools, SDKs, and integration capabilities 
        across different AI chatbot platforms.
      </p>
    </div>
  );
};
