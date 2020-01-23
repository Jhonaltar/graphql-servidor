import React, { Component, Fragment } from 'react';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



// importar Componentes
import Header from './Componentes/Header';
import Clientes from './Componentes/Clientes';
import EditarCliente from './Componentes/EditarCliente';
import NuevoCliente from './Componentes/NuevoCliente';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
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
                <Route exact path="/" component={Clientes}/>
                <Route exact path="/cliente/editar/:id" component={EditarCliente}/>
                <Route exact path="/cliente/nuevo" component={NuevoCliente}/>
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ApolloProvider>
    );
  }

}

export default App;