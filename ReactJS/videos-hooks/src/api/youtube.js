import axios from "axios";

const KEY = "AIzaSyCcwS-Qjee0SaDofUcDTxES1HYXSsHLpbg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet", // Brief summary of the video
    type: "video", // Not playlists
    maxResults: 5,
    key: KEY,
  },
});
