import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import AdministerPatients from './Components/AdministerPatients/AdministerPatients';
import Patients from './Components/Patients/Patients';
import { Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';

// const client = new ApolloClient({
//     uri : "https://vac-node-graphql.herokuapp.com/",
//     cache : new InMemoryCache()
//   })

const client = new ApolloClient({
  uri : "http://localhost:9090/gq",
  cache : new InMemoryCache()
})
function App() {
  return (
    <Fragment>
      <div className="container">
        <Header />
      </div>
    <hr></hr>
    <div className="container">
    <Switch>

    <Route path="/">
      <HomePage/>

    <Route path="/patients">
      <ApolloProvider client={client}>
        <Patients />
      </ApolloProvider>
    </Route>

    <Route path="/administerPatients" exact>
      <ApolloProvider client={client}>
        <AdministerPatients />
      </ApolloProvider>
    </Route>

    </Route>

    </Switch>
    </div>
    </Fragment>
  )
}

export default App