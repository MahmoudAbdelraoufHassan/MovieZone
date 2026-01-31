import { useEffect, useReducer } from "react";
import { BASE_URL, options } from "./constants";

const initialState = {
  results: [],
  currentSlide: null,
  loading: false,
  errorMsg: null,
  moviesGenres: [],
  tvGenres: [],
  currentPage: 1,
  totalPages: 0,
  credits: [],
  videos: [],
  similar: [],
};

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        results: payload.results ? payload.results : payload,
        totalPages: payload.total_pages || state.totalPages,
        currentPage: payload.page || state.currentPage,
        currentSlide: payload.results ? payload.results[0] : 0,
        loading: false,
      };
    case "FETCH_ERROR":
      return { ...state, loading: false, errorMsg: payload };
    case "SET_CURRENT_SLIDE":
      return { ...state, currentSlide: state.results[payload] };
    case "SET_MOVIE_GENRES":
      return { ...state, moviesGenres: payload };
    case "SET_TV_GENRES":
      return { ...state, tvGenres: payload };
    case "SET_MEDIA_CAST":
      return { ...state, credits: payload };
    case "SET_MEDIA_VIDEOS":
      return { ...state, videos: payload.slice(0, 10) };
    case "SET_MEDIA_SIMILAR":
      return { ...state, similar: payload };
    default:
      return state;
  }
}

function useFetchData(type = "", id = "") {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 🎬 Fetch genres
  useEffect(() => {
    const controller = new AbortController();

    fetch(`${BASE_URL}/genre/movie/list`, {
      ...options,
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "SET_MOVIE_GENRES", payload: data.genres }),
      )
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      });

    fetch(`${BASE_URL}/genre/tv/list`, {
      ...options,
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_TV_GENRES", payload: data.genres }))
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      });

    return () => controller.abort();
  }, []);

  // 🎥 Fetch main list (no id)
  useEffect(() => {
    if (type.length > 0 && !id) {
      const controller = new AbortController();

      dispatch({ type: "FETCH_START" });
      fetch(`${BASE_URL}${type}`, { ...options, signal: controller.signal })
        .then((res) => {
          if (!res.ok) throw new Error(`${res.status}`);
          return res.json();
        })
        .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data }))
        .catch((err) => {
          if (err.name !== "AbortError") {
            dispatch({ type: "FETCH_ERROR", payload: err.message });
          }
        });

      return () => controller.abort();
    }
  }, [type, id]);

  // 🎞 Fetch item details + credits + videos + similar
  useEffect(() => {
    if (type.length > 0 && id) {
      const controller = new AbortController();

      dispatch({ type: "FETCH_START" });

      // Main data
      fetch(`${BASE_URL}${type}/${id}`, {
        ...options,
        signal: controller.signal,
      })
        .then((res) => {
          if (!res.ok) throw new Error(`${res.status}`);
          return res.json();
        })
        .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data }))
        .catch((err) => {
          if (err.name !== "AbortError") {
            dispatch({ type: "FETCH_ERROR", payload: err.message });
          }
        });

      // Credits
      fetch(`${BASE_URL}${type}/${id}/credits`, {
        ...options,
        signal: controller.signal,
      })
        .then((res) => res.json())
        .then((data) => dispatch({ type: "SET_MEDIA_CAST", payload: data }))
        .catch((err) => {
          if (err.name !== "AbortError") console.error(err);
        });

      // Videos
      fetch(`${BASE_URL}${type}/${id}/videos`, {
        ...options,
        signal: controller.signal,
      })
        .then((res) => res.json())
        .then((data) =>
          dispatch({ type: "SET_MEDIA_VIDEOS", payload: data.results }),
        )
        .catch((err) => {
          if (err.name !== "AbortError") console.error(err);
        });

      // Similar
      fetch(`${BASE_URL}${type}/${id}/similar`, {
        ...options,
        signal: controller.signal,
      })
        .then((res) => res.json())
        .then((data) =>
          dispatch({ type: "SET_MEDIA_SIMILAR", payload: data?.results }),
        )
        .catch((err) => {
          if (err.name !== "AbortError") console.error(err);
        });

      return () => controller.abort();
    }
  }, [type, id]);

  return { state, dispatch };
}

export default useFetchData;
