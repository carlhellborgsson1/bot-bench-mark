
import { Answers, Recommendation } from "@/types/chatbot";

export const getAffiliateLink = (chatbotName: string): string => {
  const affiliateLinks: Record<string, string> = {
    "Gemini Pro": "https://gemini.google.com/",
    "ChatGPT Plus (GPT-4)": "https://openai.com/chatgpt/pricing/",
    "ChatGPT Plus": "https://openai.com/chatgpt/pricing/",
    "Claude 3": "https://www.anthropic.com/pricing",
    "GPT-4 Enterprise": "https://openai.com/chatgpt/pricing/#enterprise",
    "Claude for Work": "https://www.anthropic.com/pricing",
    "Google Workspace AI": "https://workspace.google.com/pricing.html?source=gafb-ai-plan-en&hl=en&ga_region=noram&ga_country=us&ga_lang=en",
    "GPT-4": "https://openai.com/chatgpt/pricing/",
    "ChatGPT Free": "https://chat.openai.com/",
    "Claude Free": "https://claude.ai/",
    "Perplexity Free": "https://perplexity.ai/",
    "Perplexity AI": "https://perplexity.ai/pro",
    "Microsoft Copilot": "https://copilot.microsoft.com/",
    "Llama 2 70B": "https://llama.meta.com/",
    "Mistral 7B": "https://mistral.ai/"
  };
  
  return affiliateLinks[chatbotName] || "https://openai.com/chatgpt/pricing/";
};

export const getRecommendation = (answers: Answers): Recommendation => {
  const { useCase, budget, priority, teamSize } = answers;

  // BUDGET CONSTRAINTS - Always respect "free only" selections
  if (budget === "free") {
    if (useCase === "research") {
      return {
        primary: "Perplexity Free",
        reason: "Excellent free research tool with web search capabilities",
        alternatives: ["ChatGPT Free", "Gemini Pro", "Claude Free", "Microsoft Copilot"],
        features: ["Web search integration", "Source citations", "Research-focused", "Completely free"]
      };
    }
    if (priority === "privacy") {
      return {
        primary: "Claude Free",
        reason: "Best privacy protection in the free tier with constitutional AI",
        alternatives: ["Local AI models", "Gemini Pro", "Mistral 7B"],
        features: ["No data training", "Constitutional AI", "Privacy-focused", "Completely free"]
      };
    }
    if (useCase === "creative") {
      return {
        primary: "ChatGPT Free",
        reason: "Best free option for creative tasks and brainstorming",
        alternatives: ["Gemini Pro", "Claude Free", "Microsoft Copilot"],
        features: ["Creative writing", "Brainstorming", "Versatile", "Completely free"]
      };
    }
    // Default free recommendation
    return {
      primary: "Gemini Pro",
      reason: "Best overall free AI with Google integration and no usage limits",
      alternatives: ["ChatGPT Free", "Claude Free", "Perplexity Free", "Microsoft Copilot"],
      features: ["Completely free", "Google integration", "Multimodal", "No usage limits"]
    };
  }

  // For non-free budgets, proceed with expanded recommendations
  
  // Personal use recommendations
  if (useCase === "personal") {
    if (priority === "privacy") {
      return {
        primary: "Claude 3",
        reason: "Best privacy protection with no data retention",
        alternatives: ["Mistral 7B", "ChatGPT (history off)", "Local models", "Llama 2 70B"],
        features: ["No data storage", "Constitutional AI", "Long context", "Excellent reasoning"]
      };
    }
    if (priority === "speed") {
      return {
        primary: "Mistral 7B",
        reason: "Fastest response times with efficient processing",
        alternatives: ["ChatGPT-3.5", "Llama 2 70B", "Gemini Pro"],
        features: ["Ultra-fast responses", "Efficient processing", "Good for quick tasks", "Cost-effective"]
      };
    }
    return {
      primary: "ChatGPT Plus (GPT-4)",
      reason: "Most versatile for personal use with plugin ecosystem",
      alternatives: ["Claude 3 Pro", "Gemini Advanced", "Perplexity Pro", "Microsoft Copilot"],
      features: ["Plugin access", "Image analysis", "Web browsing", "Most capable"]
    };
  }

  // Business use recommendations
  if (useCase === "business") {
    if (teamSize === "large" || budget === "enterprise") {
      return {
        primary: "Microsoft Copilot",
        reason: "Best enterprise integration with Office 365 and Azure",
        alternatives: ["GPT-4 Enterprise", "Claude for Work", "Google Workspace AI"],
        features: ["Office integration", "Enterprise security", "Azure connectivity", "Team collaboration"]
      };
    }
    if (priority === "privacy") {
      return {
        primary: "Claude for Work",
        reason: "Enterprise-grade privacy with constitutional AI safety",
        alternatives: ["Mistral 7B", "GPT-4 Enterprise", "On-premise solutions", "Llama 2 70B"],
        features: ["No training data usage", "EU data centers", "Constitutional AI", "Long context"]
      };
    }
    return {
      primary: "Google Workspace AI",
      reason: "Seamless integration with existing business tools",
      alternatives: ["Microsoft Copilot", "GPT-4 Enterprise", "Claude for Work", "Perplexity AI"],
      features: ["Native Workspace integration", "Competitive pricing", "Easy deployment", "Familiar interface"]
    };
  }

  // Creative use recommendations
  if (useCase === "creative") {
    return {
      primary: "GPT-4",
      reason: "Best creative capabilities with multimodal features",
      alternatives: ["Claude 3", "Gemini Pro", "Microsoft Copilot", "Perplexity AI"],
      features: ["Image generation", "Creative writing", "Brainstorming", "Plugin ecosystem"]
    };
  }

  // Research use recommendations
  if (useCase === "research") {
    return {
      primary: "Perplexity AI",
      reason: "Specialized research AI with web search and citations",
      alternatives: ["Claude 3", "GPT-4", "Gemini Pro", "Microsoft Copilot"],
      features: ["Real-time web search",  "Source citations", "Academic focus", "Research optimization"]
    };
  }

  // Default fallback
  return {
    primary: "ChatGPT Plus",
    reason: "Most balanced option for general use",
    alternatives: ["Claude 3", "Gemini Pro", "Perplexity AI", "Microsoft Copilot"],
    features: ["Versatile capabilities", "Regular updates", "Large community", "Good documentation"]
  };
};
