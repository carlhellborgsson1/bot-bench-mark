
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Answers, Recommendation } from "@/types/chatbot";
import { getRecommendation } from "@/utils/recommendations";
import { questions } from "@/data/questions";
import ProgressBar from "@/components/chatbot-matcher/ProgressBar";
import QuestionCard from "@/components/chatbot-matcher/QuestionCard";
import RecommendationResult from "@/components/chatbot-matcher/RecommendationResult";
import { ChatbotMatcherHeader } from "@/components/chatbot-matcher/ChatbotMatcherHeader";

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
      <ChatbotMatcherHeader />

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
