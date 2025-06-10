// Redux slice for vehicle management
export const SLICE_NAME = "vehicle";
export const SET_SELECTED_VEHICLE = SLICE_NAME + "/setSelectedVehicle";
export const RESET_SELECTED_VEHICLE = SLICE_NAME + "/resetSelectedVehicle";
// Actions for fetching vehicles ASYNC
export const FETCH_VEHICLES = SLICE_NAME + "/fetchVehicles";
export const FETCH_VEHICLES_PENDING = SLICE_NAME + "/fetchVehicles/pending";
export const FETCH_VEHICLES_FULFILLED = SLICE_NAME + "/fetchVehicles/fulfilled";
export const FETCH_VEHICLES_REJECTED = SLICE_NAME + "/fetchVehicles/rejected";
