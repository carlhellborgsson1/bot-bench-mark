
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Search, Compass, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full shadow-xl border-2 border-blue-200">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-gradient-to-br from-blue-500/15 to-purple-500/15 border border-blue-200">
              <Search className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <CardTitle className="text-4xl font-bold mb-2 text-gray-900">404 - Page Not Found</CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Oops! The page you're looking for doesn't exist.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <Compass className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">About ChatBot Compass</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              ChatBot Compass is your comprehensive AI comparison platform. We help you navigate the complex world 
              of AI chatbots and virtual assistants by providing detailed comparisons across performance, security, 
              pricing, features, and more.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're an individual looking for a personal AI assistant or a business seeking enterprise 
              solutions, our platform provides the insights you need to make informed decisions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
              <Link to="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Go to Homepage
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-blue-300 hover:bg-blue-50">
              <Link to="/chatbot-matcher" className="flex items-center gap-2">
                <Compass className="h-4 w-4" />
                Find My Chatbot
              </Link>
            </Button>
          </div>

          <div className="text-center">
            <Button asChild variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
              <Link to="/about" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Learn More About Us
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
