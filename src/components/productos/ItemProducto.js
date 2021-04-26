import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const ItemProducto = (props) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <p>Nombre del producto</p>
      <span className="font-weight-bold">$ 200</span>
      <Button variant="warning">Editar</Button>
      <Button variant="danger">Borrar</Button>
    </ListGroup.Item>
  );
};

export default ItemProducto;
