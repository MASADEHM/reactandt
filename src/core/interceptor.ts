import axios from "axios";

export const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((c) => {
    c.headers.set('NAME', 'MMASADEH')
    return c;
})