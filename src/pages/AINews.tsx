
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ExternalLink, TrendingUp, Zap, Brain, Cpu } from 'lucide-react';

const AINews = () => {
  const allNewsArticles = [
    {
      id: 1,
      title: "GPT-5 Release: Revolutionary Breakthrough in AI Reasoning",
      summary: "OpenAI announces GPT-5 with unprecedented reasoning capabilities and multimodal understanding.",
      category: "Product Launch",
      date: "2024-12-15",
      readTime: "5 min read",
      trending: true,
      icon: Brain,
      color: "bg-blue-500",
      url: "https://techcrunch.com/2024/12/09/openai-announces-o3-its-next-simulated-reasoning-model/"
    },
    {
      id: 2,
      title: "Google's Gemini Ultra Achieves Human-Level Performance",
      summary: "Latest benchmarks show Gemini Ultra matching human experts across multiple domains.",
      category: "Research",
      date: "2024-12-14",
      readTime: "4 min read",
      trending: true,
      icon: TrendingUp,
      color: "bg-green-500",
      url: "https://blog.google/technology/ai/google-gemini-ai/"
    },
    {
      id: 3,
      title: "Claude 3.5 Introduces Advanced Code Generation",
      summary: "Anthropic's latest update brings significant improvements to programming assistance.",
      category: "Update",
      date: "2024-12-13",
      readTime: "3 min read",
      trending: false,
      icon: Cpu,
      color: "bg-purple-500",
      url: "https://www.anthropic.com/news/claude-3-5-sonnet"
    },
    {
      id: 4,
      title: "AI Regulation Framework Approved by EU Parliament",
      summary: "New comprehensive regulations set global standards for AI development and deployment.",
      category: "Policy",
      date: "2024-12-12",
      readTime: "6 min read",
      trending: false,
      icon: Zap,
      color: "bg-orange-500",
      url: "https://www.reuters.com/technology/artificial-intelligence/eu-ai-act-2024-06-12/"
    },
    {
      id: 5,
      title: "Microsoft Copilot Integration Expands to Enterprise",
      summary: "Enterprise-wide deployment brings AI assistance to millions of business users.",
      category: "Business",
      date: "2024-12-11",
      readTime: "4 min read",
      trending: false,
      icon: Brain,
      color: "bg-indigo-500",
      url: "https://blogs.microsoft.com/blog/2023/03/16/introducing-microsoft-365-copilot-your-copilot-for-work/"
    },
    {
      id: 6,
      title: "Breakthrough in AI Energy Efficiency",
      summary: "New neural network architecture reduces energy consumption by 90% while maintaining performance.",
      category: "Research",
      date: "2024-12-10",
      readTime: "5 min read",
      trending: false,
      icon: Zap,
      color: "bg-emerald-500",
      url: "https://www.nature.com/articles/s41586-023-06747-5"
    },
    {
      id: 7,
      title: "Meta's Llama 3 Outperforms Competitors in New Benchmarks",
      summary: "Open-source model shows significant improvements in reasoning and factual accuracy.",
      category: "Research",
      date: "2024-12-09",
      readTime: "4 min read",
      trending: false,
      icon: TrendingUp,
      color: "bg-red-500",
      url: "https://ai.meta.com/blog/meta-llama-3/"
    },
    {
      id: 8,
      title: "AI Chips Market Reaches $100 Billion Milestone",
      summary: "Semiconductor industry sees unprecedented growth driven by AI demand.",
      category: "Business",
      date: "2024-12-08",
      readTime: "3 min read",
      trending: false,
      icon: Cpu,
      color: "bg-yellow-500",
      url: "https://www.cnbc.com/2024/08/28/nvidia-earnings-q2-2025.html"
    },
    {
      id: 9,
      title: "Robotics AI Makes Major Breakthrough in Dexterity",
      summary: "New algorithms enable robots to perform complex manipulation tasks with human-like precision.",
      category: "Research",
      date: "2024-12-07",
      readTime: "5 min read",
      trending: false,
      icon: Brain,
      color: "bg-teal-500",
      url: "https://www.science.org/doi/10.1126/scirobotics.adi2856"
    },
    {
      id: 10,
      title: "AI Safety Institute Releases New Guidelines",
      summary: "Comprehensive framework for evaluating and mitigating AI risks in development.",
      category: "Policy",
      date: "2024-12-06",
      readTime: "6 min read",
      trending: false,
      icon: Zap,
      color: "bg-pink-500",
      url: "https://www.aisi.gov.uk/"
    },
    {
      id: 11,
      title: "Quantum-AI Hybrid Computing Shows Promise",
      summary: "Researchers demonstrate quantum-classical hybrid systems for enhanced AI performance.",
      category: "Research",
      date: "2024-12-05",
      readTime: "7 min read",
      trending: false,
      icon: Cpu,
      color: "bg-cyan-500",
      url: "https://research.ibm.com/blog/quantum-ai-foundation-models"
    },
    {
      id: 12,
      title: "AI-Powered Drug Discovery Accelerates Clinical Trials",
      summary: "Machine learning models reduce drug development time from years to months.",
      category: "Research",
      date: "2024-12-04",
      readTime: "5 min read",
      trending: false,
      icon: Brain,
      color: "bg-violet-500",
      url: "https://www.nature.com/articles/s41586-023-06221-2"
    }
  ];

  const categories = ["All", "Product Launch", "Research", "Update", "Policy", "Business"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [articlesPerPage] = React.useState(6);
  const [currentPage, setCurrentPage] = React.useState(1);

  const filteredArticles = selectedCategory === "All" 
    ? allNewsArticles 
    : allNewsArticles.filter(article => article.category === selectedCategory);

  const displayedArticles = filteredArticles.slice(0, currentPage * articlesPerPage);
  const hasMoreArticles = displayedArticles.length < filteredArticles.length;

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">AI News Hub</h1>
        </div>
        <p className="text-xl text-white max-w-3xl mx-auto">
          Stay updated with the latest developments in artificial intelligence, from breakthrough research to industry updates.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => handleCategoryChange(category)}
            className="text-sm"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedArticles.map((article) => {
          const IconComponent = article.icon;
          return (
            <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 ${article.color} rounded-lg flex items-center justify-center`}>
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  {article.trending && (
                    <Badge variant="destructive" className="bg-red-500">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                  {article.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <span>{article.readTime}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {article.summary}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {article.category}
                  </Badge>
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      Read More
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Load More Section */}
      <div className="text-center mt-12">
        {hasMoreArticles && (
          <Button variant="outline" size="lg" className="px-8" onClick={handleLoadMore}>
            Load More Articles
          </Button>
        )}
        <p className="text-sm text-white mt-4">
          Showing {displayedArticles.length} of {filteredArticles.length} articles
        </p>
      </div>
    </div>
  );
};

export default AINews;
