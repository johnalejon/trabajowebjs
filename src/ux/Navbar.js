import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/Inicio">WEB de Restaurantes</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <p>
                            <li className="nav-item">
                                <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` }  to="/Inicio"><b>inicio</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` }  to="/busqueda"><b>busqueda</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` }  to="/nuevo"><b>nuevo</b></NavLink>
                            </li>
                        </p>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
