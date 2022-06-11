import { gql } from "@apollo/client/core";

const GET_LOGIN = gql`
  query GET_LOGIN($name: String!) {
    users(where: {name: {_eq: $name}}) {
      email
      id
      name
      password
    }
  }
`;