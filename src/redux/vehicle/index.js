// This module imports vehicle-related actions, selectors, and the reducer,
import * as actions from "./actions";
import * as selectors from "./selectors";
import * as operations from "./operations";
import vehicleReducer from "./reducer";

// Exporting actions, selectors, and the reducer
export {
  actions as vehicleActions,
  selectors as vehicleSelectors,
  operations as vehicleOperations,
};
export default vehicleReducer;
