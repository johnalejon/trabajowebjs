import React, { useState, useEffect } from 'react';
//mport { listaproductos } from './data-producto';
import Swal from 'sweetalert2';
import { listarestaurante } from './produService';



const Busqueda = () => {
  const [valoresFormulario, setValoresFormulario] = useState({});
  const { nombre = '', descripcion = '', direccion = '', imagen = '' } = valoresFormulario;
  const [resultado, setResultado, getresultado] = useState([]);

  useEffect(() => {
    getresultado();
  }, []);


  const handleOnChange = (e) => {

    console.log(e.target.name, e.target.value);

    if (e.target.name === 'nombre') {
      setValoresFormulario({ ...valoresFormulario, nombre: e.target.value });
    } else if (e.target.name === 'descripcion') {
      setValoresFormulario({ ...valoresFormulario, descripcion: e.target.value });
    } else if (e.target.name === 'direccion') {
      setValoresFormulario({ ...valoresFormulario, direccion: e.target.value });
    } else if (e.target.name === 'imagen') {
      setValoresFormulario({ ...valoresFormulario, imagen: e.target.value });
      console.log(valoresFormulario);
    }


    const handleOnSubmit = (e) => {
      e.preventDefault();
      console.log('estoy haciendo click');
      const filtro =getresultado(nombre.toUpperCase().includes(nombre.toUpperCase())) //listaproductos.filter(hshshs => hshshs.nombre.toUpperCase().includes(nombre.toUpperCase()));


      const getresultado = async () => {
        try {
          Swal.fire({ allowOutsideClick: false, text: 'Cargando...' });
          Swal.showLoading();
          const resultadoFirebase = await listarestaurante();
          setResultado(resultadoFirebase);
          Swal.close();
        } catch (error) {
          Swal.close();
          console.log(error);
        }
      }

      console.log(resultado);
      setResultado(filtro);
    }

    return (
      <div className="container-fluid mt-3">
        <div className='row'>
          <div className='col'>
            <form onSubmit={(e) => handleOnSubmit(e)}>
              <div className="mb-3">
                <label className="form-label">Nombre restaurante</label>
                <input required type="text" name="nombre" value={nombre}
                  className="form-control" onChange={(e) => { handleOnChange(e) }} />
              </div>
              {/*<div className="mb-3">
                    <label className="form-label">descripcion</label>
                    <input required type="text" name="descripcion" value={descripcion}
                        className="form-control" onChange={(e) => { handleOnChange(e) }} />
                </div>
                <div className="mb-3">
                    <label className="form-label">direccion</label>
                    <input required type="text" name="direccion" value={direccion}
                        className="form-control" onChange={(e) => { handleOnChange(e) }} />
                </div>*/}
              <button type="submit" className="btn btn-primary">Buscar</button>
            </form>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col'>
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {
                resultado.map(asasas => {
                  return (
                    <div className="col" key={asasas.id}>
                      <div className="card">
                        <img src={asasas.imagen} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{asasas.nombre}</h5>
                          <p className="card-text">{asasas.descripcion}</p>
                          <p className="card-text">{asasas.direccion}</p>

                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export {
  Busqueda
}

