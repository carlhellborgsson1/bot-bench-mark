
import { LucideIcon } from "lucide-react";

export interface QuestionOption {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface Question {
  id: string;
  title: string;
  description: string;
  options: QuestionOption[];
}

export interface Recommendation {
  primary: string;
  reason: string;
  alternatives: string[];
  features: string[];
}

export type Answers = Record<string, string>;
