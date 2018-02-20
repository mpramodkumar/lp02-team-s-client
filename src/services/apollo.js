import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';

const graphqlLink =
  process.env.REACT_APP_GRAPHQL_URL || 'http://127.0.0.1:5000/graphql';

const httpLink = new HttpLink({ uri: graphqlLink });

const authLink = (operation, next) => {
  const token = sessionStorage.getItem('jwt');

  operation.setContext(context => ({
    ...context,
    headers: {
      ...context.headers,
      Authorization: `JWT ${token}`,
    },
  }));

  return next(operation);
};

const errorLink = onError(
  ({ operation, response, graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    }
    if (networkError) console.log(`[Network error]: ${networkError}`);
  }
);

const link = ApolloLink.from([errorLink, authLink, httpLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
