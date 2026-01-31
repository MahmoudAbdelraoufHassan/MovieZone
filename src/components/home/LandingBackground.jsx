import { useState } from "react";
import { IMAGE_URL } from "../../constants";

function LandingBackground({ currentSlide }) {
  const [imageReady, setImageReady] = useState(false);

  return (
    <>
      {/* {!imageReady && <Loading />} */}
      <img
        src={`${IMAGE_URL}/original/${currentSlide?.backdrop_path}`}
        alt={currentSlide?.title}
        className={`h-full w-full object-cover object-center absolute top-0 -z-1 duration-200 ease-in-out  opacity-0 ${imageReady && "opacity-100"} `}
        loading="lazy"
        onLoad={() => {
          setImageReady((prev) => !prev);
        }}
      />
    </>
  );
}

export default LandingBackground;
