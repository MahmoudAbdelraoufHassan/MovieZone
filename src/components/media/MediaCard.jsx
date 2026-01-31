import { IMAGE_URL } from "../../constants";
import { Star, Play } from "lucide-react";
import { Link } from "react-router-dom";

function MediaCard({
  media,
  genre,
  mediaType = "movie",
  width = "auto",
  height = "h-auto",
}) {
  const genreName = genre?.find((g) => g.id === media.genre_ids[0])?.name;

  const linkPath =
    mediaType.toLocaleLowerCase() === "movie"
      ? `/movies/${media.id}`
      : `/series/${media.id}`;

  return (
    <Link
      to={linkPath}
      className={`relative cursor-pointer group overflow-hidden `}
    >
      <div className={`overflow-hidden md:w-${width} w-full ${height}`}>
        <div className="absolute p-4 shadow-[0px_-80px_80px_5px_#000000_inset] w-full h-full left-0 top-0 z-20 flex flex-col justify-end">
          <h3 className="text-white mb-2 text-lg">
            {media?.title || media?.name}
          </h3>
          <div className="flex items-center gap-1">
            <Star
              strokeWidth={1.75}
              width="20px"
              color="yellow"
              fill="yellow"
            />
            <span className="font-bold text-white">
              {media.vote_average.toFixed(1)}
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-400 w-fit">{genreName}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">{mediaType}</span>
          </div>
        </div>
        <div className="absolute w-full h-full overflow-hidden scale-0 bg-black/30 top-0 left-0 z-50 flex items-center justify-center text-5xl group-hover:scale-100 transition-all origin-center duration-500">
          <div className="bg-red-500 w-20 h-20 flex items-center justify-center rounded-full">
            <Play size={50} strokeWidth={0.5} fill="#ffff" color="#ffff" />
          </div>
        </div>
        <img
          src={
            media?.poster_path
              ? `${IMAGE_URL}/w500/${media.poster_path}`
              : "/no-poster-available.jpg"
          }
          className="group-hover:scale-[1.2] duration-300  w-full h-full"
          loading="lazy"
          alt={media?.title}
        />
      </div>
    </Link>
  );
}

export default MediaCard;
