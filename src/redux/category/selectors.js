export const selectCategories = (state) => state.category.categories;
export const selectIsLoading = (state) => state.category.isLoading;
export const selectError = (state) => state.category.error;

export const selectSelectedCategory = (state) =>
  state.category.selectedCategory;
