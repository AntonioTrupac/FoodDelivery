import {
   ApolloClient, createHttpLink,
   InMemoryCache,
} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {getAccessToken} from "../accessToken";

const httpLink = createHttpLink({
   uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
   const accessToken = getAccessToken();
   // return the headers to the context so httpLink can read them
   console.log('ACCESS TOKEN',accessToken)
   return {
      headers: {
         ...headers,
         authorization: accessToken ? `bearer ${accessToken}` : ''
      }
   }
});

export const client = new ApolloClient({
   link: authLink.concat(httpLink),
   cache: new InMemoryCache(),
   credentials: 'include'
});