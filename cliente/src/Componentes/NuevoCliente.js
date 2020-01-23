import React, { Component, Fragment } from 'react'

import { NUEVO_CLIENTE } from '../mutations';
import { Mutation } from 'react-apollo';


class NuevoCliente extends Component {

    state = {
        cliente: {
            nombre: '',
            apellido: '',
            empresa: '',
            edad: '',
            tipo: ''
        },
        error: false

    }


    render() {
        const {error}= this.state;
        let respuesta = (error) ? <p className=" card-panel  red darken-1 text-center">Todos los campos son obligatorios</p> : '';
        return (
            <Fragment>
                <h1 className="text-center">Nuevo Cliente</h1 >
                {respuesta}
                <div className="row justify-content-center">
                    <Mutation mutation={NUEVO_CLIENTE}>
                        {crearCliente => (
                            <form className="col-md-8 m-3"
                                onSubmit={e => {
                                    e.preventDefault();
                                    const { nombre, apellido, empresa, email, edad, tipo } = this.state.cliente;
                                    if(nombre === ''|| apellido === ''|| empresa=== '' || edad===''|| tipo===''){
                                        this.setState({
                                            error:true
                                        });
                                        return;
                                    }
                                    this.setState({
                                        error: false
                                    })
                                    const input = {
                                        nombre,
                                        apellido,
                                        empresa,
                                        email,
                                        edad: Number(edad),
                                        tipo,
                                    }
                                    //console.log(input);
                                    crearCliente({
                                        variables:{input}
                                    })
                                }}
                            >
                                <div className="form-row">
                                    <div className="input-field col s6">
                                        <label >Nombre</label>
                                        <input

                                            type="text"
                                            className="validate"
                                            onChange={e => {
                                                this.setState({
                                                    cliente: {
                                                        ...this.state.cliente,
                                                        nombre: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="input-field col s6">
                                        <label >Apellido</label>
                                        <input

                                            type="text"
                                            className="validate"
                                            onChange={e => {
                                                this.setState({
                                                    cliente: {
                                                        ...this.state.cliente,
                                                        apellido: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-field col s6">
                                        <label >Empresa</label>
                                        <input
                                            type="text"
                                            className="validate"
                                            onChange={e => {
                                                this.setState({
                                                    cliente: {
                                                        ...this.state.cliente,
                                                        empresa: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="input-field col s6">
                                        <label >Email</label>
                                        <input
                                            type="email"
                                            className="validate"
                                            onChange={e => {
                                                this.setState({
                                                    cliente: {
                                                        ...this.state.cliente,
                                                        email: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-field col s6">
                                        <label >Edad</label>
                                        <input
                                            type="text"
                                            className="validate"
                                            onChange={e => {
                                                this.setState({
                                                    cliente: {
                                                        ...this.state.cliente,
                                                        edad: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Tipo Cliente</label>
                                        <select
                                            className="form-control"
                                            onChange={e => {
                                                this.setState({
                                                    cliente: {
                                                        ...this.state.cliente,
                                                        tipo: e.target.value
                                                    }
                                                })
                                            }}
                                        >
                                            <option value="" >Elegir...</option>
                                            <option value="PREMIUM">PREMIUM</option>
                                            <option value="BASICO">BÁSICO</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-success float-right">Guardar Cliente</button>
                            </form>
                        )}
                    </Mutation>
                </div>
            </Fragment>

        )
    }
}

export default NuevoCliente;
