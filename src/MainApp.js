import React from 'react'
import { Navbar } from './Navbar'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import { Inicio } from './Inicio'
import { Nuevo } from './Nuevo'
import { Busqueda } from './Busqueda'


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