
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <div className="text-center mb-16">
      <Card className="border-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-md shadow-2xl border-white/20">
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
  );
};

export default AboutCTA;
