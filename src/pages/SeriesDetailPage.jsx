import Loading from "../components/shared/Loading";
import Error from "../components/shared/Error";
import useFetchData from "../useFetchData";
import { useParams } from "react-router";
import DetailsSection from "../components/MediaDetails/DetailsSection";
import { useEffect, useState } from "react";
import MediaSwiper from "../components/media/MediaSwiper";
import MediaSection from "../components/MediaDetails/MediaSection";
import VideosList from "../components/MediaDetails/VideosList";
import CastList from "../components/MediaDetails/CastList";
import MediaCard from "../components/media/MediaCard";
import { SwiperSlide } from "swiper/react";
function SeriesDetail() {
  const { id } = useParams();
  const { state } = useFetchData(`tv`, id);
  const {
    loading,
    errorMsg,
    videos,
    credits,
    results: series,
    similar,
  } = state;
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [videoKey, setVideoKey] = useState("");

  const togglePopup = () => {
    setIsPopUpOpen((is) => !is);
  };

  useEffect(() => {
    if (series.original_name) {
      document.title = series.original_name;
    } else {
      document.title = "Movie Zone";
    }
  }, [series]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (loading && !errorMsg)
    return (
      <div className="h-screen flex items-center justify-center bg-gray-700 ">
        <Loading />
      </div>
    );
  if (!loading && errorMsg)
    return (
      <div className="h-screen flex items-center justify-center bg-gray-700 ">
        <Error error={errorMsg} />;
      </div>
    );
  return (
    <>
      <DetailsSection media={series} credits={credits.crew} mediaType="tv" />

      {credits && (
        <MediaSection sectionTitle={"Actors"}>
          <CastList credits={credits.cast} />
        </MediaSection>
      )}

      {videos.length > 0 && (
        <MediaSection sectionTitle={"Offical Trilers"}>
          <VideosList
            videos={videos}
            setVideoKey={setVideoKey}
            onPopupOpen={togglePopup}
          />
        </MediaSection>
      )}
      <div className="container mx-auto my-20 px-5">
        {similar.length > 0 && (
          <MediaSwiper movies={similar} arrow="Movies" style="top-1/2">
            {similar.map((media) => (
              <SwiperSlide key={media.id}>
                <MediaCard
                  media={media}
                  mediaType="tv"
                  width="40"
                  height={"h-120"}
                />
              </SwiperSlide>
            ))}
          </MediaSwiper>
        )}
      </div>
      {isPopUpOpen && <VideosPopup videoKey={videoKey} onClose={togglePopup} />}
    </>
  );
}
export default SeriesDetail;
