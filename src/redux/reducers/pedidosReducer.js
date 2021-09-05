import { types } from "../types";

const initialValues = {
  productosSolicitud: {
    pageNumber: 0,
    pageSize: 0,
    countTotal: 0,
    succeeded: false,
    message: "",
    errors: null,
    data: [],
  },
  productosPedidos: {
    pageNumber: 0,
    pageSize: 0,
    countTotal: 0,
    succeeded: false,
    message: "",
    errors: null,
    data: [],
  },
};

export const pedidosReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.productosS:
      return {
        ...state,
        productosSolicitud: { ...action.payload },
      };
    case types.productosP:
      return {
        ...state,
        productosPedidos: { ...action.payload },
      };
    default:
      return state;
  }
};
