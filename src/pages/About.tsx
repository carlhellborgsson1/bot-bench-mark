
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutFeatures from "@/components/about/AboutFeatures";
import AboutValues from "@/components/about/AboutValues";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in bg-transparent">
      {/* Back Button */}
      <div className="mb-8">
        <Button asChild variant="ghost" className="hover:bg-white/10 transition-all duration-300">
          <Link to="/" className="flex items-center gap-2 group">
            <ArrowLeft className="h-4 w-4 text-white group-hover:text-blue-200 transition-colors" />
            <span className="text-white group-hover:text-blue-200 transition-colors">Back to Home</span>
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <AboutHero />

      {/* Mission Statement - Featured */}
      <AboutMission />

      {/* What We Do & Key Features */}
      <AboutFeatures />

      {/* Values Section */}
      <AboutValues />

      {/* Call to Action */}
      <AboutCTA />
    </div>
  );
};

export default About;
