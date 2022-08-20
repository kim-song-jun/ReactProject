import { createSlice, configureStore } from '@reduxjs/toolkit';

let userName = createSlice({
  name: 'userName',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    // state변경 함수들을 action이라고 부름
    setUserName(state) {
      state.name = 'Park';
    },
    increaseAge(state, action) {
      state.age += action.payload;
    },
  },
});

export let { setUserName, increaseAge } = userName.actions;

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
  reducers: {
    setCount(store, action) {
      for (let i of store) {
        if (i.id == action.payload) {
          i.count++;
        }
      }
    },
    addUserCart(store, action) {
      for (let i of store) {
        if (i.id == action.payload.id) {
          i.count++;
          return store;
        }
      }
      // console.log(action.payload);
      let copy = [
        ...store,
        { id: action.payload.id, name: `${action.payload.title}`, count: 1 },
      ];
      return copy;
    },
  },
});

export let { setCount, addUserCart } = userCart.actions;

export default configureStore({
  reducer: {
    userName: userName.reducer,
    stock: stock.reducer,
    userCart: userCart.reducer,
  },
});
