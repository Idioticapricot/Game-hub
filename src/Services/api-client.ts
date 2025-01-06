import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a7d6bbf387b14c10a23a2edef593af42",
  },
});