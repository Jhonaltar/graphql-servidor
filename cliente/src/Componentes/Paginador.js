import React, { Component } from 'react';

const hStyle1 = { color: 'white' };

class Paginador extends Component {

    state = {
        paginador: {
            paginas: Math.ceil(Number(this.props.total) / this.props.limite) 
        }
    }

    render() {
        const {actual} = this.props;
        const btnAnterior = ( actual > 1) ? <button onClick={this.props.paginaAnterior} type="button" className="waves-effect waves-light btn indigo darken-1 mr-2" style={hStyle1}>
            <i className="material-icons left">arrow_back</i> Anterior</button> : '';

        // boton de pagina siguiente
        const { paginas} = this.state.paginador;
        const btnSiguiente = (actual !== paginas) ? <button onClick={this.props.paginaSiguiente} type="button" className="waves-effect waves-light btn indigo darken-1" style={hStyle1}>
        <i className="material-icons right">arrow_forward</i>Siguiente</button> : '';   

            
        return (
            <div className="mt-5 d-flex justify-content-center">
                {btnAnterior}
                {btnSiguiente}
            </div>
        )
    }
}

export default Paginador;
