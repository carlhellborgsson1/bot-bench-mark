
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

interface Feature {
  name: string;
  chatgpt: boolean | string;
  claude: boolean | string;
  gemini: boolean | string;
  perplexity: boolean | string;
}

const features: Feature[] = [
  {
    name: "Free Tier Available",
    chatgpt: true,
    claude: true,
    gemini: true,
    perplexity: true
  },
  {
    name: "Web Search",
    chatgpt: true,
    claude: "Limited",
    gemini: true,
    perplexity: true
  },
  {
    name: "Image Analysis",
    chatgpt: true,
    claude: true,
    gemini: true,
    perplexity: true
  },
  {
    name: "Code Generation",
    chatgpt: true,
    claude: true,
    gemini: true,
    perplexity: true
  },
  {
    name: "File Upload",
    chatgpt: true,
    claude: true,
    gemini: true,
    perplexity: "Premium only"
  },
  {
    name: "Video Generation",
    chatgpt: "Coming soon",
    claude: false,
    gemini: true,
    perplexity: false
  },
  {
    name: "API Access",
    chatgpt: true,
    claude: true,
    gemini: true,
    perplexity: true
  },
  {
    name: "Extended Context (200K+)",
    chatgpt: true,
    claude: true,
    gemini: true,
    perplexity: false
  }
];

export const ComparisonTable = () => {
  const renderCell = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-green-600 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-red-500 mx-auto" />
      );
    }
    return <span className="text-sm text-blue-600 font-medium">{value}</span>;
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-900">
              Feature Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">GPT-5</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Claude 4.5</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Gemini 2.5</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Perplexity</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={feature.name} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-3 px-4 font-medium text-gray-900">{feature.name}</td>
                      <td className="py-3 px-4 text-center">{renderCell(feature.chatgpt)}</td>
                      <td className="py-3 px-4 text-center">{renderCell(feature.claude)}</td>
                      <td className="py-3 px-4 text-center">{renderCell(feature.gemini)}</td>
                      <td className="py-3 px-4 text-center">{renderCell(feature.perplexity)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
