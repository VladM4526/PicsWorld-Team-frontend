import axios from 'axios';

const baseURL = 'https://water-tracker-backend.onrender.com/api';

axios.defaults.baseURL = baseURL;

const setToken = token => {
  baseURL.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  localStorage.setItem('token', token);
};

// const removeToken = () => {
//   delete baseURL.defaults.headers.common['Authorization'];
//   localStorage.removeItem('token');
// };

// export const signup = async body => {
//   const { data } = await baseURL.post('/auth/signup', body);
//   setToken(data.token);
//   return data;
// };

export const signin = async body => {
  const { data } = await baseURL.post('/auth/signin', body);
  setToken(data.token);
  return data;
};

export const refreshUser = async token => {
  setToken(token);
  const { data } = await baseURL.get('/users/current');
  return data;
};
