import { gql } from "@apollo/client/core";

export const GET_LOGIN = gql`
  query GET_LOGIN($email: String!) {
    users(where: {email: {_eq: $email}}) {
      email
      id
      name
      password
    }
  }
`;