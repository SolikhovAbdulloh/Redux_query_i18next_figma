import { createSlice } from "@reduxjs/toolkit";
import Item from "antd/es/list/Item";

const marketSlice = createSlice({
  name: "market",
  initialState: {
    Like: JSON.parse(localStorage.getItem("Like")) || [],
    Shop: JSON.parse(localStorage.getItem("Shop")) || [],
  },
  reducers: {
    LikedAdd(state, actions) {
      const updateLiked = [...state.Like, actions.payload];
      state.Like = updateLiked;
      localStorage.setItem("Like", JSON.stringify(state.Like));
    },
    ShopdAdd(state, actions) {
      const updateShop = [...state.Shop, actions.payload];
      state.Shop = updateShop;
      localStorage.setItem("Shop", JSON.stringify(state.Shop));
    },
    DeleteLikeProduct(state, actions) {
      const filterLike = state.Like.filter(
        (item) => item.id !== actions.payload
      );
      state.Like = filterLike;
      localStorage.setItem("Like", JSON.stringify(state.Like));
    },
    DeleteShop(state, actions) {
      const filter = state.Shop.filter((Item) => Item.id !== actions.payload);
      state.Shop = filter;
      localStorage.setItem("Shop", JSON.stringify(state.Shop));
    },
  },
});

export const { LikedAdd, ShopdAdd, DeleteLikeProduct, DeleteShop } =
  marketSlice.actions;
export default marketSlice.reducer;
