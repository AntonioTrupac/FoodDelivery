import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './stylesheets/index.css';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/apollo';

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
