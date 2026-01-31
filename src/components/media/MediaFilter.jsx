import Filter from "../filters/Filter";
import Filters from "../filters/Filters";
import useFetchData from "../../useFetchData";
import { useEffect } from "react";
function MediaFilter({
  categories,
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
  mediaType,
}) {
  const { state } = useFetchData("");

  useEffect(() => {
    if (formValues) {
      setPage(1);
    }
  }, [formValues, setPage]);

  return (
    <div>
      <Filters onSubmit={handleSubmit}>
        <Filter
          defaultValue="Categories"
          options={categories}
          value={selectedCategory}
          onChange={setSelectedCategory}
          disabled={isGenreSelected || isSearchActive}
        />
        <Filter
          defaultValue="genres"
          options={mediaType === "movie" ? state.moviesGenres : state.tvGenres}
          value={selectedGenre}
          onChange={setSelectedGenre}
          disabled={isCategorySelected || isSearchActive}
        />
        <div
          className={`py-2.5 dark:bg-gray-700 bg-gray-200 rounded-4xl px-3 ${
            isCategorySelected || isGenreSelected
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          <input
            type="text"
            placeholder="Search..."
            name="search"
            value={searchQuery}
            onChange={handleSearchChange}
            disabled={isCategorySelected || isGenreSelected}
            className="dark:text-gray-200 dark:caret-gray-200 placeholder:text-gray-700 text-gray-700 dark:placeholder:text-gray-200 w-70 md:w-60 outline-none bg-transparent"
          />
        </div>
        <button
          className="bg-gray-700 text-white md:w-auto w-full py-2 px-5 rounded-3xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!hasAnyValue}
          type="submit"
        >
          Search
        </button>
      </Filters>
    </div>
  );
}

export default MediaFilter;
