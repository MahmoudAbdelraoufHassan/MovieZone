import CastCard from "./CastCard";

function CastList({ credits }) {
  const cast = credits?.slice(0, 20);
  return (
    <div className="flex gap-10 overflow-x-auto scrollBar items-start px-2 py-5">
      {cast?.map((actor, index) => {
        return <CastCard key={index} actor={actor} />;
      })}
    </div>
  );
}

export default CastList;
