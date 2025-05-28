
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Shield, Zap, DollarSign, Globe, Code, ArrowRight, Sparkles } from "lucide-react";
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
    <div className="max-w-7xl mx-auto animate-fade-in">
      {/* Hero Section */}
      <div className="text-center py-20 px-4">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="h-8 w-8 text-blue-500" />
          <span className="text-sm font-medium text-muted-foreground bg-blue-50 px-3 py-1 rounded-full">
            AI Comparison Platform
          </span>
        </div>
        <h1 className="text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Find Your Perfect AI Chatbot
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Navigate the complex world of AI assistants with comprehensive comparisons across performance, 
          security, pricing, and features. Make informed decisions with data-driven insights.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <Link to="/chatbot-matcher" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Find My Chatbot
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="hover:bg-accent transition-colors">
            <Link to="/performance">
              Explore Comparisons
            </Link>
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {features.map((feature, index) => (
          <Card key={feature.title} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm hover:shadow-blue-100 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors">
                  <feature.icon className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </div>
              <CardDescription className="text-base leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Button asChild variant="ghost" className="group/btn w-full justify-between hover:bg-blue-50 transition-colors">
                <Link to={feature.link}>
                  Explore
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect AI Assistant?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
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
