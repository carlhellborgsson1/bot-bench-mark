
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Target, Users, BarChart3, Shield, Heart, Lightbulb, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
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

      {/* Mission Statement - Featured */}
      <Card className="mb-16 border-0 bg-gradient-to-br from-white via-blue-50/80 to-purple-50/80 shadow-2xl backdrop-blur-sm hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-3xl md:text-4xl text-gray-800 mb-4">Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            To democratize access to AI technology by providing clear, comprehensive, and unbiased 
            information that empowers everyone—from curious individuals to enterprise decision-makers—
            to choose the AI chatbot solution that best fits their unique requirements and budget.
          </p>
        </CardContent>
      </Card>

      {/* What We Do Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Do</h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Simplifying AI choices through comprehensive analysis and expert insights
          </p>
        </div>
        
        <Card className="border-0 bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-gray-800">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              Comprehensive AI Analysis Platform
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 leading-relaxed space-y-6">
            <p className="text-lg">
              ChatBot Compass is a comprehensive AI comparison platform designed to help individuals and businesses 
              navigate the rapidly evolving landscape of artificial intelligence chatbots and virtual assistants.
            </p>
            <p>
              With dozens of AI tools available today, each with unique strengths, pricing models, and capabilities, 
              choosing the right solution can be overwhelming. We simplify this process by providing detailed, 
              data-driven comparisons across multiple dimensions.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Key Features Grid */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-blue-100 text-lg">
            Four pillars that make us your ideal AI companion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="group border-0 bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-lg text-gray-800">Comprehensive Analysis</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 text-sm leading-relaxed">
                Detailed evaluation across performance, security, pricing, features, and capabilities
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-lg text-gray-800">Tailored Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 text-sm leading-relaxed">
                Personalized suggestions based on your specific needs and use cases
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-lg text-gray-800">Unbiased Information</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 text-sm leading-relaxed">
                Objective, fact-based comparisons without favoring any particular platform
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-lg text-gray-800">Easy Navigation</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 text-sm leading-relaxed">
                Intuitive interface designed to help you find exactly what you're looking for
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
          <p className="text-blue-100 text-lg">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Lightbulb className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
            <p className="text-blue-100 leading-relaxed">
              Constantly evolving our platform to provide the most up-to-date and relevant AI insights
            </p>
          </div>

          <div className="text-center group">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Transparency</h3>
            <p className="text-blue-100 leading-relaxed">
              Open and honest about our methodology, ensuring you can trust our recommendations
            </p>
          </div>

          <div className="text-center group">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Empowerment</h3>
            <p className="text-blue-100 leading-relaxed">
              Giving you the knowledge and tools needed to make confident AI technology decisions
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mb-16">
        <Card className="border-0 bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl">
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
