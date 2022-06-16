import logo from './logo.svg';
import './App.css';
//Apollo
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client';
import {onError} from '@apollo/client/link/error'
//react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//React
import React from "react";
import { useEffect, useState } from "react";
//Components
import GetNft from './components/GetNft.js';
import Slide from './components/Slide';
import Carousel from './components/Carousel';



//Error handling
const errorLink = onError(({graphqlErrors, networkError}) => {
  if(graphqlErrors) {
    graphqlErrors.map(({ message, location, path}) => {
      alert(`GraphQL error ;( ${message}`);
    });
  }
});

//this is where we put the api path
const link = from([
  errorLink,
  new HttpLink({ uri: "https://graph.holaplex.com/v1"}),
]);

//setting up new client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});


function App() {
  //props to be in the Root. 
  const [view, setView] = useState([])
  const [objArray, setObjArray] = useState([]);

  //{name:"marcus"}

  return (
    <Router>
      <ApolloProvider client={client}>
        <div>
          <Switch>
            <Route exact path="/">
              {<Slide view={view} setView={setView} objArray={objArray}/>}
            </Route>
            <Route path="/GetNft">
              {<GetNft view= {view} setView={setView} setObjArray={setObjArray} objArray={objArray}/>}
            </Route>
            <Route path="/Carousel">
              {<Carousel view= {view}/>}
            </Route>
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
