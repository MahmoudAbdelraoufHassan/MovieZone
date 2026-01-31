import { IMAGE_URL } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import useFetchData from "../../useFetchData";
import "swiper/css";
import LandingBackground from "./LandingBackground";
import { Link } from "react-router-dom";

function Landing() {
  const { state, dispatch } = useFetchData("movie/upcoming");
  const { results, currentSlide, loading, errorMsg } = state;

  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="h-screen bg-black flex items-center justify-center text-red-500 text-4xl">
        Error: {errorMsg}
      </div>
    );
  }

  return (
    <header className="landing  h-screen py-23 md:py-30 z-10 bg-center bg-no-repeat bg-cover relative before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-black/30 before:block">
      <LandingBackground key={currentSlide?.id} currentSlide={currentSlide} />
      <div className="container px-2 mx-auto box-border relative z-10 flex justify-between">
        <div className="flex-1 animate-entrance" key={currentSlide?.id}>
          <h1 className="font-bold capitalize text-white md:text-7xl sm:text-4xl text-2xl max-w-4xl ">
            {currentSlide?.title}
          </h1>
          <p className="text-white max-w-150 my-2 md:my-5 text-base leading-[1.8]">
            {currentSlide?.overview.split(" ").length >= 30
              ? currentSlide?.overview.split(" ").slice(0, 30).join(" ") + "..."
              : currentSlide?.overview}
          </p>
          <div className="flex gap-2">
            {/* <button className="bg-red-600 text-white px-4 py-2 flex gap-2 items-center cursor-pointer font-medium">
              <CirclePlay strokeWidth="2px" size="30px" />
              Movie Details
            </button> */}
            <Link
              to={`movies/${currentSlide?.id}`}
              className="bg-red-600 text-white px-4 py-2 flex gap-2 items-center cursor-pointer font-medium"
            >
              Movie Details
            </Link>
          </div>
        </div>
      </div>
      <div className="overflow-hidden flex-1 absolute w-full left-0 bottom-1">
        <Swiper
          modules={[Autoplay]}
          spaceBetween="10px"
          centeredSlides
          loop={results.length > 10}
          speed={1500}
          draggable
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 8,
            },
          }}
          autoplay={{ delay: 5000 }}
          onSlideChange={(e) =>
            dispatch({ type: "SET_CURRENT_SLIDE", payload: e.realIndex })
          }
        >
          {results.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="max-w-70 overflow-hidden py-8 cursor-grab">
                <img
                  className="pointer-events-none rounded-xl"
                  src={`${IMAGE_URL}/w500/${movie.poster_path}`}
                  alt={movie.title}
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </header>
  );
}

export default Landing;
