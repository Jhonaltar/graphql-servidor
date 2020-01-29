import React, { Component, Fragment } from 'react'

import { NUEVO_PRODUCTO } from '../../mutations';
import { Mutation } from 'react-apollo';

const initialState = {
    nombre: '',
    precio: '',
    stock: ''
}

class NuevoProducto extends Component {
    state = {
        ...initialState
    }

    limpiarState =() => {
        this.setState({
            ...initialState
        })
    }

    actualizarState = e => {
        const { name, value } = e.target;
        //console.log(name, ':', value);
        this.setState({
            [name]: value
        })
    }

    validarForm = () => {
        const { nombre, precio, stock } = this.state;
        const noValido = !nombre || !precio || !stock;
        //console.log(noValido);

        return noValido;
    }

    crearNuevoProducto = (e, nuevoProducto) => {
        e.preventDefault();

        //insertar en la base de datos

        nuevoProducto().then(data => {

            //console.log(data);
            this.limpiarState();

            this.props.history.push('/productos')
        })
    }

    render() {

        const { nombre, precio, stock } = this.state;
        const input = {
            nombre,
            precio: Number(precio),
            stock: Number(stock)
        }

        //console.log(input)
        return (
            <Fragment>
                <h1 className="text-center mb-5">Nuevo Producto</h1>
                <div className="row justify-content-center">
                    <Mutation
                        mutation={NUEVO_PRODUCTO}
                        variables={{ input }}
                    >
                        {(nuevoProducto, { loading, error, data }) => {
                            return (
                                <form
                                    className="col-md-8"
                                    onSubmit={e => this.crearNuevoProducto(e, nuevoProducto)}
                                >
                                    <div className="input-field col s12">
                                        <label>Nombre:</label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            className="form-control"
                                            onChange={this.actualizarState}
                                        />
                                    </div>
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">attach_money</i>
                                        <input
                                            type="number"
                                            name="precio"
                                            className="autocomplete"
                                            onChange={this.actualizarState}
                                        />
                                        <label >Precio:</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <label>Stock:</label>
                                        <input
                                            type="number"
                                            name="stock"
                                            className="form-control"
                                            onChange={this.actualizarState}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="waves-effect waves-light btn float-right"
                                        disabled={this.validarForm()}
                                    >
                                        <i className="material-icons left">insert_drive_file</i>
                                        Guardar Producto</button>
                                </form>
                            )
                        }}
                    </Mutation>
                </div>
            </Fragment>
        )
    }
}

export default NuevoProducto;
