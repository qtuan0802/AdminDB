import { productType } from "../type";
const initialState = null;

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productType.GET_PRODUCTS_SUCCESS:
      return action?.payload?.data;

    default:
      return state;
  }
};
