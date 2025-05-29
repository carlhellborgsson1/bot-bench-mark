import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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
  Menu,
  X,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const TopNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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

  if (isMobile) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white p-2 hover:text-white/80 transition-colors"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {isMobileMenuOpen && (
          <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
            <div className="p-4">
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Comparison Features</h3>
                <div className="space-y-1">
                  {comparisonFeatures.map((item) => (
                    <Link
                      key={item.title}
                      to={item.url}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded cursor-pointer"
                    >
                      <item.icon className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-800 text-sm">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Use Cases</h3>
                <div className="space-y-1">
                  {useCases.map((item) => (
                    <Link
                      key={item.title}
                      to={item.url}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded cursor-pointer"
                    >
                      <item.icon className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-800 text-sm">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Tools</h3>
                <div className="space-y-1">
                  {tools.map((item) => (
                    <Link
                      key={item.title}
                      to={item.url}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded cursor-pointer"
                    >
                      <item.icon className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-800 text-sm">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">News</h3>
                <div className="space-y-1">
                  <Link
                    to="/ai-news"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-2 py-2 text-gray-800 hover:bg-gray-50 rounded text-sm font-medium"
                  >
                    AI News
                  </Link>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-200">
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-2 py-2 text-gray-800 hover:bg-gray-50 rounded text-sm font-medium"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-8">
      {/* Comparison Features Dropdown */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white text-lg font-medium hover:text-white/80 transition-colors bg-transparent border-none data-[state=open]:bg-transparent data-[active]:bg-transparent">
              Comparison Features
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-56 bg-white border border-gray-200 shadow-lg z-50 p-2">
              {comparisonFeatures.map((item) => (
                <NavigationMenuLink key={item.title} asChild>
                  <Link
                    to={item.url}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer rounded-md"
                  >
                    <item.icon className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-800">{item.title}</span>
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Use Cases Dropdown */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white text-lg font-medium hover:text-white/80 transition-colors bg-transparent border-none data-[state=open]:bg-transparent data-[active]:bg-transparent">
              Use Cases
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-56 bg-white border border-gray-200 shadow-lg z-50 p-2">
              {useCases.map((item) => (
                <NavigationMenuLink key={item.title} asChild>
                  <Link
                    to={item.url}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer rounded-md"
                  >
                    <item.icon className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-800">{item.title}</span>
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Tools Dropdown */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white text-lg font-medium hover:text-white/80 transition-colors bg-transparent border-none data-[state=open]:bg-transparent data-[active]:bg-transparent">
              Tools
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-56 bg-white border border-gray-200 shadow-lg z-50 p-2">
              {tools.map((item) => (
                <NavigationMenuLink key={item.title} asChild>
                  <Link
                    to={item.url}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer rounded-md"
                  >
                    <item.icon className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-800">{item.title}</span>
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* News Link (no dropdown) */}
      <Link
        to="/ai-news"
        className="text-white text-lg font-medium hover:text-white/80 transition-colors"
      >
        News
      </Link>

      {/* About Link */}
      <Link
        to="/about"
        className="text-white text-lg font-medium hover:text-white/80 transition-colors"
      >
        About
      </Link>
    </div>
  );
};

export default TopNavigation;
