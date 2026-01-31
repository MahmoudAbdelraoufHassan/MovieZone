import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ totalPages, setPage, page }) {
  return (
    <>
      <div className=" relative flex gap-1 items-center justify-center py-5 w-fit mx-auto">
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter((i) => i >= page - 2 && i <= page + 2)
          .map((i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`text-white text-xl cursor-pointer w-10 rounded-full h-10 ${
                page === i
                  ? "bg-red-600"
                  : "dark:bg-gray-700 dark:text-gray-200  bg-gray-400"
              }`}
            >
              {i}
            </button>
          ))}
        {page > 1 && (
          <button
            className="absolute -left-10 dark:text-white text-gray-700 cursor-pointer"
            onClick={() => setPage((cur) => cur - 1)}
          >
            <ChevronLeft />
          </button>
        )}
        {page < totalPages && (
          <button
            className="absolute -right-10 dark:text-white text-gray-700 cursor-pointer"
            onClick={() => setPage((cur) => cur + 1)}
          >
            <ChevronRight />
          </button>
        )}
      </div>
    </>
  );
}

export default Pagination;
