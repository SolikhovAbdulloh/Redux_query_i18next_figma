import { configureStore } from "@reduxjs/toolkit";
import { market } from "./market_slice/";

export const store = configureStore({
  reducer: {
    market,
  },
});
