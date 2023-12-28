import axios from 'axios';

const baseURL = 'https://trackerwaterapp.onrender.com';

axios.defaults.baseURL = baseURL;

export const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  localStorage.setItem('token', token);
};

// const removeToken = () => {
//   delete baseURL.defaults.headers.common['Authorization'];
//   localStorage.removeItem('token');
// };

export const signup = async body => {
  const { data } = await axios.post('/users/signup', body);
  setToken(data.token);
  return data;
};

export const signin = async body => {
  const { data } = await axios.post('/users/signin', body);
  setToken(data.token);
  return data;
};

export const refreshUser = async token => {
  setToken(token);
  const { data } = await axios.get('/users/current');
  return data;
};
