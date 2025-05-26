// src/api/axios.js
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3001', // json-server가 실행 중인 주소
})

export default instance
