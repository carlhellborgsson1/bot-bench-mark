
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
  Home
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Performance",
    url: "/performance",
    icon: BarChart3,
  },
  {
    title: "Security",
    url: "/security",
    icon: Shield,
  },
  {
    title: "Functions",
    url: "/functions",
    icon: Zap,
  },
  {
    title: "Price",
    url: "/price",
    icon: DollarSign,
  },
  {
    title: "Availability",
    url: "/availability",
    icon: Globe,
  },
  {
    title: "API",
    url: "/api",
    icon: Code,
  },
  {
    title: "License Models",
    url: "/license-models",
    icon: FileText,
  },
];

const useItems = [
  {
    title: "For Private Use",
    url: "/private-use",
    icon: User,
  },
  {
    title: "For Company Use",
    url: "/company-use",
    icon: Building,
  },
];

const toolItems = [
  {
    title: "What AI Chatbot Suits Me",
    url: "/chatbot-matcher",
    icon: Compass,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold">CC</span>
          </div>
          <div>
            <h2 className="font-bold text-lg text-sidebar-foreground">ChatBot Compass</h2>
            <p className="text-xs text-sidebar-foreground/60">AI Comparison Platform</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Comparison Features</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200">
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Use Cases</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {useItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200">
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {toolItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200">
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
