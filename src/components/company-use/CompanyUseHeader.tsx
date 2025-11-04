
import { Building } from "lucide-react";

export const CompanyUseHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10">
          <Building className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white">AI Chatbots for Business Use</h1>
      </div>
      <p className="text-lg text-white max-w-3xl">
        Enterprise-grade AI chatbot solutions for businesses of all sizes. Compare features, security, 
        scalability, and integration capabilities to transform your organization's productivity.
      </p>
    </div>
  );
};
