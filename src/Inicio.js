import React, { useState } from 'react'
import { listaproductos } from './data-producto'

export const Inicio = () => {

    const [productos, setproductos] = useState(listaproductos);

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
                    productos.map(productos => {
                        return (
                            <div className="col" key={productos.id}>
                                <div className="card h-100">
                                    <img src={productos.imagen}
                                        className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{productos.nombre}</h5>
                                        <p className="card-text">{productos.descripcion}</p>
                                        <h5 className="card-title">{productos.direccion} </h5>
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
