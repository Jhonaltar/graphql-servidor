import React, { Component, Fragment } from 'react'

class NuevoProducto extends Component {
    state = {
        nombre:'',
        precio:'',
        stock: ''
    }

    actualizarState = e =>{
        const {name ,value}= e.target;
        //console.log(name, ':', value);
        this.setState({
            [name]:value
        })
    }

    validarForm =()=>{
        const {nombre,precio,stock}= this.state;
        const noValido = !nombre || !precio || !stock;
        //console.log(noValido);

        return noValido;
    }

    render() {
        return (
            <Fragment>
                <h1 className="text-center mb-5">Nuevo Producto</h1>
                <div className="row justify-content-center">
                    <form
                        className="col-md-8"
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
                </div>
            </Fragment>
        )
    }
}

export default NuevoProducto;
