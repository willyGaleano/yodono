import { BrowserRouter, Route, Switch } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import UsuariosPage from "../pages/admin/user/UsuariosPage";
import LoginPage from "../pages/auth/login/LoginPage";
import RegisterPage from "../pages/auth/register/RegisterPage";
import PedidosPage from "../pages/donation/pedidos/PedidosPage";
import SolicitudesPage from "../pages/donation/solicitudes/SolicitudesPage";
import HomePage from "../pages/home/HomePage";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <BaseLayout>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/mis-pedidos" component={PedidosPage} />
              <Route
                exact
                path="/mis-solicitudes"
                component={SolicitudesPage}
              />
              <Route exact path="/usuarios" component={UsuariosPage} />
            </Switch>
          </BaseLayout>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
