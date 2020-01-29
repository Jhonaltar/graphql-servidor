import React, { Component } from 'react';

import { Mutation } from 'react-apollo';
import { ACTUALIZAR_PRODUCTO } from '../../mutations';

import {withRouter} from 'react-router-dom';

const initialState = {
    nombre: '',
    precio: '',
    stock: ''
}


class FormularioEditar extends Component {
    state = {
        ...this.props.producto.obtenerProducto
    }

    limpiarState = () => {
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
    editarProductoForm= ( e, actualizarProducto) =>{
        e.preventDefault();

        actualizarProducto().then(data =>{
            //console.log(data)
            this.setState({
                ...initialState
            })
        })
    }

    render() {
        const { nombre, precio, stock } = this.state;
        const { id } = this.props;
        const input = {
            id,
            nombre,
            precio: Number(precio),
            stock: Number(stock)
        }
        return (
            <Mutation mutation={ACTUALIZAR_PRODUCTO} variables={{ input }} key={id} onCompleted={()=> this.props.refetch().then(()=>{
                this.props.history.push('/productos')
            })}>
                {(actualizarProducto, { loading, error, data }) => {
                    return (
                        <form
                            className="col-md-8"  onSubmit={e => this.editarProductoForm(e,actualizarProducto)}>
                            <div className="input-group col s12">
                                <label className="active">Nombre:</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    className="validate"
                                    onChange={this.actualizarState}
                                    value={nombre}
                                />
                            </div>
                            <div className="input-group col s12">
                                <i className="material-icons prefix">attach_money</i>
                                <label >Precio:</label>
                                <input
                                    type="number"
                                    name="precio"
                                    className="validate"
                                    onChange={this.actualizarState}
                                    value={precio}
                                />
                                <label >Precio:</label>
                            </div>
                            <div className="input-group col s12">
                                <label>Stock:</label>
                                <input
                                    type="number"
                                    name="stock"
                                    className="validate"
                                    onChange={this.actualizarState}
                                    value={stock}
                                />
                            </div>
                            <button
                                type="submit"
                                className="waves-effect waves-light btn float-right"
                                disabled={this.validarForm()}
                            >
                                <i className="material-icons left">insert_drive_file</i>
                                Guardar Cambios</button>
                        </form>
                    )
                }}
            </Mutation>
        )
    }
}

export default withRouter (FormularioEditar);
