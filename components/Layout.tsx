import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: string }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
