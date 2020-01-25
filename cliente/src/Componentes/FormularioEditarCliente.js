import React, { Component } from 'react';

import { ACTUALIZAR_CLIENTE } from '../mutations';
import { Mutation } from 'react-apollo';
import {withRouter} from 'react-router-dom'

class FormularioEditarCliente extends Component {

    state = {
        cliente: this.props.cliente,
        emails: this.props.cliente.emails
    }

    nuevoCampo = () => {
        this.setState({
            emails: this.state.emails.concat([{ email: '' }])
        })
    }

    leerCampo = i => e => {
        const nuevoMail = this.state.emails.map((email, index) => {
            if (i !== index) return email;
            return { ...email, email: e.target.value };
        });
        this.setState({ emails: nuevoMail });
    }

    quitarCampo = i => () => {
        this.setState({
            emails: this.state.emails.filter((s, index) => i !== index)
        });
    }



    render() {

        const { nombre, apellido, empresa, edad, tipo } = this.state.cliente;
        const { emails } = this.state;

        return (

            <Mutation mutation={ACTUALIZAR_CLIENTE}
             onCompleted={() => this.props.refetch().then(()=> {this.props.history.push('/')})}
            >
                {actualizarCliente => (
                    <form className="col-md-8 m-3" onSubmit={e=>{
                        e.preventDefault();

                        const {id,nombre, apellido,empresa,edad,tipo}= this.state.cliente;
                        const {emails}= this.state;

                        const input ={
                            id,
                            nombre,
                            apellido,
                            empresa,
                            edad: Number(edad),
                            tipo,
                            emails
                        }
                        actualizarCliente({
                            variables: { input }
                        })
                    }}>
                        <div className="form-row">
                            <div className="input-group col s6">
                                <label >Nombre</label>
                                <input
                                    type="text"
                                    className="validate"
                                    defaultValue={nombre}
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
                            <div className="input-group col s6">
                                <label >Apellido</label>
                                <input
                                    type="text"
                                    className="validate"
                                    defaultValue={apellido}
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
                            <div className="input-group col s6">
                                <label >Empresa</label>
                                <input
                                    type="text"
                                    className="validate"
                                    defaultValue={empresa}
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

                            {emails.map((input, index) => (
                                <div key={index} className="input-field col-md-12">
                                    <label>Correo {index + 1} : </label>
                                    <div className="input-field">

                                        <input
                                            type="email"

                                            className="validate"
                                            onChange={this.leerCampo(index)}
                                            defaultValue={input.email}
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="waves-effect waves-light btn  red lighten-1"
                                                type="button"
                                                onClick={this.quitarCampo(index)}><i className="material-icons left">delete_forever</i>
                                                Eliminar
                                                </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="form-group d-flex justify-content-center col-md-12">
                                <button
                                    onClick={this.nuevoCampo}
                                    type="button"
                                    className="waves-effect waves-light btn yellow darken-4"
                                ><i className="material-icons left">add_circle</i> Agregar Email</button>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-group col s6">
                                <label >Edad</label>
                                <input
                                    type="text"
                                    className="validate"
                                    defaultValue={edad}
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
                                    value={tipo}
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
                        <button type="submit" className="waves-effect waves-light btn float-right"><i className="material-icons left">insert_drive_file</i> Guardar Cambios</button>
                    </form>
                )}
            </Mutation>
        )
    }
}


export default withRouter (FormularioEditarCliente);