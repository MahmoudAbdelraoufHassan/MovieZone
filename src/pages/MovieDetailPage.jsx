import Loading from "../components/shared/Loading";
import Error from "../components/shared/Error";
import useFetchData from "../useFetchData";
import { useParams } from "react-router";
import DetailsSection from "../components/MediaDetailsComponents/DetailsSection";
import MediaSection from "../components/MediaDetailsComponents/MediaSection";
import CastList from "../components/MediaDetailsComponents/CastList";
import VideosList from "../components/MediaDetailsComponents/VideosList";
import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import MediaSwiper from "../components/media/MediaSwiper";
import MediaCard from "../components/media/MediaCard";
import SectionTitle from "../components/shared/SectionTitle";
import VideosPopup from "../components/media/VideosPopup";
function MovieDetail() {
  const { id } = useParams();
  const { state } = useFetchData("movie", id);
  const { results: movie, errorMsg, loading, credits, similar, videos } = state;
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [videoKey, setVideoKey] = useState("");
  const togglePopup = () => {
    setIsPopUpOpen((is) => !is);
  };

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
      <DetailsSection media={movie} credits={credits.crew} />
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
      <div className="container mx-auto my-20 px-5 ">
        {similar.length > 0 && (
          <>
            <SectionTitle>Similar Content</SectionTitle>
            <MediaSwiper movies={similar} arrow="Movies" style="top-1/2">
              {similar.map((media) => (
                <SwiperSlide key={media.id}>
                  <MediaCard
                    media={media}
                    mediaType="movie"
                    width="40"
                    height={"h-120"}
                  />
                </SwiperSlide>
              ))}
            </MediaSwiper>
          </>
        )}
      </div>
      {isPopUpOpen && <VideosPopup videoKey={videoKey} onClose={togglePopup} />}
    </>
  );
}

export default MovieDetail;
