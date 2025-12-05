import { GraphQLClient } from "graphql-request";

export const WP_GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_WP_GRAPHQL_ENDPOINT!;

export const graphqlClient = new GraphQLClient(WP_GRAPHQL_ENDPOINT);
