import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "../features/shop/shopSlice";
import { shopApi } from "../services/shopAPI";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import cartSlice from "../features/cart/cartSlice";
import { authApi } from "../services/authAPI";

const store = configureStore({
    reducer: {
        shop: shopSlice,
        cart: cartSlice,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware)
})


setupListeners(store.dispatch);


export default store;