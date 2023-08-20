import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://test-task.profilancegroup-tech.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
