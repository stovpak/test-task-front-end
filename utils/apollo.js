import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import withApollo from "next-with-apollo";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";

const GRAPHQL_URL ="http://localhost:1337";

const link = createHttpLink({
    fetch,
    uri: GRAPHQL_URL + "/graphql"
});

export default withApollo(
    ({ initialState }) =>
        new ApolloClient({
            link: link,
            cache: new InMemoryCache()
                .restore(initialState || {})
        })
);
