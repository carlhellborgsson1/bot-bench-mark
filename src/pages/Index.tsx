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
      <div className="text-center py-8 px-4">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="h-8 w-8 text-blue-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          <Link to="/about" className="text-sm font-medium text-blue-600 bg-transparent px-3 py-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
            AI Comparison Platform
          </Link>
        </div>
        <h1 className="text-5xl font-bold tracking-tight mb-4 text-white">
          Find Your Perfect AI Chatbot
        </h1>
        <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
          Navigate the complex world of AI assistants with comprehensive comparisons across performance, 
          security, pricing, and features. Make informed decisions with data-driven insights.
        </p>
        <div className="flex justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <Link to="/chatbot-matcher" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Find My Chatbot
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {features.map((feature, index) => (
          <Card key={feature.title} className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-200 shadow-md hover:shadow-blue-200 hover:border-blue-300 bg-white animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/15 to-purple-500/15 group-hover:from-blue-500/25 group-hover:to-purple-500/25 transition-colors border border-blue-200">
                  <feature.icon className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
              </div>
              <CardDescription className="text-base leading-relaxed text-gray-700">
                {feature.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Button asChild variant="ghost" className="group/btn w-full justify-between hover:bg-blue-50 transition-colors border border-gray-200 hover:border-blue-300">
                <Link to={feature.link}>
                  <span className="text-gray-800">Explore</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform text-blue-600" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect AI Assistant?</h2>
        <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
          Use our intelligent matching tool to get personalized recommendations based on your specific needs and requirements.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
          <Link to="/chatbot-matcher" className="flex items-center gap-2">
            <Compass className="h-4 w-4" />
            Start Matching Process
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
