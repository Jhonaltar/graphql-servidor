import React, { Component, Fragment } from 'react';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



// importar Componentes
import Header from './Componentes/Layout/Header';

import Clientes from './Componentes/Clientes/Clientes';
import EditarCliente from './Componentes/Clientes/EditarCliente';
import NuevoCliente from './Componentes/Clientes/NuevoCliente';

import NuevoProducto from './Componentes/Productos/NuevoProducto';
import Productos from './Componentes/Productos/Productos';
import EditarProducto from './Componentes/Productos/EditarProducto';

import NuevoPedido from './Componentes/Pedidos/NuevoPedido';
import PedidosCliente from './Componentes/Pedidos/PedidosCliente';

import Panel from './Componentes/Panel/Panel';



const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache ({
    addTypename: false
  }),
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/clientes" component={Clientes}/>
                <Route exact path="/clientes/editar/:id" component={EditarCliente}/>
                <Route exact path="/clientes/nuevo" component={NuevoCliente}/>

                <Route exact path="/productos/nuevo" component={NuevoProducto}/>
                <Route exact path="/productos" component={Productos}/>
                <Route exact path="/productos/editar/:id" component={EditarProducto}/>

                <Route exact path="/pedidos/nuevo/:id" component={NuevoPedido}/>
                <Route exact path="/pedidos/:id" component={PedidosCliente}/>

                <Route exact path="/panel" component={Panel}/>
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ApolloProvider>
    );
  }

}

export default App;
