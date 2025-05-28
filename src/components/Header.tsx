
import { Link } from "react-router-dom";
import TopNavigation from "./TopNavigation";

const Header = () => {
  return (
    <div className="bg-transparent">
      <div className="flex items-center justify-between px-8 py-4">
        <Link to="/" className="flex items-center gap-3 ml-4">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-blue-600 font-bold text-lg">CC</span>
          </div>
          <span className="font-bold text-2xl text-white">ChatBot Compass</span>
        </Link>
        
        <div className="mr-4">
          <TopNavigation />
        </div>
      </div>
    </div>
  );
};

export default Header;
