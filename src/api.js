import axios from 'axios';

const api = axios.create({
    baseURL: 'https://site-personal-api.onrender.com/'
});

export default api;