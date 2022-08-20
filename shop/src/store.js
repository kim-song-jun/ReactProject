import { createSlice, configureStore } from '@reduxjs/toolkit';

let userName = createSlice({
  name: 'userName',
  initialState: 'kim',
  reducers: {
    setUserName(state) {
      return 'john' + state;
    },
  },
});

export let { setUserName } = userName.actions;

let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12],
});

let userCart = createSlice({
  name: 'userCart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
});

export default configureStore({
  reducer: {
    userName: userName.reducer,
    stock: stock.reducer,
    userCart: userCart.reducer,
  },
});
