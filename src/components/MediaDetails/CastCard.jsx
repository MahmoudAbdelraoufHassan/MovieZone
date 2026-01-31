import { IMAGE_URL } from "../../constants";
function CastCard({ actor }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-36 h-36 rounded-full  overflow-hidden mb-4">
        <img
          src={
            actor.profile_path
              ? `${IMAGE_URL}/w185${actor.profile_path}`
              : "/user.png"
          }
          loading="lazy"
          alt={actor.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-bold dark:text-white text-gray-700 ">
          {actor.name}
        </h3>
        <span className="text-gray-400">{actor.character}</span>
      </div>
    </div>
  );
}

export default CastCard;
