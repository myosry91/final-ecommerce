import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientApi from "../../services/api/clientApi";
import { Navigate } from "react-router-dom";

const api = clientApi()

export const handleLogout = createAsyncThunk("user/logout", async (id) => {
    const response = await api.post(`/auth/logout`)
    console.log(response)
    if (response.status === 200) {
        // <Navigate to={'/login'} replace={true} />
        localStorage.removeItem("role")
        window.location.href = '/login'
    }
    return response.data.data
})

const logoutSlice = createSlice({
    name: "logout",
    initialState: {
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(handleLogout.pending, (state) => {
                state.isLoading = true
            })
            .addCase(handleLogout.fulfilled, (state) => {
                console.log("fulfilled")
                state.isLoading = false
                // localStorage.removeItem("role")
            })
            .addCase(handleLogout.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
                console.log(action.error.message)
            })
    }
})