import { configureStore } from "@reduxjs/toolkit";
import vehicleReducer from "./vehicle";
import categoryReducer from "./category";
export const store = configureStore({
  reducer: {
    vehicle: vehicleReducer,
    category: categoryReducer,
  },
});
