import SectionTitle from "../shared/SectionTitle";
import MediaSwiper from "../media/MediaSwiper";
import { SwiperSlide } from "swiper/react";
import MediaCardAlt from "../media/MediaCardAlt";
import FetchDataHook from "../../useFetchData";

function Series() {
  const { state } = FetchDataHook("tv/popular");
  const { results, tvGenres } = state;

  return (
    <section className="my-20">
      <div className="container mx-auto px-5">
        <SectionTitle>Series</SectionTitle>
        <div>
          <MediaSwiper results={results} arrow="series">
            {results.map((media) => (
              <SwiperSlide key={media.id}>
                <MediaCardAlt media={media} genre={tvGenres} mediaType="Tv" />
              </SwiperSlide>
            ))}
          </MediaSwiper>
        </div>
      </div>
    </section>
  );
}

export default Series;
