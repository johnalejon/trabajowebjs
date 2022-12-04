import React, { useState, useEffect } from 'react'
//import { listaproductos } from './data-producto'
import Swal from 'sweetalert2';
import { listarestaurante } from './produService';

export const Inicio = () => {

    const [restaurante, setrestaurante] = useState([]);

    useEffect(() => {
        getrestaurante();
    }, []); 

    const getrestaurante = async () => {
        try {
            Swal.fire({ allowOutsideClick: false, text: 'Cargando...' });
            Swal.showLoading();
            const restauranteFirebase = await listarestaurante();
            setrestaurante(restauranteFirebase);
            Swal.close();
        } catch (error) {
            Swal.close();
            console.log(error);
        }
    }


    return (
        <div classNameName="container " >

            <div className="container center">
                <p>
                    <h5 className="card-title mt-3">
                        <center><b>BIENVENIDO</b></center>
                    </h5>
                    <h5 className="card-title mt-2">
                        <center><b>EN ESTA PAGINA ENCONTRARAS TODO TIPO DE RESTAURANTES.</b></center>
                    </h5>
                </p>
            </div>

            <div className="row row-cols-1 row-cols-md-4 g-4 mt-3 mb-4">
                {
                    restaurante.map(restaurante => {
                        return (
                            <div className="col" key={restaurante.id}>
                                <div className="card h-100">
                                    <img src={restaurante.imagen}
                                        className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{restaurante.nombre}</h5>
                                        <p className="card-text">{restaurante.descripcion}</p>
                                        <h5 className="card-title">{restaurante.direccion} </h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
