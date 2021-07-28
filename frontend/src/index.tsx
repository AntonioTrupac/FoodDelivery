import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './stylesheets/index.css';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/apollo';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
