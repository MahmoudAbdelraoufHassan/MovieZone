import { Sun, Menu, Moon, X } from "lucide-react";
import NavbarSearch from "./NavbarSearch";
import { useEffect, useState, useRef } from "react";
import NavbarSearchList from "./NavbarSearchList";
import { BASE_URL, options } from "../../constants";
import Theme from "../shared/Theme";
import NavMenu from "./NavMenu";
import Logo from "../shared/Logo";
function Navbar() {
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [theme, toggleTheme] = Theme();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);

  const menuToggler = () => {
    setIsMenuActive((isActive) => !isActive);
    setSearchActive(false);
    setQuery("");
  };
  const searchToggler = () => {
    setSearchActive((isActive) => !isActive);
    setIsMenuActive(false);
  };
  const searchData = {
    result,
    query,
    loading,
    error,
    setQuery,
    isSearchActive,
    searchToggler,
  };

  useEffect(() => {
    if (isSearchActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isSearchActive]);

  useEffect(() => {
    const prevWidth = { current: window.innerWidth };

    function handleResize() {
      if (window.innerWidth !== prevWidth.current) {
        prevWidth.current = window.innerWidth;
        setSearchActive(false);
        setQuery("");
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!query) return;

    const searchByQuery = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${BASE_URL}/search/multi?query=${encodeURIComponent(query)}`,
          options,
        );
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setResult(data.results);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    searchByQuery();
  }, [query]);

  return (
    <nav className="w-full p-2 fixed z-60">
      <div className="container mx-auto flex justify-between items-center bg-black/40 backdrop-blur-md py-4 px-4 rounded-lg shadow-md border border-white/20">
        <Logo />
        <NavMenu isMenuActive={false} />

        <div className="flex gap-4">
          <NavbarSearch
            query={query}
            setQuery={setQuery}
            isSearchActive={isSearchActive}
            onSearchActive={searchToggler}
          />
          <button
            onClick={toggleTheme}
            className="cursor-pointer bg-white/20 p-2 rounded-full dark:bg-red-600 duration-300"
          >
            {theme === "dark" ? <Moon color="#ffff" /> : <Sun color="#ffff" />}
          </button>

          <button
            onClick={menuToggler}
            className={`cursor-pointer  p-2 rounded-full ${isMenuActive ? "bg-red-600" : "bg-white/20"} flex lg:hidden duration-300`}
          >
            {isMenuActive ? <X color="#ffff" /> : <Menu color="#ffff" />}
          </button>
        </div>
      </div>
      <div className="container relative mx-auto">
        {!isSearchActive && <NavbarSearchList {...searchData} />}
        {/* <CategoriesDropdown isDropdownOpen={isDropdownOpen} /> */}
        <div className="lg:hidden">
          <NavMenu isMenuActive={isMenuActive} onToggleMenu={menuToggler} />
        </div>
      </div>
      {isSearchActive && (
        <div className="absolute left-0 top-0 bg-black/40 w-full h-screen -z-10 backdrop-blur-sm">
          <NavbarSearchList {...searchData} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
