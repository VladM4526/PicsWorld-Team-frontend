import axios from 'axios';

export const getWaterNotes = async () => {
  const { data } = await axios.get('/water/today');
  return data;
};

export const getWaterStats = async month => {
  const { data } = await axios.get(`/water/${month}`);
  return data;
};

export const addWaterNote = async newNote => {
  const { data } = await axios.post('/water/create', newNote);
  return data;
};

export const editWaterNote = async ({ id, newNote }) => {
  const { data } = await axios.patch(`/water/update/${id}`, newNote);
  return data;
};

export const deleteWaterNote = async id => {
  const { data } = await axios.delete(`/water/delete/${id}`);
  return data;
};
