import SearchResult from "../components/search/SearchResult";
import MediaSectionHeader from "../components/media/MediaSectionHeader";
import useMeidaFilterHook from "../hooks/useMediaFilterHook";
import MediaFilter from "../components/media/MediaFilter";
import Pagenation from "../components/pagination/Pagination";
import useFetchData from "../useFetchData";
const categories = [
  { key: "popular", name: "Popular" },
  { key: "top_rated", name: "Top Rated" },
  { key: "upcoming", name: "Upcoming" },
  { key: "now_playing", name: "Now Playing" },
];

function Movies() {
  const {
    selectedCategory,
    setSelectedCategory,
    isCategorySelected,
    selectedGenre,
    setSelectedGenre,
    isGenreSelected,
    searchQuery,
    isSearchActive,
    hasAnyValue,
    handleSearchChange,
    handleSubmit,
    formValues,
    setPage,
    page,
  } = useMeidaFilterHook();

  const { state } = useFetchData(handleEndPoint());

  function handleEndPoint() {
    let endpoint = "";
    if (formValues?.search) {
      endpoint = `/search/movie?query=${formValues.search}&page=${page}`;
    } else if (formValues?.genres) {
      endpoint = `/discover/movie?with_genres=${formValues.genres}&page=${page}`;
    } else if (formValues?.Categories) {
      endpoint = `/movie/${formValues.Categories}?page=${page}`;
    } else if (!formValues) {
      endpoint = `/movie/popular?page=${page}`;
    }
    return endpoint;
  }

  return (
    <section>
      <MediaSectionHeader title={"Movies"} />
      <div className="container mx-auto min-h-screen">
        <MediaFilter
          categories={categories}
          isCategorySelected={isCategorySelected}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          isGenreSelected={isGenreSelected}
          searchQuery={searchQuery}
          isSearchActive={isSearchActive}
          hasAnyValue={hasAnyValue}
          handleSearchChange={handleSearchChange}
          handleSubmit={handleSubmit}
          formValues={formValues}
          setPage={setPage}
          mediaType={"movie"}
        />
        <SearchResult
          formValues={formValues}
          genre={state?.moviesGenres}
          mediaType="movie"
          page={page}
          setPage={setPage}
          state={state}
        />
        {state?.results.length > 0 && (
          <Pagenation
            totalPages={state?.totalPages}
            page={page}
            setPage={setPage}
          />
        )}
      </div>
    </section>
  );
}

export default Movies;
