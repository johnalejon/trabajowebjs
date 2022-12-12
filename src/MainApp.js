import React from 'react'
import { Navbar } from './ux/Navbar';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import { Inicio } from './componentes/Inicio';
import { Nuevo } from './componentes/Nuevo';
import { Busqueda } from './componentes/Busqueda';





const MainApp = () => {

    return <>
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='Inicio' element={<Inicio/>}></Route>
            <Route path='Busqueda' element={<Busqueda />}></Route>
            <Route path='Nuevo' element={<Nuevo />}></Route>
            
            <Route path='*' element={<Navigate to='/Inicio' />}></Route>
        </Routes>
        </BrowserRouter>
    </>
}

export {
    MainApp
}