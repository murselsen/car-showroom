// Recuder slice Name
export const SLICE_NAME = "category";

// Actions
export const SET_SELECTED_CATEGORY = `${SLICE_NAME}/setSelectedCategory`;
export const RESET_SELECTED_CATEGORY = `${SLICE_NAME}/resetSelectedCategory`;
// Operations
export const FETCH_CATEGORIES = `${SLICE_NAME}/fetchCategories`;
export const FETCH_CATEGORIES_PENDING = `${FETCH_CATEGORIES}/pending`;
export const FETCH_CATEGORIES_FULFILLED = `${FETCH_CATEGORIES}/fulfilled`;
export const FETCH_CATEGORIES_REJECTED = `${FETCH_CATEGORIES}/rejected`;
