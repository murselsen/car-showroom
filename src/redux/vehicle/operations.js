import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { FETCH_VEHICLES } from "./contacts";

export const fetchVehicles = createAsyncThunk(
  FETCH_VEHICLES,
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://api.murselsen.com/vehicles", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
 