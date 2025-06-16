
import { useSearchParams, useNavigate } from "react-router-dom";
import { SearchBar } from "@/components/search/SearchBar";
import { SeoHead } from "@/components/seo/SeoHead";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';

  const handleSearch = (newQuery: string) => {
    // Update URL with new search query
    const newSearchParams = new URLSearchParams();
    newSearchParams.set('q', newQuery);
    window.location.href = `/search?${newSearchParams.toString()}`;
  };

  const handleChatbotClick = (chatbotName: string) => {
    // Navigate to comparison page - using the home page as the comparison page
    navigate('/');
  };

  // Mock search results - in a real app, this would come from an API
  const mockResults = [
    { name: "ChatGPT", description: "OpenAI's conversational AI assistant", category: "General Purpose" },
    { name: "Claude", description: "Anthropic's AI assistant focused on safety", category: "General Purpose" },
    { name: "Gemini", description: "Google's multimodal AI assistant", category: "General Purpose" },
    { name: "Copilot", description: "Microsoft's AI-powered assistant", category: "Productivity" },
  ];

  const filteredResults = query 
    ? mockResults.filter(result => 
        result.name.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase())
      )
    : mockResults;

  return (
    <>
      <SeoHead 
        title={`Search Results${query ? ` for "${query}"` : ''} - DivideAI`}
        description={`Search results for AI chatbots${query ? ` matching "${query}"` : ''}`}
      />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Search Results Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {query ? `Search Results for "${query}"` : 'All AI Chatbots'}
            </h1>
            <p className="text-gray-600 mt-2">
              {filteredResults.length} chatbot{filteredResults.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResults.map((result, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleChatbotClick(result.name)}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{result.name}</h3>
                <p className="text-gray-600 mb-3">{result.description}</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {result.category}
                </span>
              </div>
            ))}
          </div>

          {/* No Results */}
          {query && filteredResults.length === 0 && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">No results found</h2>
              <p className="text-gray-600 mb-6">
                Try searching with different keywords or browse all available chatbots.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
