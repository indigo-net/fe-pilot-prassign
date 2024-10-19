import axios from 'axios'

export const axiosInstance = () =>
  axios.create({
    baseURL: import.meta.env.VITE_TEST_API_URL,
    timeout: 2000,
  })
