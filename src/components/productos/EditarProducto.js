import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

const EditarProducto = () => {
  return (
    <Container>
      <Form>
        <h1 className="text-center my-5">Editar Producto</h1>
        <FormGroup>
          <FormLabel>Nombre del producto *</FormLabel>
          <FormControl type="text" placeholder="Ej: Café con leche" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Precio *</FormLabel>
          <FormControl type="text" placeholder="$50" />
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
              />
              <Form.Check
                inline
                label="Bebida fria"
                name="categoria"
                type={type}
                id={`inline-${type}-2`}
                value="BebidaFria"
              />
              <Form.Check
                inline
                label="Sandwich"
                name="categoria"
                type={type}
                id={`inline-${type}-3`}
                value="Sandwich"
              />
              <Form.Check
                inline
                label="Dulce"
                name="categoria"
                type={type}
                id={`inline-${type}-4`}
                value="Dulce"
              />
              <Form.Check
                inline
                label="Salado"
                name="categoria"
                type={type}
                id={`inline-${type}-5`}
                value="Salado"
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

export default EditarProducto;
