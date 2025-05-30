
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Target, Users, BarChart3, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      {/* Back Button */}
      <div className="mb-6">
        <Button asChild variant="ghost" className="hover:bg-blue-50">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 text-white" />
            <span className="text-black">Back to Home</span>
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-white">About ChatBot Compass</h1>
        <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
          Your trusted guide in the complex world of AI chatbots and virtual assistants.
        </p>
      </div>

      {/* What We Do */}
      <Card className="mb-8 border-2 border-gray-200 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-black">
            <Target className="h-6 w-6 text-white" />
            What We Do
          </CardTitle>
        </CardHeader>
        <CardContent className="text-black leading-relaxed space-y-4">
          <p>
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

      {/* Key Features */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-gray-200 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-black">
              <BarChart3 className="h-5 w-5 text-white" />
              Comprehensive Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="text-black">
            We evaluate AI chatbots across performance, security, pricing, features, availability, 
            and API capabilities to give you a complete picture.
          </CardContent>
        </Card>

        <Card className="border-2 border-gray-200 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-black">
              <Users className="h-5 w-5 text-white" />
              Tailored Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="text-black">
            Our intelligent matching tool provides personalized recommendations based on your 
            specific needs, whether for personal or business use.
          </CardContent>
        </Card>

        <Card className="border-2 border-gray-200 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-black">
              <Shield className="h-5 w-5 text-white" />
              Unbiased Information
            </CardTitle>
          </CardHeader>
          <CardContent className="text-black">
            We provide objective, fact-based comparisons without favoring any particular platform, 
            ensuring you get honest insights to make informed decisions.
          </CardContent>
        </Card>

        <Card className="border-2 border-gray-200 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-black">
              <Target className="h-5 w-5 text-white" />
              Easy Navigation
            </CardTitle>
          </CardHeader>
          <CardContent className="text-black">
            Our intuitive interface makes it simple to explore different aspects of AI chatbots 
            and find exactly what you're looking for.
          </CardContent>
        </Card>
      </div>

      {/* Mission */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
        <CardHeader>
          <CardTitle className="text-2xl text-black">Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="text-black leading-relaxed">
          <p>
            To democratize access to AI technology by providing clear, comprehensive, and unbiased 
            information that empowers everyone—from curious individuals to enterprise decision-makers—
            to choose the AI chatbot solution that best fits their unique requirements and budget.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
