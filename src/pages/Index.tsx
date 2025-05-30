
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Shield, Zap, DollarSign, Globe, Code, ArrowRight, Sparkles, Compass } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Performance Analysis",
      description: "Compare speed, accuracy, and reliability across different AI models",
      link: "/performance"
    },
    {
      icon: Shield,
      title: "Security Assessment",
      description: "Evaluate data protection, privacy policies, and security measures",
      link: "/security"
    },
    {
      icon: Zap,
      title: "Feature Comparison",
      description: "Analyze capabilities, integrations, and unique functionalities",
      link: "/functions"
    },
    {
      icon: DollarSign,
      title: "Pricing Analysis",
      description: "Compare costs, plans, and value propositions across platforms",
      link: "/price"
    },
    {
      icon: Globe,
      title: "Availability",
      description: "Check regional availability and supported languages",
      link: "/availability"
    },
    {
      icon: Code,
      title: "API Capabilities",
      description: "Explore developer tools, SDKs, and integration options",
      link: "/api"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center py-6 sm:py-8 px-4">
        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
          <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          <Link to="/about" className="text-xs sm:text-sm font-medium text-white bg-transparent px-2 sm:px-3 py-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
            AI Comparison Platform
          </Link>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white px-2">
          Find Your Perfect AI Chatbot
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-amber-100 mb-6 sm:mb-4 max-w-3xl mx-auto leading-relaxed px-2">
          Navigate the complex world of AI assistants with comprehensive comparisons across performance, 
          security, pricing, and features. Make informed decisions with data-driven insights.
        </p>
        <div className="flex justify-center px-4">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base">
            <Link to="/chatbot-matcher" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-white" />
              Find My Chatbot
              <ArrowRight className="h-4 w-4 text-white" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-20">
        {features.map((feature, index) => (
          <Card key={feature.title} className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-200 shadow-md hover:shadow-blue-200 hover:border-blue-300 bg-white animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-blue-500/15 to-purple-500/15 group-hover:from-blue-500/25 group-hover:to-purple-500/25 transition-colors border border-blue-200">
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                </div>
                <CardTitle className="text-base sm:text-lg text-black">{feature.title}</CardTitle>
              </div>
              <CardDescription className="text-sm sm:text-base leading-relaxed text-black">
                {feature.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Button asChild variant="ghost" className="group/btn w-full justify-between hover:bg-blue-50 transition-colors border border-gray-200 hover:border-blue-300 text-sm sm:text-base">
                <Link to={feature.link}>
                  <span className="text-black">Explore</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform text-black" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-12 text-center mb-8 sm:mb-12 mx-2 sm:mx-0">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">Ready to Find Your Perfect AI Assistant?</h2>
        <p className="text-base sm:text-lg text-black mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
          Use our intelligent matching tool to get personalized recommendations based on your specific needs and requirements.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm sm:text-base">
          <Link to="/chatbot-matcher" className="flex items-center gap-2">
            <Compass className="h-4 w-4 text-white" />
            Start Matching Process
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
