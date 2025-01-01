import { configureStore } from "@reduxjs/toolkit";
import marketReducer from "./market_slice/market";
export const store = configureStore({
  reducer: {
    market: marketReducer,
  },
});
