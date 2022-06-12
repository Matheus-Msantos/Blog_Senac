import { gql } from "@apollo/client/core";

export const POST_USER = gql`
  mutation POST_USER($name: String!, $email: String!, $password: String!) {
    insert_users(objects: {email: $email, name: $name, password: $password}) {
      affected_rows
    }
  }
`;