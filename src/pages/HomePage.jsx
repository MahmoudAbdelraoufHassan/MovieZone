import JustRelease from "../components/home/Popular";
import Landing from "../components/home/Landing";
import Movies from "../components/home/Movies";
import Series from "../components/home/Series";
import VideosPopup from "../components/media/VideosPopup";
function Home() {
  return (
    <>
      <Landing />
      <JustRelease />
      <Movies />
      <Series />
    </>
  );
}

export default Home;
