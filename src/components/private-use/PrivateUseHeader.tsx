
import { User } from "lucide-react";

export const PrivateUseHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-br from-pink-500/10 to-rose-500/10">
          <User className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white">AI Chatbots for Private Use</h1>
      </div>
      <p className="text-lg text-white max-w-3xl">
        Discover the best AI chatbots for personal use, including creative writing, learning, 
        daily assistance, and entertainment. Find the perfect AI companion for your individual needs.
      </p>
    </div>
  );
};
