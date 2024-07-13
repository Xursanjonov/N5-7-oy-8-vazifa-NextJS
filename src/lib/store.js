import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import counterSlice from "./features/counter/CounterSlice";
import wishlistSlice from "./features/wishlist/wishlistSlice";
import cartSlice from "./features/cart/cartSlice";
import { mockAPI } from "./api/mockApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice,
      counter: counterSlice,
      wishlist: wishlistSlice,
      [api.reducerPath]: api.reducer,
      [mockAPI.reducerPath]: mockAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(api.middleware)
        .concat(mockAPI.middleware),
  });
};
