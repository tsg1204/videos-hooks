import axios from "axios";
import { KEY } from './dev.js';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});
