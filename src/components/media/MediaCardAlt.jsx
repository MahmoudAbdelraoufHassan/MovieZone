import { IMAGE_URL } from "../../constants";
import { Star, Play } from "lucide-react";
import { Link } from "react-router-dom";

function MediaCardAlt({ media, mediaType, genre, width = "w-auto" }) {
  const genreName = genre?.find((g) => g?.id === media?.genre_ids[0])?.name;

  const linkPath =
    mediaType.toLocaleLowerCase() === "movie"
      ? `/movies/${media?.id}`
      : `/series/${media?.id}`;

  return (
    <>
      <Link
        to={linkPath}
        className={`relative cursor-pointer group overflow-hidden w-${width} `}
      >
        <div
          className={`relative group rounded-lg overflow-hidden ${
            !media?.backdrop_path && "h-fit"
          }`}
        >
          <img
            className="object-center object-cover"
            src={
              media?.backdrop_path
                ? `${IMAGE_URL}/w500/${media?.backdrop_path}`
                : "/no-poster-available-2.jpg"
            }
            alt={media?.title || media?.original_name}
          />
          <div className="absolute w-full h-full overflow-hidden scale-0 bg-black/30 top-0 left-0 z-50 flex items-center justify-center text-5xl group-hover:scale-100 transition-all origin-center duration-500">
            <div className="bg-red-500 w-15 h-15 flex items-center justify-center rounded-full">
              <Play size={25} strokeWidth={0.5} fill="#ffff" color="#ffff" />
            </div>
          </div>
        </div>
        <div>
          <h3 className="my-3 truncate dark:text-white max-w-50">
            {media?.title || media?.original_name}
          </h3>
          <div className="flex items-center gap-1">
            <Star
              strokeWidth={1.75}
              width="20px"
              color="yellow"
              fill="yellow"
            />
            <span className="font-bold dark:text-white">
              {media?.vote_average.toFixed(1)}
            </span>
            <span className="text-gray-600 dark:text-gray-400">|</span>
            <span className="text-gray-600 dark:text-gray-400">
              {genreName}
            </span>
            <span className="text-gray-600 dark:text-gray-400">•</span>
            <span className="text-gray-600 dark:text-gray-400">
              {mediaType}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MediaCardAlt;
