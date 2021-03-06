import React, { Component, Fragment } from 'react'

import { NUEVO_CLIENTE } from '../../mutations';
import { Mutation } from 'react-apollo';

import { ToastContainer, toast } from 'react-toastify';


//import App from '../../App.css';


class NuevoCliente extends Component {

    state = {
        cliente: {
            nombre: '',
            apellido: '',
            empresa: '',
            edad: '',
            tipo: ''
        },
        error: false,
        emails: []
    }

    nuevoCampo = () => {
        this.setState({
            emails: this.state.emails.concat([{ email: '' }])
        })
    }

    quitarCampo =i => () =>{
        //console.log(`presionastes eliminar ${i}`)
        this.setState({
            emails: this.state.emails.filter((email,index)=> i !== index)
        })
    }

    leerCampo = i => e => {
        //console.log("ewstas")
        const nuevoEmail= this.state.emails.map((email,index)=>{
            if(i !== index) return index;
            return{
                ...email,
                email: e.target.value
            }
        });
        this.setState({
            emails : nuevoEmail
        })
    }


    render() {
        const { error } = this.state;
        let respuesta = (error) ?  toast.error("Complete todos los campos", {
            position: toast.POSITION.BOTTOM_RIGHT,

        }) : '';
        return (
            <Fragment>
                <h1 className="text-center">Nuevo Cliente </h1 >
                
                <ToastContainer autoClose={3000} />
                <div className="row justify-content-center">
                    <Mutation mutation={NUEVO_CLIENTE}
                        onCompleted={() => this.props.history.push('/clientes')}
                    >
                        {crearCliente => (
                            <form className="col-md-8 m-3"
                                onSubmit={e => {
                                    e.preventDefault();
                                    const { nombre, apellido, empresa,  edad, tipo } = this.state.cliente;
                                    const {emails} = this.state
                                    if (nombre === '' || apellido === '' || empresa === '' || edad === '' || tipo === '') {
                                        this.setState({
                                            error: true
                                        })
                                        return;
                                    }
                                    this.setState({
                                        error: false
                                    })
                                    const input = {
                                        nombre,
                                        apellido,
                                        empresa,
                                        emails,
                                        edad: Number(edad),
                                        tipo,
                                    }
                                    //console.log(input);
                                    crearCliente({
                                        variables: { input }
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
                                    {this.state.emails.map((input, index) => (
                                        <div key={index} className="input-field  col-md-12">
                                            <label> Correo {index + 1}</label>
                                            <div className="input-field ">
                                                <input
                                                    onChange={this.leerCampo(index)}
                                                    type="email"
                                                    className="validate"
                                                />
                                                <div className="input-group-append">
                                                    <button 
                                                        onClick={this.quitarCampo(index)}
                                                        className="waves-effect waves-light btn  red lighten-1"
                                                        type="button"
                                                    ><i className="material-icons left">delete_forever</i> Eliminar</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="form-group d-flex justify-content-center col-md-12">
                                        <button
                                            onClick={this.nuevoCampo}
                                            type="button"
                                            className="waves-effect waves-light btn yellow darken-4">
                                            <i className="material-icons left">add_circle</i>
                                            Agregar Emails
                                            </button>
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
                                <button type="submit" className="waves-effect waves-light btn float-right"><i className="material-icons left">insert_drive_file</i> Guardar Cliente</button>
                            </form>
                        )}
                    </Mutation>
                </div>
            </Fragment>

        )
    }
}

export default NuevoCliente;
