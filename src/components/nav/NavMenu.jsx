import { NavLink } from "react-router-dom";

function NavMenu({ isMenuActive, onToggleMenu = null }) {
  if (isMenuActive)
    return (
      <ul className="absolute flex flex-col lg:hidden right-0 top-2 bg-black/30 border border-white/20 backdrop-blur-sm py-2 px-3 rounded-xl gap-8 w-50 text-white flex-1 ml-8 items-center ">
        <li>
          <NavLink
            onClick={() => onToggleMenu()}
            className={({ isActive }) =>
              isActive
                ? "relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-0.5 after:bg-red-500 after:rounded-2xl"
                : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => onToggleMenu()}
            className={({ isActive }) =>
              isActive
                ? "relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-0.5 after:bg-red-500 after:rounded-2xl"
                : ""
            }
            to="/Movies"
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => onToggleMenu()}
            className={({ isActive }) =>
              isActive
                ? "relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-0.5 after:bg-red-500 after:rounded-2xl"
                : ""
            }
            to="/Series"
          >
            Series
          </NavLink>
        </li>
      </ul>
    );

  return (
    <ul className="lg:flex gap-8 text-white flex-1 ml-8 items-center hidden">
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-0.5 after:bg-red-500 after:rounded-2xl"
              : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-0.5 after:bg-red-500 after:rounded-2xl"
              : ""
          }
          to="/Movies"
        >
          Movies
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-0.5 after:bg-red-500 after:rounded-2xl"
              : ""
          }
          to="/Series"
        >
          Series
        </NavLink>
      </li>
      {/* <li
            className={`flex items-center gap-1 cursor-pointer duration-300 ${
              isDropdownOpen ? "text-red-500" : ""
            }`}
            onClick={handleDropdown}
          >
            <span>Genres</span>
            <span
              className={`py-1 duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            >
              <ChevronDown color={isDropdownOpen ? "red" : "#fff"} size={16} />
            </span>
          </li> */}
    </ul>
  );
}

export default NavMenu;
