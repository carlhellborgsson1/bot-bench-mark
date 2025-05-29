
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Image, Brain } from "lucide-react";

const FunctionSummaryCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-600" />
            Coding Capabilities
          </CardTitle>
          <CardDescription>Programming and development features</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 bg-blue-50 rounded-lg">
            <p className="font-semibold text-blue-900">Best for Coding</p>
            <p className="text-blue-700 text-sm">GPT-4 excels in complex programming tasks</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Supported Languages:</p>
            <div className="flex flex-wrap gap-1">
              <Badge variant="outline" className="text-xs">Python</Badge>
              <Badge variant="outline" className="text-xs">JavaScript</Badge>
              <Badge variant="outline" className="text-xs">Java</Badge>
              <Badge variant="outline" className="text-xs">C++</Badge>
              <Badge variant="outline" className="text-xs">+40 more</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Image className="h-5 w-5 text-green-600" />
            Multimodal Features
          </CardTitle>
          <CardDescription>Visual and multimedia capabilities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 bg-green-50 rounded-lg">
            <p className="font-semibold text-green-900">Most Advanced</p>
            <p className="text-green-700 text-sm">GPT-4, Claude 3, and Gemini Pro support images</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Capabilities:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
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
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-600" />
            Specialized Functions
          </CardTitle>
          <CardDescription>Unique capabilities and strengths</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 bg-purple-50 rounded-lg">
            <p className="font-semibold text-purple-900">Standout Features</p>
            <p className="text-purple-700 text-sm">Each model has unique specialized strengths</p>
          </div>
          <div className="space-y-2">
            <div className="text-sm">
              <p className="font-medium">GPT-4:</p>
              <p className="text-muted-foreground">Complex reasoning, plugin ecosystem</p>
            </div>
            <div className="text-sm">
              <p className="font-medium">Claude 3:</p>
              <p className="text-muted-foreground">Long context, constitutional AI</p>
            </div>
            <div className="text-sm">
              <p className="font-medium">Gemini:</p>
              <p className="text-muted-foreground">Google integration, real-time data</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FunctionSummaryCards;
