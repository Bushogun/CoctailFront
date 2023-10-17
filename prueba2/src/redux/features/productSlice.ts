import { createSlice } from "@reduxjs/toolkit";
import { initialStateProductStore } from "../initial-state";

const productSlice = createSlice({
  name: "product",
  initialState: initialStateProductStore,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSelectCategory: (state, action) => {
      state.selectCategory = action.payload;
    },
    setSelectProduct: (state, action) => {
      state.selectProduct = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setProducts,
  setSelectCategory,
  setSelectProduct,
  setLoading,
  setError,
} = productSlice.actions;

export default productSlice.reducer