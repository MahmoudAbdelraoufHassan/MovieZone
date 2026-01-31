import { SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import SectionTitle from "../shared/SectionTitle";
import MediaSwiper from "../media/MediaSwiper";
import MediaCard from "../media/MediaCard";
import useFetchData from "../../useFetchData";

function Popular() {
  const { state } = useFetchData("movie/popular");
  const { results, moviesGenres } = state;

  return (
    <section className="my-20">
      <div className="container mx-auto px-5">
        <SectionTitle>Everyone's Watching</SectionTitle>
        <MediaSwiper movies={results} arrow="popular" style="top-1/2">
          {results.map((movie) => (
            <SwiperSlide key={movie?.id}>
              <MediaCard media={movie} genre={moviesGenres} height="h-110" />
            </SwiperSlide>
          ))}
        </MediaSwiper>
      </div>
    </section>
  );
}

export default Popular;
