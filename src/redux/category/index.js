// This module imports vehicle-related actions, selectors, and the reducer,
import * as actions from "./actions";
import * as selectors from "./selectors";
import * as operations from "./operations";
import reducer from "./reducer";

// Exporting actions, selectors, and the reducer
export {
  actions as categoryActions,
  selectors as categorySelector,
  operations as categoryOperations,
};
export default reducer;
