import { createSlice } from "@reduxjs/toolkit";

export const ProductsRedux = createSlice({
  name: "products",
  initialState: {
    products: [],
    isFetching: false,
    success: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getProdsStart: (state) => {
      state.isFetching = true;
      state.success = false;
      state.error = false;
    },
    getProdsSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
      state.success = true;
    },
    getProdsFailure: (state) => {
      state.isFetching = false;
      state.success = false;
      state.error = true;
    },
  },
});

export const { getProdsStart, getProdsSuccess, getProdsFailure } =
  ProductsRedux.actions;

export default ProductsRedux.reducer;
