import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProdectCardSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
