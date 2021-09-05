import { message } from "antd";
import { PedidoAPI } from "../../services/api";
import { types } from "../types";
import { getProductosHome } from "./appActions";

export const cambiarEstadoProducto = (body, request, mensaje) => {
  return async (dispatch) => {
    try {
      dispatch(cambiarEstadoLoading(true));
      const resp = await PedidoAPI.cambioEstadoProducto(body);
      if (resp.succeeded) {
        dispatch(getProductosHome(request));
        message.success(mensaje);
      } else {
        message.error(resp.message);
      }
      dispatch(cambiarEstadoLoading(false));
    } catch (error) {
      dispatch(cambiarEstadoLoading(false));
      message.error(error.message);
    }
  };
};

const cambiarEstadoLoading = (data) => ({
  type: types.setLoading,
  payload: data,
});

export const getProductosPedido = (request) => {
  return async (dispatch) => {
    try {
      const resp = await PedidoAPI.pedidos(request);
      console.log(resp);
      resp.succeeded
        ? dispatch(cargarProductosPedidos(resp))
        : message.error(resp.message);
    } catch (error) {
      message.error(error.message);
    }
  };
};

const cargarProductosPedidos = (data) => ({
  type: types.productosP,
  payload: data,
});

export const getProductosSolicitud = (request) => {
  return async (dispatch) => {
    try {
      const resp = await PedidoAPI.solicitudes(request);
      resp.succeeded
        ? dispatch(cargarProductosSolcitud(resp))
        : message.error(resp.message);
    } catch (error) {
      message.error(error.message);
    }
  };
};

const cargarProductosSolcitud = (data) => ({
  type: types.productosS,
  payload: data,
});
