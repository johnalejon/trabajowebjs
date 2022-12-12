import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap'
import { listarestaurante } from '../produService';

function Busqueda() {

  const [valoresFormulario, setValoresFormulario] = useState('');
  const [resultado, setResultado] = useState([]);

  const getnombre = e => {
    getResultado();
    setValoresFormulario(e.target.value) //
  }
  const buscarRestaurante = e => {
    e.preventDefault();

    const resultadoLista = resultado.filter((bs) =>
      bs.nombre.toLowerCase().includes(valoresFormulario.toLowerCase())  
    );
    setResultado(resultadoLista)
    setValoresFormulario([])
  }

  useEffect(() => {
    getResultado();
  }, []);

  const getResultado = async () => {
    try {
      const resultadoFirebase = await listarestaurante(); //
      setResultado(resultadoFirebase)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <h1 className="pt-3 pb-3">Buscar Restaurante</h1>
      <Form onSubmit={buscarRestaurante}>
        <Form.Group className="mb-3">
          <Form.Label>Escribe el nombre</Form.Label>
          <Form.Control type="text" placeholder="nombre" onChange={getnombre} />
        </Form.Group>
        <Button type="submit">Buscar</Button>
      </Form>
      <Row className="mt-4" md={3}>
        {resultado.map(item => (
          <Col className="md-4" key={item.id}>
            <Card className="mb-4 box-shadow">
              <Card.Img
                className="card-img-top"
                src={item.imagen}
                alt="foto restaurante"
                style={{ height: '225px' }}
              />
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{item.descripcion}</Card.Text>
                <Card.Text>{item.direccion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export {
  Busqueda
}

