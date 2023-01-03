import axios from "axios";

const api = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL_PROD,
});

export const adminApi = {
  getAllUsers: (token) => api.get("/admin/get-user/all", { headers: { Authorization: `Bearer ${token}` } }),
  getUser: (id, token) => api.get(`/admin/get-user/${id}`, { headers: { Authorization: `Bearer ${token}` } }),
  getStatistics: (token) => api.get("/admin/statistics", { headers: { Authorization: `Bearer ${token}` } }),
};

export const homeApi = {
  getBooks: () => api.get("/book/home/"),
  getCategories: () => api.get("/category/home/"),
};

export const authApi = {
  register: (data) => api.post("/auth/register", data),
  login: (data) => api.post("/auth/login", data),
  logout: (email) => api.post("/auth/logout", { email }),
  verify: (email, token) => api.post("/auth/verify", { email }, { headers: { Authorization: `Bearer ${token}` } }),
};

export const userApi = {
  getSelf: (token) => api.get("/user/me", { headers: { Authorization: `Bearer ${token}` } }),
  changePassword: (data, token) => api.put("/user/change-password", data, { headers: { Authorization: `Bearer ${token}` } }),
};

export const categoryApi = {
  getBooksByCategory: (id) => api.get(`/category/${id}`),
  getAll: () => api.get(`/category/home/all`),
};

export const bookApi = {
  getBook: (id) => api.get(`/book/${id}`),
};

export default api;