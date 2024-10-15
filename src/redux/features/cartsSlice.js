import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import clientApi from "../../services/api/clientApi";

const api = clientApi()

export const fetchOrders= createAsyncThunk("fetch/orders", async () => {
    const response = await api.get("/orders")
    return response.data.data
})

// export const AddToCart = createAsyncThunk("fetch/cart", async (id) => {
//     const response = await api.post(`/order/${id}`
//     )
//     console.log(response)
//     return response.data?.data
// })

const cartsSlice = createSlice({
    name: "orders",
    initialState: {
        isLoading: false,
        orders: [],
        cartItems: [],
        discount: 0,
        error: null
    },

    reducers: {
        // addToCart: (state, action) => {
        //     const existingProduct = state.orders.find(item => item.id === action.payload.id);
        //     if (existingProduct) {
        //         existingProduct.quantity += action.payload.quantity; 
        //     } else {
        //         state.orders.push(action.payload); 
        //     }
        // }
    
    
    // applyPromoCode: (state, action) => {
    //     if (action.payload === "PROMO20") {
    //         state.discount = 0.2; 
    //     } else {
    //         state.discount = 0; 
    //     }
    // },
    // resetDiscount: (state) => {
    //     state.discount = 0;
    // },
    // updateCartItem: (state, action) => {
    //     const { id, actionType } = action.payload;
    //     const item = state.cartItems.find(item => item.id === id);
        
    //     if (actionType === 'increase' && item) {
    //         item.quantity += 1;
    //     } else if (actionType === 'decrease' && item && item.quantity > 1) {
    //         item.quantity -= 1;
    //     } else if (actionType === 'remove') {
    //         state.cartItems = state.cartItems.filter(item => item.id !== id);
    //     }
    // },
    },

    extraReducers: (builder) => {
        // builder.addCase(AddToCart.pending, (state) => {
        //     state.isLoading = true
        // });

        // builder.addCase(AddToCart.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.cartItems = action.payload
        //     state.error = null
        // });

        // builder.addCase(AddToCart.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.cartItems = []
        //     state.error = action.error.message
        // });
         
        builder.addCase(fetchOrders.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(fetchOrders.fulfilled, (state, action) => {
            state.isLoading = false
            state.cartItems = action.payload
            state.error = null
        });

        builder.addCase(fetchOrders.rejected, (state, action) => { 
            state.isLoading = false
            state.orders = {}
            state.error = action.error.message
        })

    }
})

// export const { addToCart ,applyPromoCode, resetDiscount ,updateCartItem } = cartsSlice.actions;
export default cartsSlice.reducer