import React, { Component, Fragment } from 'react';
import DatosCliente from './DatosCliente';
import { Query } from 'react-apollo';
import { OBTENER_PRODUCTOS } from '../../queries';

import ContenidoPedido from './ContenidoPedido';

import '../../spinner.css'


const hStyle1 = { marginLeft: '-250px' };

class NuevoPedido extends Component {


    render() {
        const { id } = this.props.match.params;
        return (
            <Fragment>
                <h1 className="text-center mb-5">Nuevo Pedido</h1>
                <div className="row">
                    <div className="col-md-6" style={hStyle1}>
                        <DatosCliente
                            id={id}
                        />
                    </div>
                    <div className="col-md-8"  >
                        <Query query={OBTENER_PRODUCTOS} variables={{stock: true}} pollInterval={500}>
                            {({ loading, error, data,startPolling, stopPolling }) => {
                                if (loading) return (
                                    <div className="spinner">
                                        <div className="bounce1"></div>
                                        <div className="bounce2"></div>
                                        <div className="bounce3"></div>
                                    </div>
                                )
                                if (error) return `Error ${error.message}`;
                                //console.log(data)

                                return (
                                    <ContenidoPedido
                                        productos={data.obtenerProductos}
                                        id={id}
                                    />
                                )
                            }}
                        </Query>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default NuevoPedido
