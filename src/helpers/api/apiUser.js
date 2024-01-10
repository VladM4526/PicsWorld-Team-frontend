import axios from 'axios';

const baseURL = 'https://trackerwaterapp.onrender.com/api';

axios.defaults.baseURL = baseURL;

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const deleteToken = () => {
  delete axios.defaults.headers.common['Authorization'];
};

export const signup = async body => {
  const { data } = await axios.post('/auth/signup', body);
  setToken(data.token);
  return data;
};

export const signin = async body => {
  const { data } = await axios.post('/auth/signin', body);
  setToken(data.user.token);
  return data;
};

export const refreshUser = async token => {
  setToken(token);
  const { data } = await axios.get('/users/current');
  return data;
};

export const addWaterRate = async waterRate => {
  const { data } = await axios.put(`/users/waterrate`, {
    waterRate: waterRate,
  });
  return data.waterRate;
};

export const updateAvatarUsers = async newPictureUser => {
  const avatarURL = await axios.patch('/users/avatars', newPictureUser, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(avatarURL);
  return avatarURL.data;
};

export const updateUserAccount = async updateUser => {
  const { data } = await axios.patch('/users/userinfo', updateUser );
  return data;
};

export const logout = async () => {
  await axios.post('/auth/signout');
  deleteToken();
};
