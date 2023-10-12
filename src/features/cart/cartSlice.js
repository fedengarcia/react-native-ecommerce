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
                        // return item;
                    }
                    // return item;
                }) 
                const total = itemsUpdated.reduce((acc, current) => (acc += current.price * current.quantity));
                return {
                    ...state,
                    items: itemsUpdated,
                    total: total,
                    updatedAt: new Date().toDateString()
                }
            }else{
                state.items.push(action.payload);
                const total = state.items.reduce((acc,current) => (acc += current.price * current.quantity));
                return {
                    ...state,
                    total: total,
                    updatedAt: new Date().toDateString()
                }
            }
        },
        removeItem: (state,action) => {
            let itemsUpdated = []
            const itemId = action.payload.id;
            if(action.payload.type === 'single') itemsUpdated = state.items.filter(element => element.id === itemId);
            return state = {
                ...state,
                items: itemsUpdated
            }
        }
    }
})

export const { addItem, removeItem} = cartSlice.actions;

export default cartSlice.reducer