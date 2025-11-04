
import { Compass } from "lucide-react";

export const ChatbotMatcherHeader = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10">
          <Compass className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white">Find Your Perfect AI Chatbot</h1>
      </div>
      <p className="text-lg text-white max-w-2xl mx-auto">
        Answer a few quick questions and we'll recommend the best AI chatbot for your specific needs
      </p>
    </div>
  );
};
