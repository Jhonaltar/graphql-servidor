import React from 'react';
import { Link } from 'react-router-dom';


const hStyle1 = { color: 'white' };

const aa = {
  marginRight: '-85px',
}

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
        <ul className="navbar-nav ml-auto text-right ">
          <div class="dropdown show">
            <a class="waves-effect waves-light btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Clientes
              </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" style={aa}>
              <Link to="/clientes" className="waves-effect waves-light btn teal lighten-1 " >
              <i className="material-icons left">assignment</i> Ver Clientes
               </Link>
              <Link to="/clientes/nuevo" className="waves-effect waves-light btn teal lighten-1 " >
              <i className="material-icons left">add_circle</i> Nuevo Clientes
               </Link>
            </div>
          </div>
          <div class="dropdown show" >
            <a class="waves-effect btn deep-orange lighten-1 dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
              Productos
              </a>
            <div class="dropdown-menu"  aria-labelledby="dropdownMenuLink" style={aa}>
              <Link to="/productos" className="waves-effect waves-light btn deep-orange lighten-1" >
                <i className="material-icons left">assignment</i> Ver Productos
               </Link>
              <Link to="/productos/nuevo" className="waves-effect waves-light btn deep-orange lighten-1" style={hStyle1}>
                <i className="material-icons left">add_circle</i> Nuevo Productos
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;