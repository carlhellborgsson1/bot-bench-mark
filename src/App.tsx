
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Performance from "./pages/Performance";
import Security from "./pages/Security";
import Functions from "./pages/Functions";
import Price from "./pages/Price";
import Availability from "./pages/Availability";
import API from "./pages/API";
import LicenseModels from "./pages/LicenseModels";
import PrivateUse from "./pages/PrivateUse";
import CompanyUse from "./pages/CompanyUse";
import ChatbotMatcher from "./pages/ChatbotMatcher";
import AINews from "./pages/AINews";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/security" element={<Security />} />
              <Route path="/functions" element={<Functions />} />
              <Route path="/price" element={<Price />} />
              <Route path="/availability" element={<Availability />} />
              <Route path="/api" element={<API />} />
              <Route path="/license-models" element={<LicenseModels />} />
              <Route path="/private-use" element={<PrivateUse />} />
              <Route path="/company-use" element={<CompanyUse />} />
              <Route path="/chatbot-matcher" element={<ChatbotMatcher />} />
              <Route path="/ai-news" element={<AINews />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
