import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./features/user/userSlice"
import cartReduser from "./features/cart/cartSlice"

const store = configureStore({
    reducer: {
        user: userReduser,
        cart: cartReduser,
    }
})

export default store;