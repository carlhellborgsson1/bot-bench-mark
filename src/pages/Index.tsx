
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { CTASection } from "@/components/home/CTASection";
import { SearchBar } from "@/components/search/SearchBar";
import { UserReviews } from "@/components/reviews/UserReviews";
import { ComparisonTable } from "@/components/comparison/ComparisonTable";
import { NewsletterSignup } from "@/components/newsletter/NewsletterSignup";
import { SeoHead } from "@/components/seo/SeoHead";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // In a real app, this would filter content or navigate to search results
    console.log("Searching for:", query);
  };

  return (
    <>
      <SeoHead />
      <div className="min-h-screen">
        <HeroSection />
        
        {/* Search Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SearchBar onSearch={handleSearch} />
          </div>
        </section>

        <StatsSection />
        <ComparisonTable />
        <FeaturesGrid />
        <UserReviews />
        <NewsletterSignup />
        <CTASection />
      </div>
    </>
  );
};

export default Index;
