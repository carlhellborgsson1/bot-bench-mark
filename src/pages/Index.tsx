
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Shield, Zap, DollarSign, Globe, Code, ArrowRight, Sparkles, Compass, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Performance Analysis",
      description: "Compare speed, accuracy, and reliability across different AI models with detailed benchmarks",
      link: "/performance",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Security Assessment",
      description: "Evaluate data protection, privacy policies, and enterprise-grade security measures",
      link: "/security",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Feature Comparison",
      description: "Analyze capabilities, integrations, and unique functionalities in depth",
      link: "/functions",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: DollarSign,
      title: "Pricing Analysis",
      description: "Compare costs, plans, and value propositions across all major platforms",
      link: "/price",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global Availability",
      description: "Check regional availability, supported languages, and local compliance",
      link: "/availability",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Code,
      title: "Developer Tools",
      description: "Explore APIs, SDKs, documentation quality, and integration options",
      link: "/api",
      gradient: "from-red-500 to-rose-500"
    }
  ];

  const stats = [
    { number: "15+", label: "AI Models Compared" },
    { number: "50+", label: "Features Analyzed" },
    { number: "10K+", label: "Users Helped" },
    { number: "99%", label: "Accuracy Rate" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-white">
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
              <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg rounded-xl">
                <Link to="/performance" className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  View Comparisons
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5 backdrop-blur-md border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
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
                className="group bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in overflow-hidden hover:bg-white/15" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-blue-100 leading-relaxed text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button asChild variant="ghost" className="group/btn w-full justify-between hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/30 rounded-lg p-4 text-white">
                    <Link to={feature.link}>
                      <span className="text-white font-medium">Explore Analysis</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform text-blue-200" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden">
            <CardContent className="p-12 sm:p-16 text-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    Ready to Find Your Perfect AI Assistant?
                  </h2>
                  <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                    Take our intelligent matching quiz and get personalized recommendations 
                    based on your specific needs, budget, and use cases.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-300 px-8 py-4 text-lg rounded-xl">
                    <Link to="/chatbot-matcher" className="flex items-center gap-2">
                      <Compass className="h-5 w-5" />
                      Start AI Matching
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg rounded-xl">
                    <Link to="/performance">
                      Browse All Comparisons
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
