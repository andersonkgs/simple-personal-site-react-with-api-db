import axios from 'axios';

const api = axios.create({
    baseURL: 'https://json-server-meu-site-pessoal.onrender.com'
});

export default api;