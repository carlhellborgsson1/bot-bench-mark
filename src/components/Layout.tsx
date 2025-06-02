
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-transparent">
      <Header />
      <main className="flex-1 pt-8 bg-transparent">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
