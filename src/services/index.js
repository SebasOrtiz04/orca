import axios from 'axios';
const baseURL = process.env.NEXT_URL_BASE_API

const api = axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
})

// Interceptor para agregar el token a cada petición
api.interceptors.request.use(
  (config) => {
    // Obtener el token desde el localStorage o de variables de entorno
    const token = localStorage.getItem('ACCESS_TOKEN');
    
    // Si el token existe, lo agrega en los headers como Bearer Token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    // Manejar errores antes de enviar la solicitud
    return Promise.reject(error);
  }
);

export default api;