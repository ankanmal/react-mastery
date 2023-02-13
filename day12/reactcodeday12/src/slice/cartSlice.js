import { createSlice } from "@reduxjs/toolkit";

const cartSLice = createSlice({
  name: "cart",
  initialState: ["mango", "banana"],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addToCart } = cartSLice.actions;
export default cartSLice.reducer;
