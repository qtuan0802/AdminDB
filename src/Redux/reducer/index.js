import { combineReducers } from "redux";
import { productReducer } from "./product";

export const RootReducer = combineReducers({
  product: productReducer,
});
