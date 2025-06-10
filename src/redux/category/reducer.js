import { createSlice } from "@reduxjs/toolkit";
import {
  SLICE_NAME,
  FETCH_CATEGORIES_PENDING,
  FETCH_CATEGORIES_FULFILLED,
  FETCH_CATEGORIES_REJECTED,
} from "./contants";
const categorySlice = createSlice({
  name: SLICE_NAME,
  initialState: {
    categories: [],
    isLoading: false,
    error: null,
    selectedCategory: null,
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    resetSelectedCategory: (state) => {
      state.selectedCategory = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FETCH_CATEGORIES_PENDING, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(FETCH_CATEGORIES_FULFILLED, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
        state.error = null;
      }),
      builder.addCase(FETCH_CATEGORIES_REJECTED, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default categorySlice.reducer;
