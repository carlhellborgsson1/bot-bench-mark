
import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "DivideAI",
      "description": "Compare AI chatbots with comprehensive analysis",
      "url": "https://divideai.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://divideai.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full bg-transparent">
      <Header />
      <main className="flex-1 pt-8 bg-transparent">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
