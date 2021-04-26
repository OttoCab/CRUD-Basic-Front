import React, { useState } from "react";
import { Alert, Container, Form, Button } from "react-bootstrap";

const AgregarProducto = () => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);

  const cambiarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("prueba");
    // validar los datos
    if (
      nombreProducto.trim() === "" ||
      precioProducto <= 0 ||
      precioProducto > 5000 ||
      categoria === ""
    ) {
      // si falla la validacion mostrar el Alert de erro
      //console.log("error en los datos");
      setError(true);
      return;
    } else {
      // si esta todo bien envio los datos a la Api
      //console.log("datos correctos");
      setError(false);

      // crear el objeto a enviar
      const producto = {
        // nombreProducto: nombreProducto,
        // precioProducto: precioProducto,
        // categoria: categoria

        //Otra opcion
        nombreProducto,
        precioProducto,
        categoria,
      };
      console.log(producto);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1 className="text-center my-5">Agregar Nuevo Producto</h1>
        {error === true ? (
          <Alert variant="warning">Todos los campos son obligatorios</Alert>
        ) : null}
        <Form.Group>
          <Form.Label>Nombre del producto *</Form.Label>
          {/* el Form.Control seria el "input" */}
          <Form.Control
            type="text"
            placeholder="Ej: Café con leche"
            onChange={(e) => setNombreProducto(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio *</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: $50"
            onChange={(e) => setPrecioProducto(parseInt(e.target.value))}
          />
        </Form.Group>
        <Form.Group className="text-center">
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
              />
              <Form.Check
                inline
                label="Bebida fria"
                name="categoria"
                type={type}
                id={`inline-${type}-2`}
                value="BebidaFria"
                onChange={cambiarCategoria}
              />
              <Form.Check
                inline
                label="Sandwich"
                name="categoria"
                type={type}
                id={`inline-${type}-3`}
                value="Sandwich"
                onChange={cambiarCategoria}
              />
              <Form.Check
                inline
                label="Dulce"
                name="categoria"
                type={type}
                id={`inline-${type}-4`}
                value="Dulce"
                onChange={cambiarCategoria}
              />
              <Form.Check
                inline
                label="Salado"
                name="categoria"
                type={type}
                id={`inline-${type}-5`}
                value="Salado"
                onChange={cambiarCategoria}
              />
            </div>
          ))}
        </Form.Group>
        <Button variant="danger" size="lg" className="mb-3" type="submit" block>
          Agregar producto
        </Button>
      </Form>
    </Container>
  );
};

export default AgregarProducto;
