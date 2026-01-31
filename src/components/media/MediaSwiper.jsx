import { Swiper } from "swiper/react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

function MediaSwiper({ children, arrow = "", style = "top-[35%]" }) {
  return (
    <div className="relative">
      <div
        className={`${arrow}-prev duration-300 absolute -left-5 ${style} dark:bg-gray-800 -translate-y-1/2 z-20 cursor-pointer bg-[#faeded] rounded-full flex items-center justify-center p-1`}
      >
        <ChevronLeft size={30} strokeWidth={1} color="red" />
      </div>
      <div
        className={`${arrow}-next absolute -right-5 ${style} dark:bg-gray-800 -translate-y-1/2 z-20 cursor-pointer bg-[#faeded] rounded-full flex items-center justify-center p-1 `}
      >
        <ChevronRight size={30} strokeWidth={1} color="red" />
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: `.${arrow}-next`,
          prevEl: `.${arrow}-prev`,
        }}
        spaceBetween="10px"
        speed={1000}
        draggable
        breakpoints={{
          420: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          480: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1280: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        }}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        onSwiper={(swiper) => {
          swiper.el.addEventListener("mouseenter", () => {
            swiper.autoplay?.stop();
          });
          swiper.el.addEventListener("mouseleave", () => {
            swiper.autoplay?.start();
          });
        }}
      >
        {children}
      </Swiper>
    </div>
  );
}

export default MediaSwiper;
