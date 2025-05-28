
import { AppSidebar } from "./AppSidebar";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { open } = useSidebar();

  return (
    <>
      <AppSidebar />
      {open && (
        <Separator orientation="vertical" className="h-full bg-gray-200" />
      )}
      <main className="flex-1 overflow-auto">
        <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="flex items-center gap-4 p-4">
            <SidebarTrigger className="hover:bg-accent hover:text-accent-foreground transition-colors" />
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="font-semibold text-lg">ChatBot Compass</span>
            </Link>
          </div>
        </div>
        <div className="p-6">
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
