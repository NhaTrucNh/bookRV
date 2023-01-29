import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL_PROD,
});

export const adminApi = {
  getAllUsers: (token) => api.get('/admin/get-user/all', { headers: { Authorization: `Bearer ${token}` } }),
  getAllMods: (token) => api.get('/admin/get-mods', { headers: { Authorization: `Bearer ${token}` } }),
  getAllBooks: (token) => api.get('/admin/get-books', { headers: { Authorization: `Bearer ${token}` } }),
  getBookDetails: (bookId, token) =>
    api.get(`/admin/get-book/${bookId}`, { headers: { Authorization: `Bearer ${token}` } }),
  getAllCategories: (token) => api.get('/admin/get-categories', { headers: { Authorization: `Bearer ${token}` } }),
  getAllReviews: (token) => api.get('/admin/get-reviews', { headers: { Authorization: `Bearer ${token}` } }),
  getUser: (id, token) => api.get(`/admin/get-user/${id}`, { headers: { Authorization: `Bearer ${token}` } }),
  getStatistics: (token) => api.get('/admin/statistics', { headers: { Authorization: `Bearer ${token}` } }),
  addBook: (data, token) => api.post('/admin/add-book', data, { headers: { Authorization: `Bearer ${token}` } }),
  updateBook: (bookId, data, token) =>
    api.post(`/admin/update-book/${bookId}`, data, { headers: { Authorization: `Bearer ${token}` } }),
  addMod: (userId, token) =>
    api.post(`/admin/add-mod/${userId}`, {}, { headers: { Authorization: `Bearer ${token}` } }),
  removeMod: (userId, token) =>
    api.post(`/admin/remove-mod/${userId}`, {}, { headers: { Authorization: `Bearer ${token}` } }),
  updateBookInfo: (bookId, data, token) =>
    api.put(`/admin/update-book/${bookId}`, data, { headers: { Authorization: `Bearer ${token}` } }),
  deleteBook: (bookId, token) =>
    api.post(`/admin/delete-book/${bookId}`, {}, { headers: { Authorization: `Bearer ${token}` } }),
  restoreBook: (bookId, token) =>
    api.post(`/admin/restore-book/${bookId}`, {}, { headers: { Authorization: `Bearer ${token}` } }),
  deleteReview: (reviewId, token) =>
    api.post(`/admin/delete-review/${reviewId}`, {}, { headers: { Authorization: `Bearer ${token}` } }),
  restoreReview: (reviewId, token) =>
    api.post(`/admin/restore-review/${reviewId}`, {}, { headers: { Authorization: `Bearer ${token}` } }),
  disableUser: (userId, token) =>
    api.post(`/admin/disable-user/${userId}`, {}, { headers: { Authorization: `Bearer ${token}` } }),
  enableUser: (userId, token) =>
    api.post(`/admin/enable-user/${userId}`, {}, { headers: { Authorization: `Bearer ${token}` } }),
  addCategory: (data, token) =>
    api.post(`/admin/add-category`, data, { headers: { Authorization: `Bearer ${token}` } }),
  updateCategory: (categoryId, data, token) =>
    api.post(`/admin/update-category/${categoryId}`, data, { headers: { Authorization: `Bearer ${token}` } }),
  disableCategory: (categoryId, token) =>
    api.post(`/admin/disable-category/${categoryId}`, {}, { headers: { Authorization: `Bearer ${token}` } }),
  enableCategory: (categoryId, token) =>
    api.post(`/admin/enable-category/${categoryId}`, {}, { headers: { Authorization: `Bearer ${token}` } }),
};

export const homeApi = {
  getBooks: () => api.get('/book/home?limit=12'),
  getViewMore: () => api.get('/book/home?limit=100'),
  getCategories: () => api.get('/category/home/'),
};

export const authApi = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  logout: (email) => api.post('/auth/logout', { email }),
  verify: (email, token) => api.post('/auth/verify', { email }, { headers: { Authorization: `Bearer ${token}` } }),
};

export const userApi = {
  getUser: (id) => api.get(`/user/${id}`),
  getSelf: (token) => api.get('/user/me', { headers: { Authorization: `Bearer ${token}` } }),
  changePassword: (data, token) =>
    api.put('/user/change-password', data, { headers: { Authorization: `Bearer ${token}` } }),
  uploadAvatar: (data, token) =>
    api.post('/user/upload-avatar', data, { headers: { Authorization: `Bearer ${token}` } }),
  updateProfile: (data, token) =>
    api.put('/user/update-profile', data, { headers: { Authorization: `Bearer ${token}` } }),
  getCollection: (token) => api.get('/user/get-collection', { headers: { Authorization: `Bearer ${token}` } }),
  updateCollection: (bookId, collection, token) => {
    return api.put(
      `/user/update-collection/${bookId}`,
      { collection },
      { headers: { Authorization: `Bearer ${token}` } },
    );
  },
  removeFromCollection: (bookId, token) => {
    return api.post(
      `/user/remove-from-collection/${bookId}`,
      {},
      token ? { headers: { Authorization: `Bearer ${token}` } } : {},
    );
  },
};

export const categoryApi = {
  getBooksByCategory: (id) => api.get(`/category/${id}`),
  getAll: () => api.get(`/category/home/all`),
};

export const bookApi = {
  getBook: (id, token) => api.get(`/book/${id}`, token ? { headers: { Authorization: `Bearer ${token}` } } : {}),
};

export const reviewApi = {
  rateBook: (data, token) => api.put('/review/rate', data, { headers: { Authorization: `Bearer ${token}` } }),
  getReviews: (id) => api.get(`/review/${id}`),
  getReview: (bookId, token) => api.get(`/review/${bookId}`, { headers: { Authorization: `Bearer ${token}` } }),
  createReview: (data, token) => api.post('/review/create', data, { headers: { Authorization: `Bearer ${token}` } }),
  updateReview: (data, token) => api.put('/review/update', data, { headers: { Authorization: `Bearer ${token}` } }),
  deleteReview: (id, token) => api.delete(`/review/delete/${id}`, { headers: { Authorization: `Bearer ${token}` } }),
  voteReview: (reviewId, data, token) =>
    api.put(`/review/vote/${reviewId}`, data, { headers: { Authorization: `Bearer ${token}` } }),
};

export default api;
