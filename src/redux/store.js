import { configureStore } from "@reduxjs/toolkit"
import registerReducer from "./features/RegisterSlice"
import loginReducer from "./features/loginSlice"
import categoriesReducer from "./features/allProductsSlice"
import productsReducer from "./features/productsSlice"
import productReducer  from "./features/oneProductSlice"
import brandsReducer from "./features/brandsSlice"
import adminDashboardReducer from "./features/adminDashboardSlice"
import cartReducer from "./features/cartsSlice"



export const store = configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
        categories: categoriesReducer,
        products: productsReducer ,
        product: productReducer ,
        brands: brandsReducer,
        admin: adminDashboardReducer,
        // cart: cartReducer
    },
})