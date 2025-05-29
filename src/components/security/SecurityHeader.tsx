
import { Shield } from "lucide-react";

export const SecurityHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/10 to-blue-500/10">
          <Shield className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white">Security Assessment</h1>
      </div>
      <p className="text-lg text-white max-w-3xl">
        Comprehensive security analysis covering encryption, data handling, compliance standards, 
        and privacy protection measures across different AI platforms.
      </p>
    </div>
  );
};
