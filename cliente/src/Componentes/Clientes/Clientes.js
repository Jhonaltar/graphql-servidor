import React, { Fragment, Component } from 'react'
import { Query, Mutation } from 'react-apollo';

import { CLIENTES_QUERY } from '../../queries';
import { Link } from 'react-router-dom';
import { ELIMINAR_CLIENTE } from '../../mutations';

import Paginador from '../Paginador';

import { ToastContainer, toast } from 'react-toastify';


const hStyle1 = { color: 'white' };
const hStyle2 = { 
    color: 'white',
    marginLeft: '-300px'
};



class Clientes extends Component {

    limite = 5;

    state = {
        paginador: {
            offset: 0,
            actual: 1
        }
    }

    paginaAnterior = () => {
        this.setState({
            paginador: {
                offset: this.state.paginador.offset - this.limite,
                actual: this.state.paginador.actual - 1
            }
        })
    }

    paginaSiguiente = () => {
        this.setState({
            paginador: {
                offset: this.state.paginador.offset + this.limite,
                actual: this.state.paginador.actual + 1
            }
        })
    }


    render() {
        return (
            <Query query={CLIENTES_QUERY} pollInterval={500} variables={{ limite: this.limite, offset: this.state.paginador.offset }}>
                {({ loading, error, data, startPolling, stopPolling }) => {
                    if (loading) return "Cargando...";
                    if (error) return `Erro: ${error.message}`;
                    console.log(data)
                    return (
                        <Fragment>
                            <h1 className="text-center ">Listado Clientes</h1>
                            <ToastContainer autoClose={3000} />
                            <ul className="list-group mt-4">
                                {data.getClientes.map(item => {
                                    const { id } = item;
                                    return (
                                        <li key={item.id} className="list-group-item">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-md-8 d-flex justify-content-between align-items-center">
                                                    {item.nombre} {item.apellido} - {item.empresa}
                                                    {item.email}
                                                </div>
                                                <div className="col-md-4 d-flex justify-content-end">
                                                    <Link to={`/pedidos/nuevo/${id}`} className="waves-effect waves-light btn  orange mr-2" style={hStyle2}><i className="material-icons left">add_shopping_cart</i> Nuevo Pedido</Link>
                                                    <Link to={`/pedidos/${id}`} className="waves-effect waves-light btn  light-blue darken-1  mr-2" style={hStyle1}><i className="material-icons left">remove_red_eye</i> Ver Pedido</Link>
                                                    <Mutation mutation={ELIMINAR_CLIENTE}>
                                                        {eliminarCliente => (
                                                            <button type="button" className="waves-effect waves-light btn  red lighten-1 mr-2" style={hStyle1}
                                                                onClick={() => {
                                                                    //console.log(item.id)
                                                                    if (window.confirm('Seguro que deseas Eliminar ?')) {
                                                                        eliminarCliente({
                                                                            variables: { id }
                                                                        }, toast.success("Se Elimino Correctamente el Cliente", {
                                                                            position: toast.POSITION.BOTTOM_RIGHT,

                                                                        }))
                                                                    }
                                                                }}
                                                            ><i className="material-icons left">delete_forever</i> Eliminar</button>
                                                        )}
                                                    </Mutation>
                                                    <Link to={`/clientes/editar/${item.id}`} className="waves-effect waves-light btn" style={hStyle1}><i className="material-icons left">edit</i>
                                                        Editar
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                            <Paginador
                                actual={this.state.paginador.actual}
                                total={data.totalClientes}
                                limite={this.limite}
                                paginaAnterior={this.paginaAnterior}
                                paginaSiguiente={this.paginaSiguiente}
                            />
                        </Fragment>
                    )
                }}
            </Query>

        )
    }
}





export default Clientes;
