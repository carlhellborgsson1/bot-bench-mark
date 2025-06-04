
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Compass, BarChart3, Shield, Zap, Target, Users, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in bg-transparent">
      {/* Back Button */}
      <div className="mb-8">
        <Button asChild variant="ghost" className="hover:bg-white/10 transition-all duration-300">
          <Link to="/" className="flex items-center gap-2 group">
            <ArrowLeft className="h-4 w-4 text-white group-hover:text-blue-200 transition-colors" />
            <span className="text-white group-hover:text-blue-200 transition-colors">Back to Home</span>
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl -z-10"></div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          About ChatBot Compass
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
          Your trusted guide in the complex world of AI chatbots and virtual assistants
        </p>
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
        </div>
      </div>

      {/* What We Do Section */}
      <Card className="border-0 bg-white/10 backdrop-blur-md shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] border-white/20 mb-16">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <Compass className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-3xl md:text-4xl text-white mb-4">What We Do</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg text-blue-100 leading-relaxed max-w-4xl mx-auto mb-6">
            ChatBot Compass is your comprehensive AI comparison platform designed to help individuals and businesses 
            navigate the rapidly evolving landscape of artificial intelligence chatbots and virtual assistants.
          </p>
          <p className="text-lg text-blue-100 leading-relaxed max-w-4xl mx-auto">
            With dozens of AI tools available today, each with unique strengths, pricing models, and capabilities, 
            choosing the right solution can be overwhelming. We simplify this process by providing detailed, 
            data-driven comparisons across multiple dimensions including performance, security, features, and pricing.
          </p>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Help You</h2>
          <p className="text-blue-100 text-lg">
            Comprehensive analysis across all the dimensions that matter
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group border-0 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-white/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-lg text-white">Performance Analysis</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-200 text-sm leading-relaxed">
                Compare speed, accuracy, and reliability across different AI models to find the best performer
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-white/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-lg text-white">Security Assessment</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-200 text-sm leading-relaxed">
                Evaluate data protection, privacy policies, and security measures to keep your information safe
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-white/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-lg text-white">Feature Comparison</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-200 text-sm leading-relaxed">
                Analyze capabilities, integrations, and unique functionalities to match your specific needs
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-white/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-lg text-white">Personalized Matching</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-200 text-sm leading-relaxed">
                Get tailored recommendations based on your specific requirements and use cases
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-white/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-lg text-white">Unbiased Analysis</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-200 text-sm leading-relaxed">
                Objective, fact-based comparisons without favoring any particular platform or vendor
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-white/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-lg text-white">Expert Insights</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-200 text-sm leading-relaxed">
                Data-driven analysis and expert recommendations to help you make informed decisions
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mb-16">
        <Card className="border-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-md shadow-2xl border-white/20">
          <CardContent className="py-12 px-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Find Your Perfect AI Assistant?
            </h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Take our quick assessment to get personalized recommendations tailored to your needs
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
              <Link to="/chatbot-matcher" className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Start Assessment
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
