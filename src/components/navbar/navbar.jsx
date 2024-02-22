import React from "react";
import './navbar.css'
import { Link } from "react-router-dom";
import Logo from '../../assets/imagenes/logo transparente.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img
                    src={Logo}
                    alt=""
                />
            </div>
            <div className="nav-name">
                <Link to ="/">Piscinas Jorvid</Link>
            </div>
            <div className="nav-items">
                <Link to="/">Menu</Link>
                <Link to="/itemDetail">Productos</Link>
                <Link to="/contacto">Contacto</Link>
            </div>
        </div>
    )
}

export default Navbar 