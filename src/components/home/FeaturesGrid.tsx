
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Shield, Zap, DollarSign, Globe, Code, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const FeaturesGrid = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Performance Analysis",
      description: "Compare speed, accuracy, and reliability across different AI models with detailed benchmarks",
      link: "/performance",
      gradient: "bg-white"
    },
    {
      icon: Shield,
      title: "Security Assessment",
      description: "Evaluate data protection, privacy policies, and enterprise-grade security measures",
      link: "/security",
      gradient: "bg-white"
    },
    {
      icon: Zap,
      title: "Feature Comparison",
      description: "Analyze capabilities, integrations, and unique functionalities in depth",
      link: "/functions",
      gradient: "bg-white"
    },
    {
      icon: DollarSign,
      title: "Pricing Analysis",
      description: "Compare costs, plans, and value propositions across all major platforms",
      link: "/price",
      gradient: "bg-white"
    },
    {
      icon: Globe,
      title: "Global Availability",
      description: "Check regional availability, supported languages, and local compliance",
      link: "/availability",
      gradient: "bg-white"
    },
    {
      icon: Code,
      title: "Developer Tools",
      description: "Explore APIs, SDKs, documentation quality, and integration options",
      link: "/api",
      gradient: "bg-white"
    }
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Need to Choose
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive analysis across all dimensions that matter for your AI assistant selection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in overflow-hidden" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-white shadow-lg border border-gray-200">
                    <feature.icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild variant="ghost" className="group/btn w-full justify-between hover:bg-gray-100 transition-all duration-300 rounded-lg p-4 text-gray-900">
                  <Link to={feature.link}>
                    <span className="text-gray-900 font-medium">Explore Analysis</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform text-gray-600" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
