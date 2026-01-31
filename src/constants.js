const KEY = import.meta.env.MTDB_KEY;
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
