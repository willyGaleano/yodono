import axios from "axios";
//import { history } from "../index";

axios.defaults.baseURL = "http://localhost:38103/api";

const responseBody = (response) => response?.data;

const request = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
  patch: (url) => axios.patch(url).then(responseBody),
};

const AppAPI = {
  productosHome: (req) =>
    request.get(
      `/Producto/GetAllAsync/?UserId=${req.userId}&EstadoNomb=${req.estadoNomb}&PageNumber=${req.pageNumber}&PageSize=${req.pageSize}`
    ),
};

const PedidoAPI = {
  pedidos: (req) =>
    request.get(
      `/Pedido/GetAllPedidosAsync/?UserId=${req.userId}&EstadoNomb=${req.estadoNomb}&PageNumber=${req.pageNumber}&PageSize=${req.pageSize}`
    ),
  solicitudes: (req) =>
    request.get(
      `/Pedido/GetAllSolicitudesAsync/?UserId=${req.userId}&EstadoNomb=${req.estadoNomb}&PageNumber=${req.pageNumber}&PageSize=${req.pageSize}`
    ),
  cambioEstadoProducto: (body) =>
    request.post("/Pedido/SolicitarProducto", body),
};

export { AppAPI, PedidoAPI };
