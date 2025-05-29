import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Compass, ArrowRight, CheckCircle, Users, Building, DollarSign, Shield, Palette, BookOpen, User, UsersIcon, Home, Globe, ExternalLink } from "lucide-react";

const ChatbotMatcher = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendation, setRecommendation] = useState<any>(null);

  const questions = [
    {
      id: "useCase",
      title: "What's your primary use case?",
      description: "Select the main purpose for using AI chatbots",
      options: [
        { value: "personal", label: "Personal Use", icon: Users },
        { value: "business", label: "Business/Enterprise", icon: Building },
        { value: "creative", label: "Creative Projects", icon: Palette },
        { value: "research", label: "Research & Learning", icon: BookOpen }
      ]
    },
    {
      id: "budget",
      title: "What's your budget preference?",
      description: "Choose your preferred pricing tier",
      options: [
        { value: "free", label: "Free Only", icon: DollarSign },
        { value: "low", label: "$1-20/month", icon: DollarSign },
        { value: "medium", label: "$20-60/month", icon: DollarSign },
        { value: "enterprise", label: "Enterprise (Custom)", icon: DollarSign }
      ]
    },
    {
      id: "priority", 
      title: "What's most important to you?",
      description: "Select your top priority",
      options: [
        { value: "performance", label: "Best Performance", icon: CheckCircle },
        { value: "privacy", label: "Privacy & Security", icon: Shield },
        { value: "features", label: "Advanced Features", icon: Compass },
        { value: "ease", label: "Ease of Use", icon: CheckCircle }
      ]
    },
    {
      id: "teamSize",
      title: "How many people will use it?",
      description: "Choose your team size",
      options: [
        { value: "individual", label: "Just Me", icon: User },
        { value: "small", label: "2-10 People", icon: Users },
        { value: "medium", label: "11-100 People", icon: Building },
        { value: "large", label: "100+ People", icon: Globe }
      ]
    }
  ];

  const getAffiliateLink = (chatbotName: string) => {
    const affiliateLinks: Record<string, string> = {
      "Gemini Pro": "https://gemini.google.com/?ref=affiliate",
      "ChatGPT Plus (GPT-4)": "https://chat.openai.com/auth/login?ref=affiliate",
      "ChatGPT Plus": "https://chat.openai.com/auth/login?ref=affiliate",
      "Claude 3": "https://claude.ai/?ref=affiliate",
      "GPT-4 Enterprise": "https://openai.com/enterprise?ref=affiliate",
      "Claude for Work": "https://claude.ai/for-work?ref=affiliate",
      "Google Workspace AI": "https://workspace.google.com/products/ai/?ref=affiliate",
      "GPT-4": "https://chat.openai.com/auth/login?ref=affiliate"
    };
    
    return affiliateLinks[chatbotName] || "https://chat.openai.com/?ref=affiliate";
  };

  const getRecommendation = (answers: Record<string, string>) => {
    const { useCase, budget, priority, teamSize } = answers;

    // Personal use recommendations
    if (useCase === "personal") {
      if (budget === "free") {
        return {
          primary: "Gemini Pro",
          reason: "Free tier with excellent capabilities",
          alternatives: ["ChatGPT-3.5", "Claude (basic)"],
          features: ["Completely free", "Google integration", "Multimodal", "Fast responses"]
        };
      }
      if (priority === "privacy") {
        return {
          primary: "Claude 3",
          reason: "Best privacy protection with no data retention",
          alternatives: ["ChatGPT (history off)", "Local models"],
          features: ["No data storage", "Constitutional AI", "Long context", "Excellent reasoning"]
        };
      }
      return {
        primary: "ChatGPT Plus (GPT-4)",
        reason: "Most versatile for personal use with plugin ecosystem",
        alternatives: ["Claude 3 Pro", "Gemini Advanced"],
        features: ["Plugin access", "Image analysis", "Web browsing", "Most capable"]
      };
    }

    // Business use recommendations
    if (useCase === "business") {
      if (teamSize === "large" || budget === "enterprise") {
        return {
          primary: "GPT-4 Enterprise",
          reason: "Comprehensive enterprise solution with advanced security",
          alternatives: ["Claude for Work", "Google Workspace AI"],
          features: ["SSO integration", "Admin controls", "Data encryption", "Priority support"]
        };
      }
      if (priority === "privacy") {
        return {
          primary: "Claude for Work",
          reason: "Enterprise-grade privacy with constitutional AI safety",
          alternatives: ["GPT-4 Enterprise", "On-premise solutions"],
          features: ["No training data usage", "EU data centers", "Constitutional AI", "Long context"]
        };
      }
      return {
        primary: "Google Workspace AI",
        reason: "Seamless integration with existing business tools",
        alternatives: ["GPT-4 Enterprise", "Claude for Work"],
        features: ["Native Workspace integration", "Competitive pricing", "Easy deployment", "Familiar interface"]
      };
    }

    // Creative use recommendations
    if (useCase === "creative") {
      return {
        primary: "GPT-4",
        reason: "Best creative capabilities with multimodal features",
        alternatives: ["Claude 3", "Midjourney integration"],
        features: ["Image generation", "Creative writing", "Brainstorming", "Plugin ecosystem"]
      };
    }

    // Research use recommendations
    if (useCase === "research") {
      return {
        primary: "Claude 3",
        reason: "Excellent for analysis with 200K token context window",
        alternatives: ["GPT-4", "Perplexity AI"],
        features: ["Long context analysis", "Excellent reasoning", "Academic writing", "Citation support"]
      };
    }

    // Default fallback
    return {
      primary: "ChatGPT Plus",
      reason: "Most balanced option for general use",
      alternatives: ["Claude 3", "Gemini Pro"],
      features: ["Versatile capabilities", "Regular updates", "Large community", "Good documentation"]
    };
  };

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentStep].id]: value };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const result = getRecommendation(newAnswers);
      setRecommendation(result);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setRecommendation(null);
  };

  if (recommendation) {
    return (
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-gradient-to-br from-green-500 to-emerald-600">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-white">Your Perfect AI Chatbot Match!</h1>
          <p className="text-lg text-blue-100">
            Based on your preferences, here's our personalized recommendation
          </p>
        </div>

        <Card className="mb-8 bg-white border-gray-200 shadow-lg">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Badge className="bg-blue-500 text-white px-4 py-2 text-lg">Recommended</Badge>
            </div>
            <CardTitle className="text-2xl text-black">{recommendation.primary}</CardTitle>
            <CardDescription className="text-lg text-gray-700">
              {recommendation.reason}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-3 text-black">Key Features:</h4>
                <ul className="space-y-2">
                  {recommendation.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-black">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-black">Alternative Options:</h4>
                <div className="space-y-2">
                  {recommendation.alternatives.map((alt: string, index: number) => (
                    <Badge key={index} variant="outline" className="mr-2 mb-2 text-black border-gray-300">
                      {alt}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="border-t pt-6">
              <div className="text-center space-y-4">
                <Button 
                  onClick={() => window.open(getAffiliateLink(recommendation.primary), '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                  size="lg"
                >
                  Get Started with {recommendation.primary}
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-sm text-gray-600">
                  Start your AI journey with our top recommendation
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-4">
          <Button onClick={resetQuiz} variant="outline" size="lg" className="bg-white text-black border-gray-300 hover:bg-gray-50">
            Try Again
          </Button>
          <p className="text-sm text-blue-100">
            Want to explore more options? Check out our detailed comparison pages.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10">
            <Compass className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">Find Your Perfect AI Chatbot</h1>
        </div>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          Answer a few quick questions and we'll recommend the best AI chatbot for your specific needs
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-blue-100">
            Question {currentStep + 1} of {questions.length}
          </span>
          <span className="text-sm text-blue-100">
            {Math.round(((currentStep + 1) / questions.length) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <Card className="mb-8 bg-white border-gray-200 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-black">{questions[currentStep].title}</CardTitle>
          <CardDescription className="text-gray-700">{questions[currentStep].description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {questions[currentStep].options.map((option) => (
              <Button
                key={option.value}
                variant="outline"
                className="h-auto p-6 flex flex-col items-center gap-3 bg-white text-black border-gray-300 hover:bg-gray-50 hover:border-blue-300 transition-all duration-200"
                onClick={() => handleAnswer(option.value)}
              >
                <option.icon className="h-6 w-6 text-gray-600" />
                <span className="font-medium text-black">{option.label}</span>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-gray-600" />
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {currentStep > 0 && (
        <div className="text-center">
          <Button 
            variant="ghost" 
            onClick={() => setCurrentStep(currentStep - 1)}
            className="text-blue-100 hover:text-white hover:bg-blue-500/20"
          >
            ← Back to Previous Question
          </Button>
        </div>
      )}
    </div>
  );
};

export default ChatbotMatcher;
