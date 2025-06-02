
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, BarChart3, Users, Shield, Zap } from "lucide-react";

const AboutFeatures = () => {
  return (
    <>
      {/* What We Do Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Do</h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Simplifying AI choices through comprehensive analysis and expert insights
          </p>
        </div>
        
        <Card className="border-0 bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-white">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              Comprehensive AI Analysis Platform
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-100 leading-relaxed space-y-6">
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
          <Card className="group border-0 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-white/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-lg text-white">Comprehensive Analysis</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-200 text-sm leading-relaxed">
                Detailed evaluation across performance, security, pricing, features, and capabilities
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-white/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-lg text-white">Tailored Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-200 text-sm leading-relaxed">
                Personalized suggestions based on your specific needs and use cases
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-white/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-lg text-white">Unbiased Information</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-200 text-sm leading-relaxed">
                Objective, fact-based comparisons without favoring any particular platform
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-white/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-lg text-white">Easy Navigation</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-200 text-sm leading-relaxed">
                Intuitive interface designed to help you find exactly what you're looking for
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AboutFeatures;
