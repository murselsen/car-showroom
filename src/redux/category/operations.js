import { createAsyncThunk } from "@reduxjs/toolkit";
import { FETCH_CATEGORIES } from "./contants";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  FETCH_CATEGORIES,
  async (_, thunkApi) => {
    try {
      const response = await axios.get(
        "https://api.murselsen.com/vehicles/categories",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
