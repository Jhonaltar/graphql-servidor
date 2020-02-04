import React, { Fragment, h7 } from 'react';

import { OBTENER_PRODUCTO } from '../../queries';
import { Query, Mutation } from 'react-apollo';
import ResumenProducto from './ResumenProducto';
import { ACTUALIZAR_ESTADO } from '../../mutations';


const hStyle1 = { marginLeft: '20px',color: '#000' };

const color ={
    color: '#000'
}   


const Pedido = (props) => {

    const { pedido } = props;

    const { id } = pedido;

    //fecha de pedido
    const fecha = new Date(Number(pedido.fecha))

    //estado y clases de estado
    const { estado } = pedido;
    console.log(estado)

    let clase;
    if (estado === 'PENDIENTE') {
        clase = 'badge-warning'
    } else if (estado === 'CANCELADO') {
        clase = 'badge-danger'
    } else {
        clase = 'badge-success'
    }
    /*
    este es para sombrear el color el borde de cards
        let clase;
        if(estado === 'PENDIENTE'){
            clase= 'border-light'
        }else if(estado === 'CANCELADO'){
            clase= 'border-danger'
        }else{
            clase= 'border-success'
        }*/

    return (

        <Fragment>
            {/* 
            <div className="col-md-4">
                <div className={`card mb-3 `} >
                    <div className="card-body">
                        <p className="card-text font-weight-bold ">Estado:
                           <Mutation mutation={ACTUALIZAR_ESTADO}>
                                {actualizarEstado => (
                                    <select
                                        value={pedido.estado}
                                        onChange={e => {
                                            const input = {
                                                id,
                                                pedido: pedido.pedido,
                                                fecha: pedido.fecha,
                                                total: pedido.total,
                                                cliente: props.cliente,
                                                estado: e.target.value
                                            }
                                            actualizarEstado({
                                                variables: { input }
                                            })
                                        }}
                                        className="form-control my-3">
                                        <option value="PENDIENTE">PENDIENTE</option>
                                        <option value="COMPLETADO">COMPLETADO</option>
                                        <option value="CANCELADO">CANCELADO</option>
                                    </select>
                                )}
                            </Mutation>
                        </p>
                        <p className="card-text font-weight-bold">Pedido ID:
                        <span className="font-weight-normal"> {pedido.id}</span>
                        </p>
                        <p className="card-text font-weight-bold">Fecha Pedido:
                        <span className="font-weight-normal"> {fecha.toLocaleString("es-EC")}</span>
                        </p>
                        <p className="card-text font-weight-bold">Total:
                        <span className="font-weight-normal"> $ {pedido.total} </span>
                        </p>

                        <h3 className="card-text text-center mb-3">Artículos del pedido</h3>
                        {pedido.pedido.map((producto, index) => {
                            const { id } = producto
                            return (
                                <Query key={pedido.id + index} query={OBTENER_PRODUCTO} variables={{ id }}>
                                    {({ loading, error, data }) => {
                                        if (loading) return 'Cargando...'
                                        if (error) return `Error ${error.message}`

                                        return (
                                            <ResumenProducto
                                                producto={data.obtenerProducto}
                                                cantidad={producto.cantidad}
                                                key={producto.id}
                                            />
                                        )
                                    }}
                                </Query>
                            )
                        })}
                        <h6 className="card-text text-center mb-3">Estado: <a className={`badge ${clase} badge-pill`}><h7> {pedido.estado}</h7></a></h6>
                    </div>
                </div>
            </div>
*/}

            <div className="col-md-4">
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="https://materializecss.com/images/office.jpg"></img>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4"><strong style={color}>Total:</strong> $ {pedido.total}<i className="material-icons right">more_vert</i></span>
                        <p><a ><strong style={color}>Pedido ID: </strong>{pedido.id}</a></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4"><strong style={color}>Detalles pedido</strong><i className="material-icons right">close</i></span>
                        <p><strong style={color}>Artículos del pedido</strong></p>
                        {pedido.pedido.map((producto, index) => {
                            const { id } = producto
                            return (
                                <Query key={pedido.id + index} query={OBTENER_PRODUCTO} variables={{ id }}>
                                    {({ loading, error, data }) => {
                                        if (loading) return 'Cargando...'
                                        if (error) return `Error ${error.message}`

                                        return (
                                            <ResumenProducto
                                                producto={data.obtenerProducto}
                                                cantidad={producto.cantidad}
                                                key={producto.id}
                                            />
                                        )
                                    }}
                                </Query>
                            )
                        })}
                        <p className="card-text font-weight-bold ">Estado:
                           <Mutation mutation={ACTUALIZAR_ESTADO}>
                                {actualizarEstado => (
                                    <select
                                        value={pedido.estado}
                                        onChange={e => {
                                            const input = {
                                                id,
                                                pedido: pedido.pedido,
                                                fecha: pedido.fecha,
                                                total: pedido.total,
                                                cliente: props.cliente,
                                                estado: e.target.value
                                            }
                                            actualizarEstado({
                                                variables: { input }
                                            })
                                        }}
                                        className="form-control my-3">
                                        <option value="PENDIENTE">PENDIENTE</option>
                                        <option value="COMPLETADO">COMPLETADO</option>
                                        <option value="CANCELADO">CANCELADO</option>
                                    </select>
                                )}
                            </Mutation>
                        </p>
                    </div>
                    <div className="card-footer">
                        <span className="card-text "><small className="text-muted" ><strong style={color}>Fecha de Creacion: </strong>{fecha.toLocaleString("es-EC")}</small>
                            <h7 className="card-text" ><small className="text-muted" style={hStyle1} ><strong style={color}>Estado: </strong><p className={`badge ${clase} badge-pill`}>{pedido.estado}</p>
                            </small></h7>
                        </span>
                    </div>
                    </div>
                </div>

        </Fragment>
            )
        
        }
        
        export default Pedido
