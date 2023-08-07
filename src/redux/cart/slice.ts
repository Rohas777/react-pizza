import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartItem, CartSliceState } from "./types";
import { getCartFromLocalStorage } from "../../utils/getCartFromLocalStorage";
import { calcTotalPrice } from "../../utils/calcTotalPrice";


const cartData = getCartFromLocalStorage()

const initialState: CartSliceState = {
    totalPrice: cartData.totalPrice,
    items: cartData.items,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addPizza(state, action: PayloadAction<CartItem>) {
            const findPizza = state.items.find(obj => obj.id === action.payload.id)

            if (findPizza) {
                findPizza.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }

            state.totalPrice = calcTotalPrice(state.items)
        },
        minusPizza(state, action: PayloadAction<string>) {
            const findPizza = state.items.find(obj => obj.id === action.payload)

            if (findPizza && findPizza.count > 1) {
                findPizza.count--
            } else if (findPizza && findPizza.count <= 1) {
                state.items = state.items.filter(obj => obj.id !== findPizza.id)
            }

            state.totalPrice = calcTotalPrice(state.items)
        },
        removePizza(state, action: PayloadAction<string>) {
            state.items = state.items.filter(obj => obj.id !== action.payload)
            state.totalPrice = calcTotalPrice(state.items)
        },
        clearPizza(state) {
            state.items = []
            state.totalPrice = 0
        },
    }
})

export const { addPizza, removePizza, minusPizza, clearPizza } = cartSlice.actions

export default cartSlice.reducer