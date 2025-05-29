
import { Question } from "@/types/chatbot";
import { Users, Building, DollarSign, Palette, BookOpen, CheckCircle, Shield, Compass, User, Globe } from "lucide-react";

export const questions: Question[] = [
  {
    id: "useCase",
    title: "What's your primary use case?",
    description: "Select the main purpose for using AI chatbots",
    options: [
      { value: "personal", label: "Personal Use", icon: Users },
      { value: "business", label: "Business/Enterprise", icon: Building },
      { value: "creative", label: "Creative Projects", icon: Palette },
      { value: "research", label: "Research & Learning", icon: BookOpen }
    ]
  },
  {
    id: "budget",
    title: "What's your budget preference?",
    description: "Choose your preferred pricing tier",
    options: [
      { value: "free", label: "Free Only", icon: DollarSign },
      { value: "low", label: "$1-20/month", icon: DollarSign },
      { value: "medium", label: "$20-60/month", icon: DollarSign },
      { value: "enterprise", label: "Enterprise (Custom)", icon: DollarSign }
    ]
  },
  {
    id: "priority", 
    title: "What's most important to you?",
    description: "Select your top priority",
    options: [
      { value: "performance", label: "Best Performance", icon: CheckCircle },
      { value: "privacy", label: "Privacy & Security", icon: Shield },
      { value: "features", label: "Advanced Features", icon: Compass },
      { value: "ease", label: "Ease of Use", icon: CheckCircle }
    ]
  },
  {
    id: "teamSize",
    title: "How many people will use it?",
    description: "Choose your team size",
    options: [
      { value: "individual", label: "Just Me", icon: User },
      { value: "small", label: "2-10 People", icon: Users },
      { value: "medium", label: "11-100 People", icon: Building },
      { value: "large", label: "100+ People", icon: Globe }
    ]
  }
];
