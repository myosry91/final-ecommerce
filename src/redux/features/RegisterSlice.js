import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import clientApi from "../../services/api/clientApi";
import { toast } from "react-toastify";

const api = clientApi();

export const handleRegister = createAsyncThunk(
  "user/register",
  async (data) => {
   try {
     const response = await api.post("/auth/signup", data);
     if (response.status === 201) {
      toast.success("user created successfuly", {
        className:'bg-black text-white'
      })
       window.location.href = "login"
     }
     
    return response.data;
   } catch (error) {
     toast.error(error.response.data.errors[0].msg, {
      className:'bg-black text-white'
    })
   }
  }
);

const regsterSlice = createSlice({
  name: "register",
  initialState: {
    isLoading: false,
    user: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleRegister.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(handleRegister.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      console.log(action)
      state.error = null;
    });
    builder.addCase(handleRegister.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.error.message);
      state.error = action.error.message;
      state.user = null;
    });
  },
});

export default regsterSlice.reducer;
