import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client/react';
import { client } from './modules/shared/apolloClient';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>
);