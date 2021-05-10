import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import ItemProducto from "./ItemProducto";


const ListarProducto = (props) => {
  console.log(props);
  return (
    <Container>
      <h1 className="text-center my-5">Lista de Productos</h1>
      <ListGroup className="my-5">
        {
          props.productos.map((producto) => <ItemProducto producto={producto} key={producto.id} consultarApi={props.consultarApi}></ItemProducto> )
        }        
        
      </ListGroup>
    </Container>
  );
};

export default ListarProducto;
