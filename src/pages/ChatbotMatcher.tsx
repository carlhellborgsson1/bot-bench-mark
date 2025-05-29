
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";
import { Answers, Recommendation } from "@/types/chatbot";
import { getRecommendation } from "@/utils/recommendations";
import { questions } from "@/data/questions";
import ProgressBar from "@/components/chatbot-matcher/ProgressBar";
import QuestionCard from "@/components/chatbot-matcher/QuestionCard";
import RecommendationResult from "@/components/chatbot-matcher/RecommendationResult";

const ChatbotMatcher = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

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
    return <RecommendationResult recommendation={recommendation} onReset={resetQuiz} />;
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

      <ProgressBar currentStep={currentStep} totalSteps={questions.length} />

      <QuestionCard question={questions[currentStep]} onAnswer={handleAnswer} />

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
