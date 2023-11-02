import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/v1';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const storage = JSON.parse(localStorage.getItem('persist:rootClient'));
        const token = JSON.parse(storage.auth).token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export const get = async (url, options = {}) => {
    try {
        const response = await axiosInstance.get(url, options);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const post = async (url, data) => {
    try {
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const patch = async (url, data) => {
    try {
        const response = await axiosInstance.patch(url, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const del = async (url) => {
    try {
        const response = await axiosInstance.delete(url);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};
