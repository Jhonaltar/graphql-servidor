import React, { Component, Fragment } from 'react'

const input = {
    marginRight: '-120px'
}

class Producto extends Component {




    render() {

        const { producto } = this.props;
        //console.log(producto)

        return (
            <Fragment>
                <tr>
                    <td className="text-center">{producto.nombre}</td>
                    <td className="text-center">$ {producto.precio}</td>
                    <td className="text-center">{producto.stock}</td>
                    <td className="text-center">
                        <input
                            min="1"
                            type="number"
                            className="form-control"
                            style={input}
                            onChange={e => {
                                if(e.target.value > producto.stock){
                                    e.target.value = 0;
                                }
                                this.props.actualizarCantidad(e.target.value, this.props.index)
                            }}
                        />
                    </td>
                    <td className="text-center">
                       <button 
                       type="button" 
                       className="waves-effect waves-light btn  red lighten-1 "
                       onClick={e => this.props.eliminarProducto(producto.id)}
                       >
                       <i className="material-icons left">delete_forever</i> Eliminar
                       </button>
                    </td>
                </tr>
            </Fragment>
        )
    }
}

export default Producto
