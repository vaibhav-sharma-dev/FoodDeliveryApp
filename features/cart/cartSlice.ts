import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  dishName: string;
  quantity: number;
  price: number;
}

export interface CartState {
    cartItems: CartItem[];
}

const initialState: CartState = {
    cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{dishName: string, price: number}>) => {
        const {dishName, price} = action.payload;
        const priceInt = parseInt(price);
        const existingDish = state.cartItems.find((dish) => dish.dishName===dishName);

        if (existingDish) {
            existingDish.quantity += 1;
            existingDish.price += priceInt;
        }

        else {
            state.cartItems.push({dishName, quantity: 1, price: priceInt});
        }
    },

    removeFromCart: (state, action: PayloadAction<{dishName: string, price: number}>) => {
        const {dishName, price} = action.payload;
        const priceInt = parseInt(price);
        const existingDish = state.cartItems.find((dish) => dish.dishName===dishName);

        if (existingDish) {
            if (existingDish.quantity>1) {
                existingDish.quantity -= 1;
                existingDish.price -= priceInt;
            }

            else {
                state.cartItems = state.cartItems.filter((item) => (item.dishName !== dishName));
            }
        }
    }
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;