import { combineReducers } from "redux";
import { appReducer } from "./reducers/appReducer";
import { pedidosReducer } from "./reducers/pedidosReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  pedido: pedidosReducer,
});
