
import axios from "axios";

const baseURL = process.env.REACT_APP_DEV_URL;
const headers = {
  Authorization: "Bearer e6e05217c256eb4ab00dc941a55dc14f1e366decc72fa3c008ee7eeed691341652ea1e8e34d73438f65a50d575bc5f1f11745c31f63a38e0b6d6a87a7e8aa66386e5a72c2fec15f6826f91481e020e9555f8479c82f0d0f96edf5452cf96d1c922992b8efff1f80bc31831e56e2ff040bf333a1a9b24a9a4a6953879d51ed308",
};

const api = axios.create({
  baseURL,
  headers,
});

export default api;