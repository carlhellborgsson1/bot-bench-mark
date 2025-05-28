
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, MessageSquare, FileText, Image, Code, Brain } from "lucide-react";

const Functions = () => {
  const functionalityData = [
    {
      chatbot: "GPT-4",
      textGeneration: "Excellent",
      codeGeneration: "Excellent", 
      imageAnalysis: "Yes",
      multimodal: "Yes",
      languages: 95,
      integrations: 50,
      score: 9.5
    },
    {
      chatbot: "Claude 3",
      textGeneration: "Excellent",
      codeGeneration: "Very Good",
      imageAnalysis: "Yes",
      multimodal: "Yes", 
      languages: 85,
      integrations: 30,
      score: 9.2
    },
    {
      chatbot: "Gemini Pro",
      textGeneration: "Very Good",
      codeGeneration: "Good",
      imageAnalysis: "Yes",
      multimodal: "Yes",
      languages: 100,
      integrations: 40,
      score: 8.8
    },
    {
      chatbot: "ChatGPT-3.5",
      textGeneration: "Good",
      codeGeneration: "Good",
      imageAnalysis: "No",
      multimodal: "No",
      languages: 90,
      integrations: 45,
      score: 7.5
    }
  ];

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10">
            <Zap className="h-6 w-6 text-purple-600" />
          </div>
          <h1 className="text-3xl font-bold">Function Comparison</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Explore the diverse capabilities of AI chatbots including text generation, coding assistance, 
          multimodal features, language support, and integration options.
        </p>
      </div>

      <div className="grid gap-6 mb-8">
        {functionalityData.map((data, index) => (
          <Card key={data.chatbot} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CardTitle className="text-xl">{data.chatbot}</CardTitle>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    Feature Score: {data.score}/10
                  </Badge>
                </div>
                <div className="flex gap-2">
                  {data.multimodal === "Yes" && (
                    <Badge className="bg-green-500 text-white">Multimodal</Badge>
                  )}
                  {data.imageAnalysis === "Yes" && (
                    <Badge variant="outline">Image Analysis</Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-semibold text-sm">{data.textGeneration}</p>
                    <p className="text-xs text-muted-foreground">Text Quality</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-semibold text-sm">{data.codeGeneration}</p>
                    <p className="text-xs text-muted-foreground">Code Quality</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Image className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-semibold text-sm">{data.imageAnalysis}</p>
                    <p className="text-xs text-muted-foreground">Image Support</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-semibold text-sm">{data.multimodal}</p>
                    <p className="text-xs text-muted-foreground">Multimodal</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-semibold text-sm">{data.languages}</p>
                    <p className="text-xs text-muted-foreground">Languages</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-semibold text-sm">{data.integrations}+</p>
                    <p className="text-xs text-muted-foreground">Integrations</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

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
    </div>
  );
};

export default Functions;
