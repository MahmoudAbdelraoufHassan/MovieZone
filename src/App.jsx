import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./pages/LayoutPage";
import Home from "./pages/HomePage";
import Movies from "./pages/MoviesPage";
import Series from "./pages/SeriesPage";
import MovieDetail from "./pages/MovieDetailPage";
import SeriesDetail from "./pages/SeriesDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="movies/:id" element={<MovieDetail />} />
          <Route path="series/:id" element={<SeriesDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// what was done
// dark/light theme done
// create footer done
// create Movies , Series done
// search and filters done

// still not done
// single page fetch done
// responsive Design done
// popup videos page
