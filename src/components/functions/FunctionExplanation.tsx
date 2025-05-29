
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, FileText, Image, Code, Brain, Info, Zap } from "lucide-react";

const FunctionExplanation = () => {
  return (
    <Card className="mb-8 bg-purple-50 border-purple-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-black">
          <Info className="h-5 w-5" />
          Understanding Function Capabilities
        </CardTitle>
        <CardDescription className="text-black">
          Here's what each function metric represents in practical terms:
        </CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-3 bg-white rounded-lg border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="h-4 w-4 text-purple-600" />
            <h4 className="font-semibold text-black">Text Quality</h4>
          </div>
          <p className="text-sm text-black">Rated quality of written responses, creativity, and coherence (Excellent/Very Good/Good/Fair)</p>
        </div>
        <div className="p-3 bg-white rounded-lg border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <Code className="h-4 w-4 text-purple-600" />
            <h4 className="font-semibold text-black">Code Quality</h4>
          </div>
          <p className="text-sm text-black">Programming assistance quality including syntax accuracy and best practices</p>
        </div>
        <div className="p-3 bg-white rounded-lg border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <Image className="h-4 w-4 text-purple-600" />
            <h4 className="font-semibold text-black">Image Support</h4>
          </div>
          <p className="text-sm text-black">Ability to analyze, understand, and describe images or visual content</p>
        </div>
        <div className="p-3 bg-white rounded-lg border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="h-4 w-4 text-purple-600" />
            <h4 className="font-semibold text-black">Multimodal</h4>
          </div>
          <p className="text-sm text-black">Can process multiple types of input (text, images, files) simultaneously</p>
        </div>
        <div className="p-3 bg-white rounded-lg border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="h-4 w-4 text-purple-600" />
            <h4 className="font-semibold text-black">Languages</h4>
          </div>
          <p className="text-sm text-black">Number of human languages supported for conversation and translation</p>
        </div>
        <div className="p-3 bg-white rounded-lg border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-4 w-4 text-purple-600" />
            <h4 className="font-semibold text-black">Integrations</h4>
          </div>
          <p className="text-sm text-black">Number of third-party tools, APIs, and plugins available for extended functionality</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FunctionExplanation;
