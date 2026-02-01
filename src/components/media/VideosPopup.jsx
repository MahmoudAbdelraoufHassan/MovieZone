import { X } from "lucide-react";

function VideosPopup({ onClose, videoKey }) {
  return (
    <div className="w-full h-screen fixed z-50 left-0 top-0 bg-black/20 flex items-center justify-center">
      <div className="relative border-2 bg-black border-red-500 rounded-2xl m-3">
        <iframe
          src={`https://www.youtube.com/embed/${videoKey}`}
          className="w-140 md:w-200 max-w-full h-90 md:h-120 border-0 rounded-xl shadow-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button
          onClick={onClose}
          className="absolute cursor-pointer -top-5 -right-3 bg-white rounded-full p-2 hover:bg-gray-100 transition"
        >
          <X size={24} className="text-black" />
        </button>
      </div>
    </div>
  );
}

export default VideosPopup;
