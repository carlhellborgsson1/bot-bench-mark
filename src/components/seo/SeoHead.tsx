
interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export const SeoHead = ({ 
  title = "DivideAI - Find Your Perfect AI Chatbot", 
  description = "Compare AI chatbots with data-driven analysis. Find the perfect AI assistant for your needs with comprehensive performance, pricing, and feature comparisons.",
  keywords = "AI chatbot, ChatGPT, Claude, Gemini, AI comparison, artificial intelligence, chatbot review",
  ogImage = "/og-image.jpg"
}: SeoHeadProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href="https://divideai.com" />
    </>
  );
};
