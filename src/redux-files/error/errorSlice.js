// import { createSlice } from '@reduxjs/toolkit';

// const errorSlice = createSlice({
//   name: 'error',
//   initialState: null,
//   reducers: { 
//     logout(state, action){
//         return null
//     }

//   },
//   extraReducers: builder => {
//     builder
//       .addMatcher(
//         action => {
//           if (action.type.endsWith('/fulfilled')) {
//             return true;
//           }
//         },
//         state => {
//           return null;
//         }
//       )
//       .addMatcher(
//         action => {
//           if (action.type.endsWith('/rejected')) {
//             return true;
//           }
//         },
//         (state, action) => {
//           state = action.payload;
//         }
//       );
//   },
// });

// export const {logout} =errorSlice.actions

// export default errorSlice.reducer