import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "../../constants";
import { Star } from "lucide-react";
function NavbarSearchItem({
  item,
  getGenreName,
  query,
  setQuery,
  searchToggler,
}) {
  const title = item?.title || item?.name;

  const pathLink =
    item?.media_type.toLowerCase() === "movie" ? "Movies" : "Series";
  const pattern = new RegExp(`(${query})`, "gi");
  const navigate = useNavigate();

  return (
    <li
      key={item.id}
      className="flex gap-2 hover:bg-red-700 duration-300 select-none"
      onClick={() => {
        navigate(`${pathLink}/${item.id}`);
        setQuery("");
        searchToggler(() => searchToggler);
      }}
    >
      <div className="flex-1">
        <img
          src={
            item.poster_path
              ? `${IMAGE_URL}w154/${item.poster_path}`
              : "/no-poster-available.jpg"
          }
          loading="lazy"
          alt={item.title || item.name}
          className="w-full h-full pointer-events-none"
        />
      </div>
      <div className="flex-2">
        <h2 className="text-white capitalize font-light">
          {title.split(pattern).map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ? (
              <span className="font-bold" key={index}>
                {part}
              </span>
            ) : (
              <span key={index}>{part}</span>
            ),
          )}
        </h2>
        <div className="flex gap-2">
          <Star strokeWidth={1.75} width="20px" color="yellow" fill="yellow" />
          <span className="font-bold text-white">
            {item?.vote_average?.toFixed(1)}
          </span>
        </div>
        <div className="flex gap-2">
          <span className="text-white">{getGenreName(item?.genre_ids)}</span>
          <span className="text-white">•</span>
          <span className="text-white capitalize">{item?.media_type}</span>
        </div>
      </div>
    </li>
  );
}

export default NavbarSearchItem;
