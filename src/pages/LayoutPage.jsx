import Footer from "../components/shared/Footer";
import Navbar from "../components/nav/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Layout() {
  const location = useLocation();
  useEffect(() => {
    document.title = "Movie Zone";
  }, [location]);
  return (
    <main className="font-family-1 scroll-smooth">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;
