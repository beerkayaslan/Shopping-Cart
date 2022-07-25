import { configureStore } from "@reduxjs/toolkit";
import products from "store/reducers/productList";
import cart from "store/reducers/shoppingCart";

export const store = configureStore({
    reducer:{
        products,
        cart
    }
});