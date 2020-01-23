import React, { Fragment } from 'react'
import { Query } from 'react-apollo';

import { CLIENTES_QUERY } from '../queries';
import { Link } from 'react-router-dom';

const hStyle1 = { color: 'white' };

const Contactos = () => (
    <Query query={CLIENTES_QUERY}>
        {({ loading, error, data }) => {
            if (loading) return "Cargando...";
            if (error) return `Erro: ${error.message}`;
            console.log(data.getClientes)
            return (
                <Fragment>
                    <h1 className="text-center ">Listado Clientes</h1>
                    <ul className="list-group mt-4">
                        {data.getClientes.map(item => (
                            <li key={item.id} className="list-group-item">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-md-8 d-flex justify-content-between align-items-center">
                                        {item.nombre} {item.apellido} - {item.empresa}
                                    </div>
                                    <div className="col-md-4 d-flex justify-content-end">
                                        <Link to={`/cliente/editar/${item.id}`}  className="waves-effect waves-light btn" style={ hStyle1 }><i className="material-icons right">edit</i>
                                            Editar
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Fragment>
            )
        }}
    </Query>
)

export default Contactos;
