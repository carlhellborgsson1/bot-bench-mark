
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Compass, ArrowRight, CheckCircle, Users, Building, DollarSign, Shield } from "lucide-react";

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
        { value: "creative", label: "Creative Projects", icon: "🎨" },
        { value: "research", label: "Research & Learning", icon: "📚" }
      ]
    },
    {
      id: "budget",
      title: "What's your budget preference?",
      description: "Choose your preferred pricing tier",
      options: [
        { value: "free", label: "Free Only", icon: "💸" },
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
        { value: "performance", label: "Best Performance", icon: "⚡" },
        { value: "privacy", label: "Privacy & Security", icon: Shield },
        { value: "features", label: "Advanced Features", icon: "🚀" },
        { value: "ease", label: "Ease of Use", icon: "👌" }
      ]
    },
    {
      id: "teamSize",
      title: "How many people will use it?",
      description: "Choose your team size",
      options: [
        { value: "individual", label: "Just Me", icon: "👤" },
        { value: "small", label: "2-10 People", icon: "👥" },
        { value: "medium", label: "11-100 People", icon: "🏢" },
        { value: "large", label: "100+ People", icon: "🏛️" }
      ]
    }
  ];

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
          <h1 className="text-3xl font-bold mb-4">Your Perfect AI Chatbot Match!</h1>
          <p className="text-lg text-muted-foreground">
            Based on your preferences, here's our personalized recommendation
          </p>
        </div>

        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Badge className="bg-blue-500 text-white px-4 py-2 text-lg">Recommended</Badge>
            </div>
            <CardTitle className="text-2xl text-blue-700">{recommendation.primary}</CardTitle>
            <CardDescription className="text-lg text-blue-600">
              {recommendation.reason}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {recommendation.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Alternative Options:</h4>
                <div className="space-y-2">
                  {recommendation.alternatives.map((alt: string, index: number) => (
                    <Badge key={index} variant="outline" className="mr-2 mb-2">
                      {alt}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-4">
          <Button onClick={resetQuiz} variant="outline" size="lg">
            Try Again
          </Button>
          <p className="text-sm text-muted-foreground">
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
            <Compass className="h-6 w-6 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold">Find Your Perfect AI Chatbot</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Answer a few quick questions and we'll recommend the best AI chatbot for your specific needs
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-muted-foreground">
            Question {currentStep + 1} of {questions.length}
          </span>
          <span className="text-sm text-muted-foreground">
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

      <Card className="mb-8">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">{questions[currentStep].title}</CardTitle>
          <CardDescription>{questions[currentStep].description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {questions[currentStep].options.map((option) => (
              <Button
                key={option.value}
                variant="outline"
                className="h-auto p-6 flex flex-col items-center gap-3 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
                onClick={() => handleAnswer(option.value)}
              >
                <div className="text-2xl">
                  {typeof option.icon === "string" ? (
                    option.icon
                  ) : (
                    <option.icon className="h-6 w-6" />
                  )}
                </div>
                <span className="font-medium">{option.label}</span>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
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
            className="text-muted-foreground"
          >
            ← Back to Previous Question
          </Button>
        </div>
      )}
    </div>
  );
};

export default ChatbotMatcher;
