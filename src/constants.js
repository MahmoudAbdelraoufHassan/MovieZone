const KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Zjc2MTMzZmRiOTczZTNjMTgyZmQ1ODNmMDhkNmM4MSIsIm5iZiI6MTcyNTQ1NjkwMS43NDUsInN1YiI6IjY2ZDg2MjA1MDA1ZDYyNGExMTZjZTZjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RRgwdgL3NTpO9RECBTDfHekExMuK4_YfPOJe9rpF6gU";

const BASE_URL = "https://api.themoviedb.org/3/";
const IMAGE_URL = `https://image.tmdb.org/t/p/`;

const VIDEO_IMAGE_URL = (key) =>
  `https://img.youtube.com/vi/${key}/mqdefault.jpg`;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${KEY}`,
  },
};
export { options, BASE_URL, IMAGE_URL, VIDEO_IMAGE_URL };
