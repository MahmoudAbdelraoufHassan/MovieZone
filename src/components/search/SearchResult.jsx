import Loading from "../shared/Loading";
import MediaCard from "../media/MediaCard";
import Pagenation from "../pagination/Pagination";
import SearchNotFound from "./SearchNotFound";
import Error from "../shared/Error";

function SearchResult({ formValues, genre, mediaType = "Movie", state }) {
  const { loading, errorMsg, results } = state;

  if (loading && !errorMsg) {
    return (
      <div className="h-screen">
        <Loading />;
      </div>
    );
  }
  if (!loading && errorMsg) {
    return (
      <div className="h-screen">
        <Error error={errorMsg} />;
      </div>
    );
  }
  if (formValues?.search?.length > 0 && results.length === 0) {
    return (
      <div className="h-screen">
        <SearchNotFound />;
      </div>
    );
  }

  return (
    <div className="flex items-center flex-wrap gap-4 pt-10 pb-10 px-2">
      {results?.map((m) => (
        <MediaCard
          key={m.id}
          media={m}
          mediaType={mediaType}
          genre={genre}
          width="60"
        />
      ))}
    </div>
  );
}

export default SearchResult;
