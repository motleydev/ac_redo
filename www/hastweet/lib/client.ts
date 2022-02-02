import { GraphQLClient } from "graphql-request";

const graphQLClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_SERVER as string
  // {
  //   headers: (() => {
  //     let cookie = Cookies.get("has_demo_token");
  //     if (cookie) {
  //       return { Authorization: `Bearer ${cookie}` };
  //     }
  //   })(),
  // }
);

export default graphQLClient;
