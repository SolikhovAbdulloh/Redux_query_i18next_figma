import { createSlice } from "@reduxjs/toolkit";

const market = createSlice({
  name: "market",
  initialState: {
    Like: JSON.parse(localStorage.getItem("Like")) || [],
  },
  reducers: {
    LikedAdd(state, actions) {
      const updateLiked = [...state.Liked, actions.payload];
      state.Liked = updateLiked;
      localStorage.setItem("Liked", JSON.stringify(state.Liked));
    },
  },
});

export const { LikedAdd } = market.actions;
export default market.reducer;
