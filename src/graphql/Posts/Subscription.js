import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  subscription GET_POSTS {
    posts(order_by: {created_at: desc}) {
      id
      category
      created_at
      image
      title
    }
  }
`;