import { createSlice } from "@reduxjs/toolkit";
import products from "data/products.json";

const initialState = {
    products,
    searchTexT: "",
    selectCategory: ""
}

const productList = createSlice({
    name: "productList",
    initialState,
    reducers: {
        searchAction: (state, action) => {
            state.searchTexT = action.payload
        },
        categorySelectAction: (state, action) => {
            state.selectCategory = action.payload
        },
        productFilter: (state, action) => {
            state.selectCategory
                ?
                state.products = products.filter(product =>
                    product.title_en.toLowerCase().includes(state.searchTexT.toLowerCase())
                    &&
                    product.category_id === state.selectCategory
                )
                :
                state.products = products.filter(product =>
                    product.title_en.toLowerCase().includes(state.searchTexT.toLowerCase())
                );
        }
    }
});

export const { searchAction, categorySelectAction, productFilter } = productList.actions;
export default productList.reducer;