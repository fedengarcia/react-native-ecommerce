import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: "user",
    updatedAt: Date.now().toLocaleString(),
    items: [],
    total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const productRepeated = state.items.find(item => item.id === action.payload.id);
            if(productRepeated){
                const itemsUpdated = state.items.map(item => {
                    if(item.id === action.payload.id){
                        item.quantity += action.payload.quantity;
                        return item;
                    }
                    return;
                }) 
                const total = itemsUpdated.reduce((acc, current) => (acc += current.price * current.quantity));
                state = {
                    ...state,
                    items: itemsUpdated,
                    total,
                    updatedAt: new Date().toDateString()
                }
            }else{
                state.items.push(action.payload);
                const total = state.items.reduce((acc,current) => (acc += current.price * current.quantity));
                state = {
                    ...state,
                    total,
                    updatedAt: new Date().toDateString()
                }
            }
        },
        removeItem: (state,action) => {}
    }
})

export const { addItem, removeItem} = cartSlice.actions;

export default cartSlice.reducer