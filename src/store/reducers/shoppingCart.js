import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    cartSlide: false,
    total: 0
}

const shoppingCartSlice = createSlice({
    name: "shoppingCartSlice",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const { id, img, price, title_en } = action.payload;
            const isOld = state.cart.map((item) => item.id).includes(id);
            if (isOld) {
                state.cart = state.cart.map((item) => {
                    if (item.id === id) {
                        return { ...item, count: item.count + 1 }
                    }
                    return item;
                });
            } else {
                state.cart = [...state.cart, { id, img, price, title_en, count: 1 }]
            }
        },
        deleteProduct: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    if (item.count != 1) {
                        return { ...item, count: item.count - 1 }
                    }
                    return null;
                }

                return item;
            }).filter(Boolean);
        },
        cartSlideAction: (state, action) => {
            state.cartSlide = action.payload;
        },
        deleteCountAllProduct: (state,action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        }
    }
});

export const { addProduct, deleteProduct, cartSlideAction, deleteCountAllProduct } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;