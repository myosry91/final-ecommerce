import { configureStore } from "@reduxjs/toolkit"
import registerReducer from "./features/RegisterSlice"

export const store = configureStore({
    reducer: {
        register:registerReducer
    },
})