import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import ItemProducto from "./ItemProducto";

const ListarProducto = (props) => {
<<<<<<< HEAD
  console.log(props.arrayproductos);
  return (
    <Container>
      <h1 className="my-5 text-center">Listar Productos</h1>
      <ListGroup className="my-5">
          {
              props.arrayproductos.map((productos) => <ItemProducto key={productos.id} producto={productos}/>)
          }
        {/* <ItemProducto></ItemProducto> */}
=======
  console.log(props);
  return (
    <Container>
      <h1 className="my-5 text-center">Listar Productos</h1>
      <ListGroup className="my-5">        
        <ItemProducto></ItemProducto>
>>>>>>> dev
      </ListGroup>
    </Container>
  );
};

export default ListarProducto;
