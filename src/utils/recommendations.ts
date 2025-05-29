
import { Answers, Recommendation } from "@/types/chatbot";

export const getAffiliateLink = (chatbotName: string): string => {
  const affiliateLinks: Record<string, string> = {
    "Gemini Pro": "https://gemini.google.com/",
    "ChatGPT Plus (GPT-4)": "https://chat.openai.com/",
    "ChatGPT Plus": "https://chat.openai.com/",
    "Claude 3": "https://claude.ai/",
    "GPT-4 Enterprise": "https://openai.com/enterprise",
    "Claude for Work": "https://claude.ai/",
    "Google Workspace AI": "https://workspace.google.com/",
    "GPT-4": "https://chat.openai.com/"
  };
  
  return affiliateLinks[chatbotName] || "https://chat.openai.com/";
};

export const getRecommendation = (answers: Answers): Recommendation => {
  const { useCase, budget, priority, teamSize } = answers;

  // Personal use recommendations
  if (useCase === "personal") {
    if (budget === "free") {
      return {
        primary: "Gemini Pro",
        reason: "Free tier with excellent capabilities",
        alternatives: ["ChatGPT-3.5", "Claude (basic)"],
        features: ["Completely free", "Google integration", "Multimodal", "Fast responses"]
      };
    }
    if (priority === "privacy") {
      return {
        primary: "Claude 3",
        reason: "Best privacy protection with no data retention",
        alternatives: ["ChatGPT (history off)", "Local models"],
        features: ["No data storage", "Constitutional AI", "Long context", "Excellent reasoning"]
      };
    }
    return {
      primary: "ChatGPT Plus (GPT-4)",
      reason: "Most versatile for personal use with plugin ecosystem",
      alternatives: ["Claude 3 Pro", "Gemini Advanced"],
      features: ["Plugin access", "Image analysis", "Web browsing", "Most capable"]
    };
  }

  // Business use recommendations
  if (useCase === "business") {
    if (teamSize === "large" || budget === "enterprise") {
      return {
        primary: "GPT-4 Enterprise",
        reason: "Comprehensive enterprise solution with advanced security",
        alternatives: ["Claude for Work", "Google Workspace AI"],
        features: ["SSO integration", "Admin controls", "Data encryption", "Priority support"]
      };
    }
    if (priority === "privacy") {
      return {
        primary: "Claude for Work",
        reason: "Enterprise-grade privacy with constitutional AI safety",
        alternatives: ["GPT-4 Enterprise", "On-premise solutions"],
        features: ["No training data usage", "EU data centers", "Constitutional AI", "Long context"]
      };
    }
    return {
      primary: "Google Workspace AI",
      reason: "Seamless integration with existing business tools",
      alternatives: ["GPT-4 Enterprise", "Claude for Work"],
      features: ["Native Workspace integration", "Competitive pricing", "Easy deployment", "Familiar interface"]
    };
  }

  // Creative use recommendations
  if (useCase === "creative") {
    return {
      primary: "GPT-4",
      reason: "Best creative capabilities with multimodal features",
      alternatives: ["Claude 3", "Midjourney integration"],
      features: ["Image generation", "Creative writing", "Brainstorming", "Plugin ecosystem"]
    };
  }

  // Research use recommendations
  if (useCase === "research") {
    return {
      primary: "Claude 3",
      reason: "Excellent for analysis with 200K token context window",
      alternatives: ["GPT-4", "Perplexity AI"],
      features: ["Long context analysis", "Excellent reasoning", "Academic writing", "Citation support"]
    };
  }

  // Default fallback
  return {
    primary: "ChatGPT Plus",
    reason: "Most balanced option for general use",
    alternatives: ["Claude 3", "Gemini Pro"],
    features: ["Versatile capabilities", "Regular updates", "Large community", "Good documentation"]
  };
};
