import { createSlice } from "@reduxjs/toolkit";
import {
  SLICE_NAME,
  FETCH_VEHICLES_PENDING,
  FETCH_VEHICLES_FULFILLED,
  FETCH_VEHICLES_REJECTED,
} from "./contacts";

const vehicleSlice = createSlice({
  name: SLICE_NAME,
  initialState: {
    vehicles: [],
    isLoading: false,
    error: null,
    selectedVehicle: null,
  },
  reducers: {
    setVehicles: (state, action) => {
      state.vehicles = action.payload;
    },
    setSelectedVehicle: (state, action) => {
      state.selectedVehicle = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FETCH_VEHICLES_PENDING, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(FETCH_VEHICLES_FULFILLED, (state, action) => {
        state.isLoading = false;
        state.vehicles = action.payload;
        state.error = null;
      }),
      builder.addCase(FETCH_VEHICLES_REJECTED, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default vehicleSlice.reducer;
