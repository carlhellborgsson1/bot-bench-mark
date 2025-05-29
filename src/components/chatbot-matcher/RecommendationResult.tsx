
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ExternalLink } from "lucide-react";
import { Recommendation } from "@/types/chatbot";
import { getAffiliateLink } from "@/utils/recommendations";

interface RecommendationResultProps {
  recommendation: Recommendation;
  onReset: () => void;
}

const RecommendationResult = ({ recommendation, onReset }: RecommendationResultProps) => {
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
        <Button onClick={onReset} variant="outline" size="lg" className="bg-white text-black border-gray-300 hover:bg-gray-50">
          Try Again
        </Button>
        <p className="text-sm text-blue-100">
          Want to explore more options? Check out our detailed comparison pages.
        </p>
      </div>
    </div>
  );
};

export default RecommendationResult;
