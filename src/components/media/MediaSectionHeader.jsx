import { useLocation, Link } from "react-router";

function MediaSectionHeader({ title }) {
  const location = useLocation();
  return (
    <div className="h-[40vh] bg-[url('assets/movie.jpg')] bg-center bg-fixed">
      <div className="bg-black/60 w-full h-full flex items-center justify-center flex-col gap-3">
        <h2 className="text-white text-6xl font-semi-bold">{title}</h2>
        <div className="text-white">
          <Link to={"/"} className="hover:underline">
            Home
          </Link>
          <Link to={location.pathname} className="hover:underline">
            {location.pathname}{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MediaSectionHeader;
