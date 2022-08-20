import { createSlice, configureStore } from '@reduxjs/toolkit';

let userName = createSlice({
  name: 'userName',
  initialState: 'kim',
});

let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12],
});

export default configureStore({
  reducer: {
    userName: userName.reducer,
    stock: stock.reducer,
  },
});
