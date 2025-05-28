
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { toggleSidebar, open } = useSidebar();

  return (
    <>
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">CC</span>
            </div>
            <span className="font-bold text-2xl">ChatBot Compass</span>
          </Link>
          
          <div className="w-10"></div>
        </div>
      </div>
      {open && (
        <Separator orientation="vertical" className="h-full bg-gray-200" />
      )}
    </>
  );
};

export default Header;
