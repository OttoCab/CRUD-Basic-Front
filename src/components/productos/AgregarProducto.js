import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AgregarProducto = () => {
    return (
        <section className="container">
            <h1 className="text-center">Agregar Nuevo Producto</h1>
            <Form className="my-4">
                <Form.Group controlId="formBasictext">
                    <Form.Label>Nombre del producto *</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Café con leche" />
                </Form.Group>
                <Form.Group controlId="formBasicPrice">
                    <Form.Label>Precio *</Form.Label>
                    <Form.Control type="password" placeholder="Ej: $50" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox" className="text-center">
                    <h3>Categoria</h3>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Bebida caliente" name="group1" type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="Bebida fria" name="group1" type={type} id={`inline-${type}-2`} />         
                            <Form.Check inline label="Sandwich" name="group1" type={type} id={`inline-${type}-3`} />         
                            <Form.Check inline label="Dulce" name="group1" type={type} id={`inline-${type}-4`} />         
                            <Form.Check inline label="Salado" name="group1" type={type} id={`inline-${type}-5`} />         
                        </div>
                    ))}
                </Form.Group>
                <Button variant="danger" size="lg" type="submit" block>
                    Agregar producto
        </Button>
            </Form>
        </section>
    );
};

export default AgregarProducto;
