import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client';
import {onError} from '@apollo/client/link/error'

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

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and poop to reload.
          </p>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
