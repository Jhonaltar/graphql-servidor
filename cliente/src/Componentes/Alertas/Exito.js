import React from 'react';
//import App from '../../App.css';




const Exito = ({mensaje}) =>{
    return(
        <div className="materialert success py-3 text-center my-3">
		    <div className="material-icons">check</div>
		    {mensaje} 
		</div>
    );
}

export default Exito;


