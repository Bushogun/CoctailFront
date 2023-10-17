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
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
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
  setSearchQuery,
  setLoading,
  setError,
} = productSlice.actions;

export default productSlice.reducer