
import { Activity, Shield, Zap, DollarSign, Globe, Code } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Performance Analysis",
    description: "Compare response times, accuracy, and overall performance metrics across different AI models.",
    iconColor: "text-blue-600", // Changed to blue for visibility
    bgColor: "bg-blue-50"
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Evaluate data protection, encryption standards, and privacy policies of each chatbot.",
    iconColor: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Zap,
    title: "Feature Comparison",
    description: "Side-by-side comparison of capabilities, integrations, and unique features.",
    iconColor: "text-yellow-600",
    bgColor: "bg-yellow-50"
  },
  {
    icon: DollarSign,
    title: "Pricing Analysis",
    description: "Transparent breakdown of costs, subscription models, and value propositions.",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: Globe,
    title: "Availability & Support",
    description: "Check regional availability, language support, and customer service quality.",
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    icon: Code,
    title: "API & Integration",
    description: "Technical specifications, API documentation, and integration possibilities.",
    iconColor: "text-red-600",
    bgColor: "bg-red-50"
  }
];

export const FeaturesGrid = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Comprehensive AI Chatbot Analysis
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Make informed decisions with our detailed comparison framework covering all aspects of AI chatbot performance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.bgColor} mb-4`}>
                <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
