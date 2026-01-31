import Loading from "../shared/Loading";
import SearchNotFound from "../search/SearchNotFound";
import useFetchData from "../../useFetchData";
import NavbarSearchItem from "./NavbarSearchItem";
import Error from "../shared/Error";

function NavbarSearchList({
  result,
  loading,
  query,
  error,
  setQuery,
  isSearchActive,
  searchToggler,
}) {
  const { state } = useFetchData();
  const { tvGenres, moviesGenres } = state;
  const genres = [...moviesGenres, ...tvGenres];

  const getGenreName = (genreIds) => {
    if (!genreIds?.length) return "Unknown";
    return genres.find((g) => g.id === genreIds[0])?.name || "Unknown";
  };

  if (isSearchActive)
    return (
      <div
        className={`h-screen overflow-hidden w-full z-50 pt-35 pb-15  rounded-lg duration-500 ${
          query.length > 0
            ? "top-3 opacity-100 pointer-events-auto"
            : "top-8 opacity-0 pointer-events-none"
        }`}
      >
        {loading && !error && <Loading />}
        {!loading && error && <Error error={error} />}
        {query.length > 0 && result.length === 0 && <SearchNotFound />}
        {!loading && !error && (
          <div className="overflow-y-auto scrollBar h-full py-4 px-4 scrollbar-thin">
            <ul className="flex flex-col gap-3 ">
              {result.map((item) => (
                <NavbarSearchItem
                  key={item.id}
                  item={item}
                  getGenreName={getGenreName}
                  query={query}
                  setQuery={setQuery}
                  searchToggler={searchToggler}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );

  if (!isSearchActive)
    return (
      <div
        className={`absolute h-120 overflow-hidden w-90 sm:right-[13%] lg:right-12 z-50 bg-black/40 backdrop-blur-md rounded-lg shadow-md border border-white/20 duration-500 ${
          query.length > 0
            ? "top-3 opacity-100 pointer-events-auto"
            : "top-8 opacity-0 pointer-events-none"
        }`}
      >
        {loading && !error && <Loading />}
        {!loading && error && <Error error={error} />}
        {query.length > 0 && result.length === 0 && <SearchNotFound />}
        {!loading && !error && (
          <div className="overflow-y-auto scrollBar h-full py-4 px-4 scrollbar-thin">
            <ul className="flex flex-col gap-3 ">
              {result.map((item) => (
                <NavbarSearchItem
                  key={item.id}
                  item={item}
                  getGenreName={getGenreName}
                  query={query}
                  setQuery={setQuery}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
}

export default NavbarSearchList;
// "No results found. Try a different keyword"

//  bg-black/40 backdrop-blur-md py-4 px-4 rounded-lg shadow-md border-white/20 border
