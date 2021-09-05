import { types } from "../types";

const initialValues = {
  productosHome: {
    pageNumber: 0,
    pageSize: 0,
    countTotal: 0,
    succeeded: false,
    message: "",
    errors: null,
    data: [],
  },
  loading: false,
};

export const appReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.productosH:
      return {
        ...state,
        productosHome: { ...action.payload },
      };
    case types.setLoading:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
