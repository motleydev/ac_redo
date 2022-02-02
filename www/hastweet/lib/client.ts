import { GraphQLClient } from "graphql-request";

const graphQLClient = new GraphQLClient(
  "http://localhost:8080/v1/graphql"
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
