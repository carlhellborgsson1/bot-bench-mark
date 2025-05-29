
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";

export const LanguageSupport = () => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-black">
          <Globe className="h-5 w-5 text-blue-500" />
          Language Support
        </CardTitle>
        <CardDescription className="text-black">Number of languages supported for conversation</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">95+</p>
            <p className="text-sm text-blue-700">GPT-4 Languages</p>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <p className="text-2xl font-bold text-purple-600">85+</p>
            <p className="text-sm text-purple-700">Claude Languages</p>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">100+</p>
            <p className="text-sm text-green-700">Gemini Languages</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-gray-600">90+</p>
            <p className="text-sm text-gray-700">GPT-3.5 Languages</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-black">Most Supported Languages:</h4>
          <div className="flex flex-wrap gap-1">
            <Badge variant="outline">English</Badge>
            <Badge variant="outline">Spanish</Badge>
            <Badge variant="outline">French</Badge>
            <Badge variant="outline">German</Badge>
            <Badge variant="outline">Chinese</Badge>
            <Badge variant="outline">Japanese</Badge>
            <Badge variant="outline">Korean</Badge>
            <Badge variant="outline">Arabic</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
