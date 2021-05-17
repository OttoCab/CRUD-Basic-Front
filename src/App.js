import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import ListarProducto from "./components/productos/ListarProducto";
import AgregarProducto from "./components/productos/AgregarProducto";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import EditarProducto from "./components/productos/EditarProducto";
import { useState, useEffect } from "react";
import Error404 from "./components/Error404";

function App() {
  const URL = process.env.REACT_APP_API_URL;
  //console.log(URL);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      const respuesta = await fetch(URL);
      console.log(respuesta);
      if (respuesta.status === 200) {
        const listaProductos = await respuesta.json();
        setProductos(listaProductos);
      }
    } catch (error) {
      console.log(error);
      // Swal.fire(
      //   "Ocurrio un error",
      //   "No se puede realizar la consulta en estos instante, intentolo en unos instantes",
      //   "error"
      // )
    }
  };

  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
        </Route>
        <Route exact path="/productos">
          <ListarProducto productos={productos} consultarApi={consultarApi}></ListarProducto>
        </Route>
        <Route exact path="/productos/nuevo">
          <AgregarProducto consultarApi={consultarApi}></AgregarProducto>
        </Route>
        <Route exact path="/productos/editar/:id"> 
          {/* /: forma de indicar que va a venir un parametro */}
          {/* con "?"" indico que es optativo */}
          <EditarProducto consultarApi={consultarApi}></EditarProducto>
        </Route>
        <Route patch='*'>
          <Error404></Error404>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
