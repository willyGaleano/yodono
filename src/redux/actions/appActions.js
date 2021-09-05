import { message } from "antd";
import { AppAPI } from "../../services/api";
import { types } from "../types";

export const getProductosHome = (request) => {
  return async (dispatch) => {
    try {
      const resp = await AppAPI.productosHome(request);
      console.log(resp);
      resp.succeeded
        ? dispatch(cargarProductosHome(resp))
        : message.error(resp.message);
    } catch (error) {
      message.error(error.message);
    }
  };
};

const cargarProductosHome = (data) => ({
  type: types.productosH,
  payload: data,
});
