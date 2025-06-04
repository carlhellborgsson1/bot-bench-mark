
import FunctionsHeader from "@/components/functions/FunctionsHeader";
import FunctionExplanation from "@/components/functions/FunctionExplanation";
import FunctionDataCard from "@/components/functions/FunctionDataCard";
import FunctionSummaryCards from "@/components/functions/FunctionSummaryCards";

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
    },
    {
      chatbot: "Perplexity AI",
      textGeneration: "Very Good",
      codeGeneration: "Fair",
      imageAnalysis: "Limited",
      multimodal: "Limited",
      languages: 75,
      integrations: 25,
      score: 8.3
    },
    {
      chatbot: "Microsoft Copilot",
      textGeneration: "Very Good",
      codeGeneration: "Excellent",
      imageAnalysis: "Yes",
      multimodal: "Yes",
      languages: 80,
      integrations: 60,
      score: 8.7
    },
    {
      chatbot: "Llama 2 70B",
      textGeneration: "Good",
      codeGeneration: "Good",
      imageAnalysis: "No",
      multimodal: "No",
      languages: 70,
      integrations: 20,
      score: 7.8
    },
    {
      chatbot: "Mistral 7B",
      textGeneration: "Good",
      codeGeneration: "Fair",
      imageAnalysis: "No",
      multimodal: "No",
      languages: 65,
      integrations: 15,
      score: 7.2
    }
  ];

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <FunctionsHeader />
      <FunctionExplanation />
      
      <div className="grid gap-6 mb-8">
        {functionalityData.map((data, index) => (
          <FunctionDataCard key={data.chatbot} data={data} index={index} />
        ))}
      </div>

      <FunctionSummaryCards />
    </div>
  );
};

export default Functions;
