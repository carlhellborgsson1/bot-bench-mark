
import { AppSidebar } from "./AppSidebar";
import { useSidebar } from "@/components/ui/sidebar";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppSidebar />
      <main className="flex-1 overflow-auto flex flex-col">
        <Header />
        <div className="p-6 flex-1">
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
