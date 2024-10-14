import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientApi from "../../services/api/clientApi";

const api = clientApi();

export const fetchOrders = createAsyncThunk(
  "fetch/orders",
  async (page = 1) => {
    const { currentPage } = page;
    const { data } = await api.get(`/orders?page=${currentPage}&limit=5`);
    return data;
  }
);

export const countOrders = createAsyncThunk("get/countOrders", async () => {
  const { data } = await api.get("/orders/get/count");
  return data;
});

export const changeOrderStatus = createAsyncThunk(
  "admin/update",
  async ({ id, status }) => {
    const response = await api.put(`/orders/${id}`, status);
    return response.data.data;
  }
);

export const deleteOrder = createAsyncThunk("admin/deleteOrder", async (id) => {
  const response = await api.delete(`/orders/${id}`);
  return response.data;
});

const adminDashboardSlice = createSlice({
  name: "adminDashboard",
  initialState: {
    isLoading: false,
    orders: [],
    total: 0,
    limit: 5,
    currentPage: 1,
    totalPages: 0,
    searchResult: [],
    completed: 0,
    processing: 0,
    canceled: 0,
    pending: 0,
    error: null,
  },
  reducers: {
    setSearchOrder: (state, action) => {
      state.searchResult = [];
      state.searchResult = state.orders.filter(
        (order) =>
          order.number == action.payload ||
          order.user.name.includes(action.payload) ||
          order.status.includes(action.payload)
      );
    },
  },
  extraReducers: (builder) => {
    // handle countOrders lifecycle

    builder.addCase(countOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.total = action.payload.orderCount;
      state.error = null;
      state.totalPages = Math.ceil(state.total / state.limit);
    });

    builder.addCase(fetchOrders.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      const { currentPage } = action.meta.arg;
      state.currentPage = currentPage;
      state.orders = action.payload.data;
      state.completed = state.orders.filter(
        (order) => order.status === "complete"
      ).length;
      state.pending = state.orders.filter(
        (order) => order.status === "pending"
      ).length;
      state.canceled = state.orders.filter(
        (order) => order.status === "canceled"
      ).length;
      state.processing = state.orders.filter(
        (order) => order.status === "processing"
      ).length;
      state.error = null;
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      state.orders = [];
    });

    // handle changeOrderStatus lifecycle
    builder.addCase(changeOrderStatus.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(changeOrderStatus.fulfilled, (state, action) => {
      state.isLoading = false;
      const { id, status } = action.meta.arg;
      const orderIndex = state.orders.findIndex((order) => order._id === id);
      state.orders[orderIndex].status = status.status;
      state.error = null;
    });

    builder.addCase(changeOrderStatus.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    //
    // handle deleteOrder lifecycle
    builder.addCase(deleteOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orders = state.orders.filter(
        (order) => order._id !== action.meta.arg
      );
      state.error = null;
    });

    builder.addCase(deleteOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default adminDashboardSlice.reducer;
export const {  setSearchOrder, setCurrentPage, setItemsPerPage } =
  adminDashboardSlice.actions;
