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
            state.totalPrice += newitem.price;
            if (!existingItem) {
                state.items.push({
                    id: newitem.id,
                    price: newitem.price,
                    quantity: 1,
                    totalPrice: newitem.price,
                    name: newitem.title,
                    img: newitem.image,
                });

            } else {
                existingItem.quantity++;
                existingItem.totalPrice =
                    Number(existingItem.totalPrice) + Number(newitem.price);
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
    },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;



