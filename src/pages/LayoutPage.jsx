import Footer from "../components/shared/Footer";
import Navbar from "../components/nav/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="font-family-1 scroll-smooth">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;
