
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Question } from "@/types/chatbot";

interface QuestionCardProps {
  question: Question;
  onAnswer: (value: string) => void;
}

const QuestionCard = ({ question, onAnswer }: QuestionCardProps) => {
  return (
    <Card className="mb-8 bg-white border-gray-200 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-xl text-black">{question.title}</CardTitle>
        <CardDescription className="text-gray-700">{question.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {question.options.map((option) => (
            <Button
              key={option.value}
              variant="outline"
              className="h-auto p-6 flex flex-col items-center gap-3 bg-white text-black border-gray-300 hover:bg-gray-50 hover:border-blue-300 transition-all duration-200"
              onClick={() => onAnswer(option.value)}
            >
              <option.icon className="h-6 w-6 text-gray-600" />
              <span className="font-medium text-black">{option.label}</span>
              <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-gray-600" />
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
