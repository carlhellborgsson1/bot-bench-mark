
import { Link } from "react-router-dom";
import TopNavigation from "./TopNavigation";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <div className="bg-transparent">
      <div className="flex items-center justify-between px-4 sm:px-8 py-4">
        <Link to="/" className="ml-2 sm:ml-8">
          <span className="font-bold text-2xl sm:text-3xl text-white hover:text-white/80 transition-colors">DivideAI</span>
        </Link>
        
        <div className="mr-2 sm:mr-8 flex items-center gap-4">
          <ThemeToggle />
          <TopNavigation />
        </div>
      </div>
    </div>
  );
};

export default Header;
