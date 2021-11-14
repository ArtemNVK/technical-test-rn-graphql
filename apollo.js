import { ApolloClient, InMemoryCache, ApolloLink, concat, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/link-context';

const GRAPHQL_API_URL = 'https://api.github.com/graphql';
const httpLink = createHttpLink({
    uri: GRAPHQL_API_URL,
});
const authLink = setContext((_, { headers }) => {
    const token = YOUR_TOKEN;

    return {
      headers: {
        ...headers,
        "Authorization": `bearer ${token}`,
      },
    };
  });

  export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });

