import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  cartItems: Array<number>
}

const initialState: CartState = {
    cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.cartItems.push()
    },
    decrement: (state) => {
    //   state.cartItems -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.cartItems += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = cartSlice.actions

export default cartSlice.reducer