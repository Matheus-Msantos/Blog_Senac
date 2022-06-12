import { gql } from "@apollo/client/core";

export const INSERT_POST = gql`
  mutation INSERT_POST($title: String!, $image: String!, $category: String!, $contents: String!) {
    insert_posts(objects: {category: $category, title: $title, image: $image, contents: $contents}) {
      affected_rows
    }
  }
`;