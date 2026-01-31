import { useState } from "react";
import { IMAGE_URL } from "../../constants";
import { Star } from "lucide-react";

function DetailsSection({ media, credits, mediaType = "movie" }) {
  const [posterReady, setPosterReady] = useState(false);
  const handlePoster = () => {
    setPosterReady(true);
  };

  const convertTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const directors = credits
    ?.filter((crew) => crew.job.includes("Direct"))
    .map((d) => d.name)
    .join(" , ");

  const writers = credits
    ?.filter((crew) => crew.job.includes("Write") || crew.job.includes("Creat"))
    .map((w) => w.name)
    .join(" , ");

  return (
    <section className="relative min-h-screen bg-gray-900 py-20">
      {/* Backdrop */}
      <div className="absolute inset-0 z-10">
        {media.backdrop_path && (
          <img
            src={`${IMAGE_URL}original${media.backdrop_path}`}
            alt={media.title || media.original_name}
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
            onLoad={handlePoster}
          />
        )}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-64  from-gray-700 to-transparent z-20"></div>
      {/* Content */}
      <div className="relative z-20 md:pt-20 md:pb-20 pt-10">
        <div className="container px-2 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:items-start">
            {/* Poster */}
            <div
              className={`md:flex-1 min-w-0 w-full ${posterReady ? "h-fit bg-none" : " bg-gray-700 h-160  max-h-200"}   rounded max-w-110 overflow-hidden`}
            >
              <div className="relative ">
                {/* {!posterReady && <div className=" h-120 max-w-full"></div>} */}
                <>
                  <img
                    src={
                      media.poster_path
                        ? `${IMAGE_URL}/w780${media.poster_path}`
                        : "/no-poster-available.jpg"
                    }
                    alt={media.title || media.original_name}
                    className="w-full rounded-lg"
                    loading="lazy"
                    onLoad={handlePoster}
                  />
                  <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded-full flex items-center gap-1 text-sm font-bold">
                    <Star size={14} fill="black" />
                    <span>{media.vote_average?.toFixed(1)}</span>
                  </div>
                  {media.status && (
                    <div
                      className={`absolute top-2 left-2 px-2 py-1 rounded-full flex items-center gap-1 text-sm font-bold ${
                        {
                          //Movie statuses
                          Rumored: "bg-gray-400 text-black",
                          Planned: "bg-blue-400 text-white",
                          "In Production": "bg-yellow-400 text-black",
                          "Post Production": "bg-orange-500 text-white",
                          Released: "bg-yellow-400 text-black",
                          Canceled: "bg-red-600 text-white",

                          // Series statuses
                          "Returning Series": "bg-green-600 text-white",
                          "In Production (Series)": "bg-yellow-400 text-black",
                          Ended: "bg-gray-600 text-white",
                          Pilot: "bg-purple-500 text-white",
                        }[media.status] || "bg-gray-300 text-black"
                      }`}
                    >
                      {media.status}
                    </div>
                  )}
                </>
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <h1 className="md:text-5xl text-3xl font-bold text-white mb-2">
                {media.original_name || media.title}
              </h1>
              <p className="text-gray-400 text-xl font-medium mb-4">
                {media.tagline}
              </p>
              <ul className="flex gap-2 mb-6 flex-wrap">
                {media.genres?.map((genre) => (
                  <li
                    key={genre.id}
                    className="bg-red-500 text-white px-4 py-1 rounded-2xl"
                  >
                    {genre.name}
                  </li>
                ))}
              </ul>
              <div className="mb-6 max-w-2xl">
                <h3 className="text-3xl font-semibold text-white mb-2">
                  Overview
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {media.overview}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4 flex-wrap border-b border-gray-700 pb-4">
                  <div>
                    <span className="font-bold text-white">Status: </span>
                    <span className="text-gray-400">{media.status}</span>
                  </div>
                  {mediaType === "tv" ? (
                    <>
                      <div>
                        <span className="font-bold text-white">
                          First Air Date:{" "}
                        </span>
                        <span className="text-gray-400">
                          {new Date(media.first_air_date).toLocaleDateString()}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-white">
                          Last Air Date:{" "}
                        </span>
                        <span className="text-gray-400">
                          {new Date(media?.last_air_date).toLocaleDateString()}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <span className="font-bold text-white">
                          Release Date :{" "}
                        </span>
                        <span className="text-gray-400">
                          {new Date(media?.release_date).toLocaleDateString()}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-white">Runtime: </span>

                        <span className="text-gray-400">
                          {convertTime(media.runtime)}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                {mediaType === "tv" && (
                  <>
                    <div className="flex gap-4 flex-wrap border-b border-gray-700 pb-4">
                      <div>
                        <span className="font-bold text-white">
                          Number of Episodes:{" "}
                        </span>
                        <span className="text-gray-400">
                          {media.number_of_episodes}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-white">
                          Number of Sessons:{" "}
                        </span>
                        <span className="text-gray-400">
                          {media.number_of_seasons}
                        </span>
                      </div>
                    </div>
                  </>
                )}

                {directors && (
                  <div className="flex gap-4 border-b border-gray-700 pb-4">
                    <div>
                      <span className="font-bold text-white">Director: </span>
                      <span className="text-gray-400 font-medium">
                        {directors}
                      </span>
                      ;
                    </div>
                  </div>
                )}

                {writers?.length > 0 && (
                  <div className="flex gap-4">
                    <div>
                      <span className="font-bold text-white">Writers: </span>
                      <span className="text-gray-400">{writers}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsSection;
