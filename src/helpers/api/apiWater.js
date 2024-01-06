import axios from 'axios';

// const token = localStorage.getItem('token');

// axios.defaults.baseURL = 'https://trackerwaterapp.onrender.com/api/water/';
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

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

export const editWaterNote = async (id, updateNote) => {
  const { data } = await axios.patch(`/water/update/${id}`, updateNote);
  return data;
};

export const deleteWaterNote = async id => {
  const { data } = await axios.delete(`/water/delete/${id}`);
  return data;
};

// const water1 = [
//   {
//     id: '76rfoyuvop86ryfl',
//     date: 'Thu Dec 28 2023 12:25:46 GMT+0200 (за східноєвропейським стандартним часом)',
//     volumeWater: 200,
//     userId: 'u6rfoluyvl87ygf;vi.k',
//   },
// ];

// const water2 = [
//   {
//     userId: 'u6rfoluyvl87ygf;vi.k',
//     notes: [
//       {
//         id: '76rfoyuvop86ryfl',
//         date: 'Thu Dec 28 2023 12:25:46 GMT+0200 (за східноєвропейським стандартним часом)',
//         volumeWater: 200,
//       },
//     ],
//   },
// ];
