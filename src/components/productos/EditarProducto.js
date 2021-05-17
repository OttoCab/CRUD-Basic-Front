import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import Swal from "sweetalert2";
import { useParams, withRouter } from "react-router-dom";
// withRouter se usa para redireccionar
import { campoRequerido, rangoPrecio } from "../common/helpers.js";

const EditarProducto = (props) => {
  // obtener el parametro
  const codProducto = useParams().id;
  console.log(codProducto);
  console.log("prueba");
  // const {cod} = useParams();
  // me creo una variable normal que tiene el valor de la propiedad de ese objeto
  // lo que vaya entre {} (la clave) tiene que tener el mismo nombre que la propiedad

  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);
  const [producto, setProducto] = useState({});
  const URL = process.env.REACT_APP_API_URL + "/" + codProducto;
  // aqui creo las variables de de useRef
  const nombreProdRef = useRef("");
  const precioProdRef = useRef(0);

  useEffect(async () => {
    try {
      const respuesta = await fetch(URL);
      if (respuesta.status === 200) {
        const productoSolicitado = await respuesta.json();
        setProducto(productoSolicitado);
      }
    } catch (error) {
      console.log(error);
      // ventana de sweetalert (mostrar un msj de error)
    }
  }, []);

  const cambiarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let categoriaMod = categoria === "" ? producto.categoria : categoria;
    console.log(categoriaMod);
    // console.log(nombreProdRef);
    // console.log(nombreProdRef.current);
    console.log(nombreProdRef.current.value);
    // validar los dato
    if (
      campoRequerido(nombreProdRef.current.value) &&
      rangoPrecio(parseFloat(precioProdRef.current.value)) &&
      campoRequerido(categoriaMod)
    ) {
      // si son correctos hago el request
      setError(false);

      try {
        const productoModificado = {
          nombreProducto: nombreProdRef.current.value,
          precioProducto: precioProdRef.current.value,
          categoria: categoriaMod
        };
        const respuesta = await fetch(URL, {
          method: 'PUT',
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify(productoModificado)
        });
        if (respuesta.status === 200) {
          // se actualizaron los datos en la api (ventana de sweetalert)
          Swal.fire(
            'Producto Modificado',
            'Se actualizaron los datos del producto',
            'success'
          )
          // consultar la api
            props.consultarApi();
          // redireccionar 
            props.history.push('/productos')
        }
      } catch (error) {
        console.log(error);
        // mostrar un cartel al usuario(sweetalert)
      }
    } else {
      // si no muestro el cartel de error
      setError(true);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1 className="text-center my-5">Editar Producto</h1>
        <FormGroup>
          <FormLabel>Nombre del producto *</FormLabel>
          <FormControl
            type="text"
            placeholder="Ej: Café con leche"
            defaultValue={producto.nombreProducto}
            ref={nombreProdRef}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Precio *</FormLabel>
          <FormControl
            type="text"
            placeholder="$50"
            defaultValue={producto.precioProducto}
            ref={precioProdRef}
          />
        </FormGroup>
        <FormGroup className="text-center">
          <h3 className="mb-3">Categoria</h3>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Bebida caliente"
                name="categoria" // especifico que son del mismo grupo del radiobutton
                type={type}
                id={`inline-${type}-1`}
                value="BebidaCaliente"
                onChange={cambiarCategoria}
                defaultChecked={
                  producto.categoria && producto.categoria === "BebidaCaliente"
                }
              />
              <Form.Check
                inline
                label="Bebida fria"
                name="categoria"
                type={type}
                id={`inline-${type}-2`}
                value="BebidaFria"
                onChange={cambiarCategoria}
                defaultChecked={
                  producto.categoria && producto.categoria === "BebidaFria"
                }
              />
              <Form.Check
                inline
                label="Sandwich"
                name="categoria"
                type={type}
                id={`inline-${type}-3`}
                value="Sandwich"
                onChange={cambiarCategoria}
                defaultChecked={
                  producto.categoria && producto.categoria === "Sandwich"
                }
              />
              <Form.Check
                inline
                label="Dulce"
                name="categoria"
                type={type}
                id={`inline-${type}-4`}
                value="Dulce"
                onChange={cambiarCategoria}
                defaultChecked={
                  producto.categoria && producto.categoria === "Dulce"
                }
              />
              <Form.Check
                inline
                label="Salado"
                name="categoria"
                type={type}
                id={`inline-${type}-5`}
                value="Salado"
                onChange={cambiarCategoria}
                defaultChecked={
                  producto.categoria && producto.categoria === "Salado"
                }
              />
            </div>
          ))}
        </FormGroup>
        <Button variant="danger" size="lg" className="mb-3" type="submit" block>
          Editar Producto
        </Button>
      </Form>
    </Container>
  );
};

export default withRouter(EditarProducto);
