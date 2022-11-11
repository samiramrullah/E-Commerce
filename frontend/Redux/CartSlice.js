import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
        totalpriceSum: 0,
    },
    reducers: {
        addToCart(state, action) {
            const newitem = action.payload;
            const existingItem = state.items?.find((item) => item.id === newitem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newitem.id,
                    price: newitem.price,
                    quantity: 1,
                    totalPrice: newitem.price,
                    name: newitem.name,
                });
                
            } else {
                existingItem.quantity++;
                existingItem.totalPrice =
                    Number(existingItem.totalPrice) + Number(newitem.price);
            }
        },
        removeFromCart(state, action) {
            state = state.filter((itm) => itm.id != action.payload)
        },
    },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;



