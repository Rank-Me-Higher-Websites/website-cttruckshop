import Header from "./Header";
import Footer from "./Footer";
import StickyContactBar from "@/components/StickyContactBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-16 md:pb-0">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
