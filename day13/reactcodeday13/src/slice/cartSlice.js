import { createSlice } from "@reduxjs/toolkit";

const cartSLice = createSlice({
  name: "cart",
  initialState: ["mango", "banana"],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      // let found = null;
      // state.map((e) => {
      //   if (e === action.payload) {
      //     found = e;
      //   }
      //   return found;
      // });
      // if (!found) {
      //   return state.filter((x) => x !== found);
      // }
      state.pop();
    },
  },
});

export const { addToCart, removeFromCart } = cartSLice.actions;
export default cartSLice.reducer;
