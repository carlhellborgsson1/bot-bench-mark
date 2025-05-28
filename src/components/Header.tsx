
import { Link } from "react-router-dom";
import TopNavigation from "./TopNavigation";

const Header = () => {
  return (
    <div className="bg-transparent">
      <div className="flex items-center justify-between px-8 py-4">
        <Link to="/" className="ml-8">
          <span className="font-bold text-3xl text-white hover:text-white/80 transition-colors">DivideAI</span>
        </Link>
        
        <div className="mr-4">
          <TopNavigation />
        </div>
      </div>
    </div>
  );
};

export default Header;
