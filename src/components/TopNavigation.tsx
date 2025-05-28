
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BarChart3,
  Shield,
  Zap,
  DollarSign,
  Globe,
  Code,
  FileText,
  User,
  Building,
  Compass,
} from "lucide-react";

const TopNavigation = () => {
  const comparisonFeatures = [
    { title: "Performance", url: "/performance", icon: BarChart3 },
    { title: "Security", url: "/security", icon: Shield },
    { title: "Functions", url: "/functions", icon: Zap },
    { title: "Price", url: "/price", icon: DollarSign },
    { title: "Availability", url: "/availability", icon: Globe },
    { title: "API", url: "/api", icon: Code },
    { title: "License Models", url: "/license-models", icon: FileText },
  ];

  const useCases = [
    { title: "For Private Use", url: "/private-use", icon: User },
    { title: "For Company Use", url: "/company-use", icon: Building },
  ];

  const tools = [
    { title: "What AI Chatbot Suits Me", url: "/chatbot-matcher", icon: Compass },
  ];

  return (
    <nav className="flex items-center gap-8">
      {/* Comparison Features Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger className="text-white text-lg font-medium hover:text-white/80 transition-colors cursor-pointer bg-transparent border-none">
          Comparison Features
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg z-50">
          {comparisonFeatures.map((item) => (
            <DropdownMenuItem key={item.title} asChild>
              <Link
                to={item.url}
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer"
              >
                <item.icon className="h-4 w-4 text-blue-600" />
                <span className="text-gray-800">{item.title}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Use Cases Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger className="text-white text-lg font-medium hover:text-white/80 transition-colors cursor-pointer bg-transparent border-none">
          Use Cases
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg z-50">
          {useCases.map((item) => (
            <DropdownMenuItem key={item.title} asChild>
              <Link
                to={item.url}
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer"
              >
                <item.icon className="h-4 w-4 text-blue-600" />
                <span className="text-gray-800">{item.title}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Tools Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger className="text-white text-lg font-medium hover:text-white/80 transition-colors cursor-pointer bg-transparent border-none">
          Tools
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg z-50">
          {tools.map((item) => (
            <DropdownMenuItem key={item.title} asChild>
              <Link
                to={item.url}
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer"
              >
                <item.icon className="h-4 w-4 text-blue-600" />
                <span className="text-gray-800">{item.title}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* About Link */}
      <Link
        to="/about"
        className="text-white text-lg font-medium hover:text-white/80 transition-colors"
      >
        About
      </Link>
    </nav>
  );
};

export default TopNavigation;
