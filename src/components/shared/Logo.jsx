import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="font-family-2 font-normal text-xl text-white">
      <span className="text-red-500 text-3xl">M</span>
      ovie
      <span className="text-red-500 text-3xl">Z</span>
      one
    </Link>
  );
}

export default Logo;
