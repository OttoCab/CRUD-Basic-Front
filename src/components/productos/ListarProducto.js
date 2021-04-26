import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import ItemProducto from "./ItemProducto";

const ListarProducto = (props) => {
    console.log(props);
  return (
    <Container>
      <h1 className="my-5 text-center">Listar Productos</h1>
      <ListGroup className='my-5'>
        <ItemProducto></ItemProducto>
      </ListGroup>
    </Container>
  );
};

export default ListarProducto;
