import React, { Component } from 'react'

import { Mutation} from 'react-apollo';
import {NUEVO_PEDIDO} from '../../mutations'

import {withRouter} from 'react-router-dom';

const validarPedido = (props) => {
    let novalido = !props.productos || props.total <= 0 ;
    return novalido;
}

const GenerarPedido = (props) => {
    //console.log(props)
   
        return (

           <Mutation mutation={NUEVO_PEDIDO} onCompleted={()=>props.history.push('/clientes')}>
               {nuevoPedido =>(
                   <button 
                   type="button" 
                   className="btn btn-success light-blue darken-1 mt-2" 
                   disabled={validarPedido(props)} 
                   onClick={e =>{
                        //console.log(props.productos)

                    const productosInput = props.productos.map(({nombre,precio,stock, ...object})=>object)
                    //console.log(productosInput)
                    const input={   
                        pedido: productosInput,
                        total: props.total,
                        cliente: props.idCliente
                    }
                    //console.log(input)
                    nuevoPedido({
                        variables: {input}
                    })
                   }}> 
                   <i className="material-icons left">assignment</i> Generar Pedido 
                   </button>
               )}
           </Mutation>
        )
}

export default withRouter (GenerarPedido);
