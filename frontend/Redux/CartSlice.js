import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
        },
        removeFromCart(state, action) {
            state = state.filter((itm) => itm.id != action.payload)
        },
    },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;