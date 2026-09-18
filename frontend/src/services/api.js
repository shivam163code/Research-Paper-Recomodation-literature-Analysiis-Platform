import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api/v1',
  timeout: 8000
});

export const getDashboard = () => api.get('/dashboard');
export const searchPapers = (params) => api.get('/papers/search', { params });
export const getPaper = (id) => api.get(`/papers/${id}`);
export const getLibrary = () => api.get('/library');
export const toggleBookmark = (paperId, saved) => saved ? api.delete(`/library/${paperId}`) : api.post(`/library/${paperId}`);
export const uploadPaper = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return api.post('/analysis/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' }, timeout: 30000 });
};

export default api;
