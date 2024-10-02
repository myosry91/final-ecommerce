import { configureStore } from "@reduxjs/toolkit"
import registerReducer from "./features/RegisterSlice"
import categoriesReducer from "./features/CategoriesSlice"

export const store = configureStore({
    reducer: {
        register: registerReducer,
        categories: categoriesReducer
    },
})