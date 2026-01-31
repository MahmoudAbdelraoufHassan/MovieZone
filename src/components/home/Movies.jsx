import SectionTitle from "../shared/SectionTitle";
import { SwiperSlide } from "swiper/react";
import MediaSwiper from "../media/MediaSwiper";
import MediaCardAlt from "../media/MediaCardAlt";
import "swiper/css/navigation";
import useFetchData from "../../useFetchData";
function Movies() {
  const { state } = useFetchData("movie/now_playing");
  const { results, moviesGenres } = state;

  return (
    <section className="my-20">
      <div className="container mx-auto px-5">
        <SectionTitle>Movies</SectionTitle>
        <div>
          <MediaSwiper movies={results} arrow="Movies">
            {results.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MediaCardAlt
                  media={movie}
                  genre={moviesGenres}
                  mediaType="Movie"
                />
              </SwiperSlide>
            ))}
          </MediaSwiper>
        </div>
      </div>
    </section>
  );
}

export default Movies;
