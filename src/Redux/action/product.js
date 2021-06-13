import { productType } from "../type";

export const getProduct = (data, callback) => {
  return {
    type: productType.GET_PRODUCTS,
    payload: { data, callback },
  };
};
