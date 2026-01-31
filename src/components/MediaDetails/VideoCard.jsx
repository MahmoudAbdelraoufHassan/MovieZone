import { VIDEO_IMAGE_URL } from "../../constants";
import { Play } from "lucide-react";
function VideoCard({ video, onPopupOpen, setVideoKey }) {
  function handlePopup(videoKey) {
    onPopupOpen();
    setVideoKey(videoKey);
  }

  return (
    <>
      <div className="cursor-pointer" onClick={() => handlePopup(video.key)}>
        <div className="relative rounded-lg overflow-hidden w-80 h-48">
          <img
            src={VIDEO_IMAGE_URL(video.key)}
            alt={video.name}
            className="w-full  h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center relative">
              <Play size={32} color="white" fill="white" className="ml-1" />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <span className="text-gray-700 truncate w-80 block dark:text-white select-none">
            {video.name}
          </span>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
