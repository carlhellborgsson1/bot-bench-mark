
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, FileText, Image, Code, Brain, Zap } from "lucide-react";

interface FunctionData {
  chatbot: string;
  textGeneration: string;
  codeGeneration: string;
  imageAnalysis: string;
  multimodal: string;
  languages: number;
  integrations: number;
  score: number;
}

interface FunctionDataCardProps {
  data: FunctionData;
  index: number;
}

const FunctionDataCard = ({ data, index }: FunctionDataCardProps) => {
  return (
    <Card 
      className="hover:shadow-lg transition-all duration-300 animate-fade-in" 
      style={{ animationDelay: `${index * 100}ms` }}
    >
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
  );
};

export default FunctionDataCard;
