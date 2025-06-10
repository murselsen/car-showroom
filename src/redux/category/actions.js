import { createAction } from "@reduxjs/toolkit";
import { SET_SELECTED_CATEGORY, RESET_SELECTED_CATEGORY } from "./contants";

export const setSelectedCategory = createAction(SET_SELECTED_CATEGORY);
export const resetSelectedCategory = createAction(RESET_SELECTED_CATEGORY);
