
import { useSidebar } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="bg-transparent shadow-sm">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="hover:bg-white/20 hover:text-white transition-colors text-white"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-blue-600 font-bold text-lg">CC</span>
            </div>
            <span className="font-bold text-2xl text-white">ChatBot Compass</span>
          </Link>
        </div>
        
        <div className="w-10"></div>
      </div>
    </div>
  );
};

export default Header;
