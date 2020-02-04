/*links de notificaciones
https://www.npmjs.com/package/react-toastify
https://toasted-notes.netlify.com/#
*/

import React, { Component, Fragment } from 'react';
import { Query, Mutation } from 'react-apollo';

import { OBTENER_PRODUCTOS } from '../../queries';
import { ELIMINAR_PRODUCTO } from '../../mutations';
import { Link } from 'react-router-dom';
import Exito from '../Alertas/Exito';
import Paginador from '../Paginador';

//import toast1 from 'toasted-notes'
import { ToastContainer, toast } from 'react-toastify';
//import App from '../../App.css';

const hStyle1 = { color: 'white' };


class Productos extends Component {

    limite = 5;

    state = {
        paginador: {
            offset: 0,
            actual: 1
        },
        alerta: {
            mostrar: false,
            mensaje: ''
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

    /*
    aaaa = ()=>{
        toast1.notify('Hello world!', {
            position: toast.POSITION.BOTTOM_RIGHT,
            
          })
    }*/

    /*
    notify = () => toast.success("Success Notification !", {
        position: toast.POSITION.BOTTOM_RIGHT,
        
      });*/


    render() {

        const { alerta: { mostrar, mensaje } } = this.state;

        let alerta = (mostrar) ? <Exito mensaje={mensaje} /> : '';


        return (
            <Fragment>
                <h1 className="text-center mb-5">Productos </h1>
                {alerta}
                <ToastContainer autoClose={3000} />
                <Query query={OBTENER_PRODUCTOS} pollInterval={500} variables={{limite: this.limite, offset: this.state.paginador.offset}} >
                    {({ loading, error, data, startPolling, stopPolling }) => {
                        if (loading) return "Cargando...";
                        if (error) return `Erro: ${error.message}`;
                        console.log(data.obtenerProductos)
                        return (
                            <Fragment>
                                <table className="table ">
                                    <thead>
                                        <tr className="table indigo lighten-4">
                                            <th scope="col" className="text-center">Nombre</th>
                                            <th scope="col" className="text-center">Precio</th>
                                            <th scope="col" className="text-center">Stock</th>
                                            <th scope="col" className="text-center">Editar</th>
                                            <th scope="col" className="text-center">Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.obtenerProductos.map(item => {
                                            const { id } = item;
                                            return (
                                                <tr key={id}>
                                                    <td className="text-center">{item.nombre}</td>
                                                    <td className="text-center">{item.precio}</td>
                                                    <td className="text-center">{item.stock}</td>
                                                    <td className="text-center">
                                                        <Link to={`/productos/editar/${id}`} type="button" className="waves-effect waves-light btn row justify-content-between align-items-center" style={hStyle1}>
                                                            <i className="material-icons right">edit</i>Editar
                                                </Link>
                                                    </td>
                                                    <td className="text-center">
                                                        <Mutation mutation={ELIMINAR_PRODUCTO}
                                                        /*
                                                        onCompleted={(data)=>{
                                                            //console.log(data)
                                                            this.setState({
                                                                alerta:{
                                                                    mostrar: true,
                                                                    mensaje: data.eliminarProducto
                                                                }
                                                            },()=>{
                                                                setTimeout(()=>{
                                                                    this.setState({
                                                                        alerta:{
                                                                            mostrar:false,
                                                                            mensaje: ''
                                                                        }
                                                                    })
                                                                },3000);
                                                            })
                                                        }}*/
                                                        >
                                                            {eliminarProducto => (
                                                                <button
                                                                    onClick={() => {
                                                                        if (window.confirm('Seguro que deseas eliminar este producto ?')) {
                                                                            eliminarProducto({
                                                                                variables: { id }

                                                                            }, toast.success("Se Elimino Correctamente el Producto", {
                                                                                position: toast.POSITION.BOTTOM_RIGHT,

                                                                            }))

                                                                        }
                                                                    }}
                                                                    type="button"
                                                                    className="waves-effect waves-light btn  red lighten-1 "
                                                                    style={hStyle1}
                                                                >
                                                                    <i className="material-icons right">delete_forever</i> Eliminar
                                                            </button>


                                                            )}
                                                        </Mutation>
                                                    </td>
                                                    {/*
                                                <td className="text-center">

                                                <button 
                                                             onClick={this.aaaa}
                                                            type="button" 
                                                            className="btn waves-effect waves-teal" 
                                                            style={hStyle1}
                                                            >
                                                             Prueba
                                                            </button>
                                                </td>
                                                */}
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                <Paginador
                                    actual={this.state.paginador.actual}
                                    total={data.totalProductos}
                                    limite={this.limite}
                                    paginaAnterior={this.paginaAnterior}
                                    paginaSiguiente={this.paginaSiguiente}
                                />
                            </Fragment>
                        )
                    }}
                </Query>
            </Fragment>
        )
    }
}
export default Productos;



