import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientApi from "../../services/api/clientApi";

const api = clientApi()

export const handleLogout = createAsyncThunk("user/logout", async (id) => {
    const response = await api.delete(`/users/${id}`)
    console.log(response)
    if(response.status === 200) window.location.href = "/login"
    return response.data
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
                state.isLoading = false
            })
            .addCase(handleLogout.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    }
})