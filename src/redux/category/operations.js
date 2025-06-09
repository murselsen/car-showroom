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

      const data = response.data.map((item, index) => {
        const { name } = item;

        let categoryName = name.toLowerCase().replace(/\s+/g, "-");
        let category = {
          index: index,
          ...item,
          icon: `https://api.murselsen.com/photos/icon-${categoryName}-car.png`,
        };

        return category;
      });

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
