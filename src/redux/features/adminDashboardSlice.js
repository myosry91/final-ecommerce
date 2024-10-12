import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientApi from "../../services/api/clientApi";

const api = clientApi();

export const fetchOrders = createAsyncThunk(
  "fetch/orders",
  async ({page = 1}) => {
    const { data } = await api.get(`/orders?page=${page}&limit=5`);
    return data;
  }
);

export const countOrders = createAsyncThunk("get/countOrders", async () => {
  const { data } = await api.get("/orders/get/count");
  return data;
})

export const changeOrderStatus = createAsyncThunk(
  "admin/update",
  async ({ id, status }) => {
    const response = await api.put(`/orders/${id}`, status);
    return response.data.data;
  }
);

export const deleteOrder = createAsyncThunk("admin/deleteOrder", async (id) => {
  const response = await api.delete(`/orders/${id}`);
  return response.data.data._id;
})

const adminDashboardSlice = createSlice({
  name: "adminDashboard",
  initialState: {
    isLoading: false,
    orders: [],
    total:0,
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
    ordersStatus: (state, {payload : orders}) => {
      console.log(orders)
      state.completed = orders.filter(
        (order) => order.status === "complete"
      ).length;
      state.pending = orders.filter(
        (order) => order.status === "pending"
      ).length;
      state.canceled = orders.filter(
        (order) => order.status === "canceled"
      ).length;
      state.processing = orders.filter(
        (order) => order.status === "processing"
      ).length;
    },
    setSearchOrder: (state, action) => {
      state.searchResult = [];
      state.searchResult = state.orders.filter(
        (order) =>
          order.number == action.payload ||
          order.user.name.includes(action.payload) ||
          order.status.includes(action.payload)
      );
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },

  },
  extraReducers: (builder) => {
    // handle countOrders lifecycle

    builder.addCase(countOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.total = action.payload.orderCount;
      state.error = null;
      // state.totalPages = Math.ceil(state.total / state.limit); // infinity loop
    });
    
    builder.addCase(fetchOrders.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orders = action.payload.data;
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
      console.log(action.error);
    });

    // 
    // handle deleteOrder lifecycle
    builder.addCase(deleteOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      const {id} = action.meta.arg
      console.log(id);
      state.orders = state.orders.filter(
        (order) => order._id !== id
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
export const { ordersStatus, setSearchOrder, setPage, setCurrentPage, setItemsPerPage } =
  adminDashboardSlice.actions;
