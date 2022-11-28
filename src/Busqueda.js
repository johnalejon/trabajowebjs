import React from 'react'
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Busqueda = () => {
  return (
    <div class="container">
      <h5 class="card-title mb-2">Escribe el nombre a buscar:</h5>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  )
}




export default function New() {
  const [nombre, setnombre] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [direccion, setdireccion] = useState("");
  const [imagen, setimagen] = useState("");
  const [data, setData] = useState([]);


  const nombreOnchangeHandler = (evento) => {
    setnombre(evento.target.value);
  };
  const descripcionOnchangeHandler = (evento) => {
    setdescripcion(evento.target.value);
  };

  const direccionOnchangeHandler = (evento) => {
    setdireccion(evento.target.value);
  };

  const imagenOnchangeHandler = (evento) => {
    setimagen(evento.target.value);
  };



  const buttonOnsubmitHandler = (evento) => {
    evento.preventDefault();
    console.log("enviando...");

    const datosNuevos = {
      id: uuidv4(),
      nombre: nombre,
      descripcion: descripcion,
      direccion: direccion,
      imagen: imagen
    };

    setnombre("");
    setdescripcion("");
    setdireccion("");
    setimagen("");

    const newData = [...data, datosNuevos];
    setData(newData);
    console.log(newData);

    localStorage.setItem("key", JSON.stringify(newData));
  };

  return (

    <div className="new">

      <form onSubmit={buttonOnsubmitHandler}>
        <label htmlFor="formGroupExampleInput" className="form-label"><h3>Nombre del Restaurante</h3></label>
        <input
          type="text"
          placeholder="Nombre del Restaurante"
          name="text"
          value={nombre}
          onChange={nombreOnchangeHandler}
          className="form-control"
          id="formGroupExampleInput"
          autoComplete="off"
          required
        />
        <label htmlFor="formGroupExampleInput" className="form-label"><h3>Tipo de comida</h3></label>
        <input
          type="text"
          placeholder="Tipo de comida"
          name="text"
          value={descripcion}
          onChange={descripcionOnchangeHandler}
          className="form-control"
          id="formGroupExampleInput"
          autoComplete="off"
          required
        />


        <label htmlFor="formGroupExampleInput" className="form-label"><h3>Donde esta ubicado</h3></label>
        <input
          type="text"
          placeholder="En donde esta ubicado el Restaurante"
          name="text"
          value={direccion}
          onChange={direccionOnchangeHandler}
          className="form-control"
          id="formGroupExampleInput"
          autoComplete="off"
          required
        />

        <label htmlFor="formGroupExampleInput" className="form-label"><h3>Link de la imagen del Restaurante</h3></label>
        <input
          type="text"
          placeholder="enlace de la imagen"
          name="text"
          value={imagen}
          onChange={imagenOnchangeHandler}
          className="form-control"
          id="formGroupExampleInput"
          autoComplete="off"
          required
        />

        <div className="col-sm-20">
          <button className="btn btn-primary">Añadir</button>
        </div>

      </form>

    </div>
  );
}
