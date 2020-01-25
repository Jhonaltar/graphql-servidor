import React from 'react';
import { Link } from 'react-router-dom';

const hStyle1 = { color: 'white' };

const Header = () => (


  <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex nav-wrapper blue mb-4">
    <div className="container">
      <Link to="/" className="brand-logo">
        <i className="material-icons right">local_grocery_store</i> SISCART
        </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navegacion" aria-controls="navegacion" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navegacion">
        <ul className="right hide-on-med-and-down navbar-nav ml-auto text-right">
          <Link to="/cliente/nuevo" className="waves-effect waves-light btn" style={ hStyle1 }>
            <i className="material-icons left">add_circle</i> Nuevo Clientes
          </Link>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;