import { useState } from "react";
import FetchDataHook from "../useFetchData";

function useMeidaFilterHook() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [formValues, setFormValues] = useState(null);
  const [page, setPage] = useState(1);

  const isCategorySelected = !!selectedCategory;
  const isGenreSelected = !!selectedGenre;
  const isSearchActive = searchQuery.trim() !== "";
  const hasAnyValue = isCategorySelected || isGenreSelected || isSearchActive;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!hasAnyValue) return;
    const values = {};
    if (selectedCategory) values.Categories = selectedCategory.key;
    if (selectedGenre) values.genres = selectedGenre.id;
    if (searchQuery) values.search = searchQuery;
    setFormValues(values);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return {
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
    page,
    setPage,
  };
}

export default useMeidaFilterHook;
