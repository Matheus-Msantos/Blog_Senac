import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";

export const Client = new ApolloClient({
  link: new WebSocketLink({
    uri: 'wss://smart-jaguar-37.hasura.app/v1/graphql',
    options: {
      reconnect: true,
      connectionParams: {
        headers: { 'x-hasura-admin-secret': 'DlUk1Xy3aeIf4nZzbhbrFIpFHL5wBCt9GHGji5z3nNodFEsj9lIYm1gEmMg8k1e7' }
      },
    },
  }),
  cache: new InMemoryCache(),
});