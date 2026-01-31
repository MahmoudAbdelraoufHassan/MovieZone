import VideoCard from "./VideoCard";
function VideosList({ videos, onPopupOpen, setVideoKey }) {
  return (
    <div className="flex gap-5 overflow-x-auto scrollBar items-center px-2 py-5">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          onPopupOpen={onPopupOpen}
          setVideoKey={setVideoKey}
        />
      ))}
    </div>
  );
}

export default VideosList;
