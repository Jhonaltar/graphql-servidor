import React, { Fragment } from 'react'

import { Query } from 'react-apollo';

import { CLIENTE_QUERY } from '../../queries';

const DatosCliente = ({ id }) => {
    return (
        <Fragment>
            <h2 className="text-center mb-3">Resumen del Cliente</h2>
            <Query query={CLIENTE_QUERY} variables={{ id }} pollInterval={500}>
                {({ loading, error, data, startPolling, stopPolling }) => {
                    if (loading) return 'Cargando...'
                    if (error) return `Error ${error.message}`;

                    //console.log(data.getCliente)

                    const { nombre, apellido, edad, emails, empresa, tipo } = data.getCliente;

                    return (
                        <Fragment>
                        <div className="col-lg-10">
                            <div className="card z-depth-3">
                                <div className="card-body">
                                    <div className="card-body text-center bg-primary rounded-top deep-orange lighten-1">
                                        <div className="user-box ">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user avatar"></img>
                                        </div>
                                    </div>
                                    <ul className="nav nav-pills nav-pills-primary nav-justified">
                                        <li className="nav-item">
                                            <a  data-target="#profile" data-toggle="pill" className="nav-link active show"><i className="icon-user"></i> <span className="hidden-xs">Perfil</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a  data-target="#messages" data-toggle="pill" className="nav-link"><i className="icon-envelope-open"></i> <span className="hidden-xs">Pedidos</span></a>
                                        </li>
                                    </ul>
                                    <div className="tab-content p-3">
                                        <div className="tab-pane active show" id="profile">
                                            <h5 className="mb-3">Datos del Cliente</h5>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <h6><strong>Nombre:</strong></h6>
                                                    <p>

                                                    </p>
                                                    <h6><strong>Empresa:</strong></h6>
                                                    <p>

                                                    </p>
                                                    <h6><strong>Edad:</strong></h6>
                                                </div>
                                                <div className="col-md-6">
                                                    <h6>{nombre} {apellido}</h6>
                                                    <a  className="badge badge-dark badge-pill"><h7>{empresa}</h7></a>
                                                    <h6>{edad}</h6>
                                                </div>
                                                <div className="col-md-12">
                                                    <h5 className="mt-2 mb-3"><span className="fa fa-clock-o ion-clock float-right"></span>Correos</h5>
                                                    <table className="table table-hover table-striped">
                                                        <tbody>
                                                    
                                                            <tr>
                                                                <td>
                                                                    {emails.map(email => `${email.email}\n-`)}
                                                                </td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="tab-pane" id="messages">
                                            <div className="alert alert-info alert-dismissible" role="alert">
                                                <button type="button" className="close" data-dismiss="alert">×</button>
                                                <div className="alert-icon">
                                                    <i className="icon-info"></i>
                                                </div>
                                                <div className="alert-message">
                                                    <span><strong>Info!</strong> Lorem Ipsum is simply dummy text.</span>
                                                </div>
                                            </div>
                                            <table className="table table-hover table-striped">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <span className="float-right font-weight-bold">3 hrs ago</span> Here is your a link to the latest summary report from the..
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="float-right font-weight-bold">Yesterday</span> There has been a request on your account since that was..
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="float-right font-weight-bold">9/10</span> Porttitor vitae ultrices quis, dapibus id dolor. Morbi venenatis lacinia rhoncus.
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="float-right font-weight-bold">9/4</span> Vestibulum tincidunt ullamcorper eros eget luctus.
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="float-right font-weight-bold">9/4</span> Maxamillion ais the fix for tibulum tincidunt ullamcorper eros.
                                </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-center">
                                <h6><strong>Tipo:</strong></h6>
                                <a  className="badge badge-warning badge-pill"><h7>{tipo}</h7></a>
                                </div>
                            </div>
                        </div>
                        </Fragment>
                    )
                }}
            </Query>
        </Fragment>

    )
}

export default DatosCliente;

{/* 
                        <div class="col-lg-12">
                            <div class="card z-depth-3">
                                <div class="card-body">
                                    <ul class="nav nav-pills nav-pills-primary nav-justified">
                                        <li class="nav-item">
                                            <a href="javascript:void();" data-target="#profile" data-toggle="pill" class="nav-link active show"><i class="icon-user"></i> <span class="hidden-xs">Perfil</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void();" data-target="#messages" data-toggle="pill" class="nav-link"><i class="icon-envelope-open"></i> <span class="hidden-xs">Pedidos</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void();" data-target="#edit" data-toggle="pill" class="nav-link"><i class="icon-note"></i> <span class="hidden-xs">Edit</span></a>
                                        </li>
                                    </ul>
                                    <div class="tab-content p-3">
                                        <div class="tab-pane active show" id="profile">
                                            <h5 class="mb-3">Datos del Cliente</h5>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <h6><strong>Nombre:</strong></h6>
                                                    <p>
                                                        
                                                    </p>
                                                    <h6><strong>Empresa:</strong></h6>
                                                    <p>
                                                        
                                                    </p>
                                                    <h6><strong>Edad:</strong></h6>    
                                                </div>
                                                <div class="col-md-6">
                                                    <h6>{nombre} {apellido}</h6>
                                                    <a href="javascript:void();" class="badge badge-dark badge-pill"><h7>{empresa}</h7></a>
                                                    <h6>{edad}</h6>
                                                </div>
                                                <div class="col-md-12">
                                                    <h5 class="mt-2 mb-3"><span class="fa fa-clock-o ion-clock float-right"></span>Correos</h5>
                                                    <table class="table table-hover table-striped">
                                                        <tbody>
                                                            
                                                            <tr>
                                                                <td>
                                                                    {emails.map(email => `${email.email}\n-`)} 
                                                                </td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="tab-pane" id="messages">
                                            <div class="alert alert-info alert-dismissible" role="alert">
                                                <button type="button" class="close" data-dismiss="alert">×</button>
                                                <div class="alert-icon">
                                                    <i class="icon-info"></i>
                                                </div>
                                                <div class="alert-message">
                                                    <span><strong>Info!</strong> Lorem Ipsum is simply dummy text.</span>
                                                </div>
                                            </div>
                                            <table class="table table-hover table-striped">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <span class="float-right font-weight-bold">3 hrs ago</span> Here is your a link to the latest summary report from the..
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="float-right font-weight-bold">Yesterday</span> There has been a request on your account since that was..
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="float-right font-weight-bold">9/10</span> Porttitor vitae ultrices quis, dapibus id dolor. Morbi venenatis lacinia rhoncus.
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="float-right font-weight-bold">9/4</span> Vestibulum tincidunt ullamcorper eros eget luctus.
                                </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="float-right font-weight-bold">9/4</span> Maxamillion ais the fix for tibulum tincidunt ullamcorper eros.
                                </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        */}

{/* <div class="col-lg-12">
                            <div class="profile-card-4 z-depth-3">
                                <div class="card">
                                    <div class="card-body text-center bg-primary rounded-top deep-orange lighten-1">
                                        <div class="user-box">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user avatar"></img>
                                        </div>
                                        <h5 class="mb-1 text-white">{nombre} {apellido}</h5>
                                        <h4 class="text-light"class="badge badge-dark badge-pill"><strong>Empresa: </strong>{empresa}</h4><br></br>
                                        <h5 class="mb-1 text-white" class="badge badge-warning badge-pill"><strong>Edad:</strong> {edad}</h5>
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-group shadow-none">
                                            <li class="list-group-item">
                                                <div class="list-icon">
                                                    <i class="fa fa-envelope"></i>
                                                </div>
                                                <div class="list-details">
                                                    <small>Emails: </small>
                                                    <span>{emails.map(email =>`${email.email}\b`)}</span>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="row text-center mt-4">
                                            <div class="col p-2">
                                                <h4 class="mb-1 line-height-5">Tipo:</h4>
                                                <small class="mb-0 font-weight-bold" class="badge badge-success badge-pill">{tipo}</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer text-center">
                                    </div>
                                </div>
                            </div>
                        </div>*/}