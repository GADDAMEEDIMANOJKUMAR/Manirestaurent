import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        clearItem: (state) => {
            state.items.length = 0;
        },
        
        increaseItem: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseItem: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        }
    }
});

export const {addItem,clearItem,decreaseItem, increaseItem} = CartSlice.actions

export default CartSlice.reducer
