import axios from 'axios';

// Instance Axios khusus untuk OpenWeatherMap
const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

// Menambahkan API key dan unit metrik (Celsius) ke setiap permintaan secara otomatis
weatherApi.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    appid: import.meta.env.VITE_WEATHER_API_KEY, // Ambil key dari .env
    units: 'metric', // Gunakan Celcius
  };
  return config;
});

export default weatherApi;