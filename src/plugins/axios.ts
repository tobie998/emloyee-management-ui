import axios from 'axios';

const axiosCustom = axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
});

if (sessionStorage.getItem('Token')) {
    axiosCustom.defaults.headers.common.Authorization = `Bearer ${sessionStorage.getItem('Token')}`;
}

// axiosCustom.interceptors.request.use((req) => {
//     if ()
// })

export default axiosCustom;
