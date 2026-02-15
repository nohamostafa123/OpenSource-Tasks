import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
    toastMessage: "", 
    toastType: "", 
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.toastMessage = " Loading products...";
        state.toastType = "info";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.toastMessage = " Products loaded successfully!";
        state.toastType = "success";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.toastMessage = " Error loading products";
        state.toastType = "error";
      });
  },
});

export default productsSlice.reducer;
