import { Search, X } from "lucide-react";

function NavbarSearch({ query, setQuery, isSearchActive, onSearchActive }) {
  const handleChange = (e) => setQuery(e.target.value);
  const handleClear = () => setQuery("");
  if (isSearchActive)
    return (
      <>
        <div
          className={`flex items-center gap-1 ${isSearchActive ? "bg-red-600" : "bg-white/20"} p-2 rounded-full lg:backdrop-blur-md lg:py-2 lg:px-3 lg:rounded-3xl `}
        >
          {" "}
          <button className={`cursor-pointer`} onClick={() => onSearchActive()}>
            {!isSearchActive ? (
              <Search color="#ffff" />
            ) : (
              <X color="#ffff" onClick={handleClear} />
            )}
          </button>
        </div>
        <div className="flex gap-1 bg-white/20 p-2 absolute left-0 w-full justify-between top-20 rounded-full lg:bg-white/20 lg:backdrop-blur-md lg:py-2 lg:px-3 lg:rounded-3xl">
          <input
            type="text"
            name="navbar_search"
            value={query}
            placeholder="Search by keyword"
            onChange={handleChange}
            className="outline-none  placeholder:text-white/60  caret-white transition placeholder:transition focus:placeholder:opacity-0 w-full text-white"
          />
          <button className="cursor-pointer">
            {query.length === 0 ? (
              <Search color="#ffff" />
            ) : (
              <X color="#ffff" onClick={handleClear} />
            )}
          </button>
        </div>
      </>
    );

  return (
    <>
      <div
        className={`flex md:hidden items-center gap-1 ${isSearchActive ? "bg-red-600" : "bg-white/20"} p-2 rounded-full lg:backdrop-blur-md lg:py-2 lg:px-3 lg:rounded-3xl `}
      >
        {" "}
        <button className={`cursor-pointer`} onClick={() => onSearchActive()}>
          {!isSearchActive ? (
            <Search color="#ffff" />
          ) : (
            <X color="#ffff" onClick={handleClear} />
          )}
        </button>
      </div>
      <div className="md:flex gap-1 bg-white/20 p-2 hidden rounded-full lg:bg-white/20 lg:backdrop-blur-md lg:py-2 lg:px-3 lg:rounded-3xl">
        <input
          type="text"
          value={query}
          placeholder="Search by keyword"
          onChange={handleChange}
          name="navbar_search"
          className="outline-none hidden md:block placeholder:text-white/60 caret-white transition placeholder:transition focus:placeholder:opacity-0 w-2xs text-white"
        />
        <button className="cursor-pointer">
          {query.length === 0 ? (
            <Search color="#ffff" />
          ) : (
            <X color="#ffff" onClick={handleClear} />
          )}
        </button>
      </div>
    </>
  );
}

export default NavbarSearch;
