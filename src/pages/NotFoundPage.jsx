import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const [counter, setCounter] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const redirectToHome = () => {
      if (counter === 0) {
        navigate("/");
      }
    };
    const timer = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    redirectToHome();
    return () => clearInterval(timer);
  }, [navigate, counter]);

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="max-w-120">
          <img
            src="./not-found.png"
            alt="not found"
            className="w-full"
            loading="lazy"
          />
        </div>
        <h2 className="lg:text-8xl md:text-6xl text-4xl font-family-2 text-white">
          Page Not Found
        </h2>
        <button
          onClick={() => navigate("/")}
          className="cursor-pointer capitalizebg-red-600 px-6 py-2 text-white rounded-md text-xl mt-5"
        >
          redirect to home in {counter}s
        </button>
      </div>
    </section>
  );
}

export default NotFoundPage;
