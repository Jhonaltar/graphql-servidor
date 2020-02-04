import React, { Fragment } from 'react'

import Producto from './Producto';

const Resumen = (props) => {
    const productos = props.productos;
    if (!productos) return null;
    if(productos.length === 0) return null;
    return (
        <Fragment>
            <h2 className="text-center my-5">Resumen y Cantidades</h2>
            <table className="table">
                <thead className="bg-success text-light">
                    <tr className="font-weignt-bold">
                        <th className="text-center">Producto</th>
                        <th className="text-center">Precio</th>
                        <th className="text-center">Inventario</th>
                        <th className="text-center">Cantidad</th>
                        <th className="text-center">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto,index)=>(
                        <Producto
                            key={producto.id}
                            id={producto.id}
                            producto={producto}
                            index={index}
                            actualizarCantidad={props.actualizarCantidad}
                            eliminarProducto={props.eliminarProducto}
                        />
                    ))}
                </tbody>
            </table>
        </Fragment>
    )

}

export default Resumen;
