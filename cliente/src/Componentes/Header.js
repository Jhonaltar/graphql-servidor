import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="nav-wrapper blue mb-4">
    <div className="container">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
        <i className="material-icons right">local_grocery_store</i> SISCART 
        </Link>
        
        <ul className="right hide-on-med-and-down">
          <Link to="/cliente/nuevo" className="waves-effect waves-light btn">
          <i className="material-icons left">add_circle</i> Nuevo Clientes
          </Link>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;