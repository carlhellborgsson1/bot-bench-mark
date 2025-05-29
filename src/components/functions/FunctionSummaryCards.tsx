
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Image, Brain } from "lucide-react";

const FunctionSummaryCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <Code className="h-5 w-5 text-blue-600" />
            Coding Capabilities
          </CardTitle>
          <CardDescription className="text-black">Programming and development features</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 bg-blue-50 rounded-lg">
            <p className="font-semibold text-black">Best for Coding</p>
            <p className="text-black text-sm">GPT-4 excels in complex programming tasks</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-black">Supported Languages:</p>
            <div className="flex flex-wrap gap-1">
              <Badge variant="outline" className="text-xs text-black border-black">Python</Badge>
              <Badge variant="outline" className="text-xs text-black border-black">JavaScript</Badge>
              <Badge variant="outline" className="text-xs text-black border-black">Java</Badge>
              <Badge variant="outline" className="text-xs text-black border-black">C++</Badge>
              <Badge variant="outline" className="text-xs text-black border-black">+40 more</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <Image className="h-5 w-5 text-green-600" />
            Multimodal Features
          </CardTitle>
          <CardDescription className="text-black">Visual and multimedia capabilities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 bg-green-50 rounded-lg">
            <p className="font-semibold text-black">Most Advanced</p>
            <p className="text-black text-sm">GPT-4, Claude 3, and Gemini Pro support images</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-black">Capabilities:</p>
            <ul className="text-sm text-black space-y-1">
              <li>• Image analysis and description</li>
              <li>• Chart and graph interpretation</li>
              <li>• Document OCR and extraction</li>
              <li>• Visual reasoning tasks</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <Brain className="h-5 w-5 text-purple-600" />
            Specialized Functions
          </CardTitle>
          <CardDescription className="text-black">Unique capabilities and strengths</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 bg-purple-50 rounded-lg">
            <p className="font-semibold text-black">Standout Features</p>
            <p className="text-black text-sm">Each model has unique specialized strengths</p>
          </div>
          <div className="space-y-2">
            <div className="text-sm">
              <p className="font-medium text-black">GPT-4:</p>
              <p className="text-black">Complex reasoning, plugin ecosystem</p>
            </div>
            <div className="text-sm">
              <p className="font-medium text-black">Claude 3:</p>
              <p className="text-black">Long context, constitutional AI</p>
            </div>
            <div className="text-sm">
              <p className="font-medium text-black">Gemini:</p>
              <p className="text-black">Google integration, real-time data</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FunctionSummaryCards;
