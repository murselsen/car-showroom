import { createAction } from "@reduxjs/toolkit";
import { SET_SELECTED_VEHICLE, RESET_SELECTED_VEHICLE } from "./contacts";

export const setSelectedVehicle = createAction(SET_SELECTED_VEHICLE);
export const resetSelectedVehicle = createAction(RESET_SELECTED_VEHICLE);