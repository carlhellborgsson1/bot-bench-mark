
import { Button } from "@/components/ui/button";
import { BarChart3, ArrowRight, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm font-medium text-white">
            <Star className="h-4 w-4 text-yellow-400" />
            <span>Trusted AI Comparison Platform</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              Find Your Perfect
              <span className="block text-white">
                AI Assistant
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-blue-100 leading-relaxed">
              Navigate the complex world of AI chatbots with comprehensive, data-driven comparisons. 
              Make informed decisions backed by real performance metrics.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 px-8 py-4 text-lg rounded-xl">
              <Link to="/chatbot-matcher" className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Get My AI Match
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl">
              <Link to="/performance" className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                View Comparisons
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
