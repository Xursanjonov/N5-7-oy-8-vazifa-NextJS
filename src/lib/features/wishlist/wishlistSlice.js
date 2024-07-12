import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const wishlistSlice = createSlice({
  name: "heart",
  initialState,
  reducers: {
    addToLike: (state, { payload }) => {
      let index = state.value?.findIndex((i) => i.id === payload.id);
      if (index < 0) {
        state.value = [...state.value, payload];
      } else {
        state.value = state.value?.filter((i) => i.id !== payload.id);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.value));
    },
    defaultWishList: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addToLike, defaultWishList } = wishlistSlice.actions;
export default wishlistSlice.reducer;
