import axios from 'axios';

const api = axios.create({
    baseURL: 'threedhub-production.up.railway.app',
    headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const logout = () => {
    localStorage.removeItem('token');
    window.location.replace('/');
};

export default api;
