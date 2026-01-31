import MediaSectionHeader from "../components/media/MediaSectionHeader";
import SearchResult from "../components/search/SearchResult";
import Pagenation from "../components/pagination/Pagination";
import useMediaFilterHook from "../hooks/useMediaFilterHook";
import MediaFilter from "../components/media/MediaFilter";
import useFetchData from "../useFetchData";
const categories = [
  { key: "popular", name: "Popular" },
  { key: "top_rated", name: "Top Rated" },
  { key: "on_the_air", name: "On The Air" },
  { key: "airing_today", name: "Airing Today" },
];

function Series() {
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
  } = useMediaFilterHook();

  const { state } = useFetchData(handleEndPoint());

  function handleEndPoint() {
    let endpoint = "";
    if (formValues?.search) {
      endpoint = `/search/tv?query=${formValues.search}&page=${page}`;
    } else if (formValues?.genres) {
      endpoint = `/discover/tv?with_genres=${formValues.genres}&page=${page}`;
    } else if (formValues?.Categories) {
      endpoint = `/tv/${formValues.Categories}?page=${page}`;
    } else {
      endpoint = `/tv/popular?page=${page}`;
    }
    return endpoint;
  }

  return (
    <section>
      <MediaSectionHeader title={"Series"} />
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
          mediaType={"tv"}
        />
        <SearchResult
          formValues={formValues}
          genre={state?.tvGenres}
          mediaType="tv"
          page={page}
          setPage={setPage}
          state={state}
        />
        {state?.results.length > 0 && (
          <Pagenation
            totalPages={state?.totalPages}
            currentPage={state?.currentPage}
            page={page}
            setPage={setPage}
          />
        )}
      </div>
    </section>
  );
}

export default Series;
