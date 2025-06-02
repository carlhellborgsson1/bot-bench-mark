
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

const AboutMission = () => {
  return (
    <Card className="mb-16 border-0 bg-white/95 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
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
  );
};

export default AboutMission;
