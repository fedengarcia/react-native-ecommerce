import { createSlice } from "@reduxjs/toolkit";
import { DATA_CATEGORIES } from "../../data/global_data";
import { DATA_PRODUCTS } from "../../data/products";

const initialState = {
    categories: DATA_CATEGORIES,
    producs: DATA_PRODUCTS,
    productsFilterByCategory: [],
    categorySelected: null,
    productIdSelected: null,
}


export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        setCategorySelected: () => {},
        setProductIdSelected: () => {}
    }
})

export const {setCategorySelected, setProductIdSelected} = shopSlice.actions;

export default shopSlice.reducer