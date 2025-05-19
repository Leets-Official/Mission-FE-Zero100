import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001", // json-server 기본 포트
});

export default api; 