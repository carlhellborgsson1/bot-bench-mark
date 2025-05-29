
import { Globe } from "lucide-react";

export const AvailabilityHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
          <Globe className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white">Availability & Access</h1>
      </div>
      <p className="text-lg text-white max-w-3xl">
        Explore global availability, regional restrictions, language support, and access methods 
        for different AI chatbot platforms worldwide.
      </p>
    </div>
  );
};
