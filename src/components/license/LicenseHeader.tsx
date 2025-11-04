
import { FileText } from "lucide-react";

export const LicenseHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500/10 to-orange-500/10">
          <FileText className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white">License Models</h1>
      </div>
      <p className="text-lg text-white max-w-3xl">
        Understanding the legal frameworks, usage rights, and licensing terms for different AI chatbot platforms 
        to ensure compliant deployment in your organization.
      </p>
    </div>
  );
};
