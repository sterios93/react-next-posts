import '../styles/globals.css';
import { ApolloProvider, ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

const restLink = new RestLink({ uri: 'https://pokeapi.co/api/v2' });
const client = new ApolloClient({
  link: ApolloLink.from([restLink]),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
