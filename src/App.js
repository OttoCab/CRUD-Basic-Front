import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import ListarProducto from "./components/productos/ListarProducto";
import AgregarProducto from "./components/productos/AgregarProducto";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import EditarProducto from "./components/productos/EditarProducto";

function App() {
  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
        </Route>
        <Route exact path="/productos">
          <ListarProducto></ListarProducto>
        </Route>
        <Route exact path="/productos/nuevo">
          <AgregarProducto></AgregarProducto>
        </Route>
        <Route exact path="/productos/editar">
          <EditarProducto></EditarProducto>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
