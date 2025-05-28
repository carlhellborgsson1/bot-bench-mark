
import { AppSidebar } from "./AppSidebar";
import { useSidebar } from "@/components/ui/sidebar";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 pt-8">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
