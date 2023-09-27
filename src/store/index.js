import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "../features/shop/shopSlice";
import { shopApi } from "../services/shopAPI";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
    reducer: {
        shop: shopSlice,
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shopApi.middleware)
})


setupListeners(store.dispatch);


export default store;