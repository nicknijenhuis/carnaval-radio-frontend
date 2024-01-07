import { gql } from "@apollo/client";

export const GET_ALL_SLUGS_FOR_CONTENT_PAGES = gql`
  query {
    pages {
      data {
        attributes {
          Slug
          publishedAt
        }
      }
    }
  }
`;

export const GET_SINGLE_PAGE = gql`
  query ($slugUrl: String!) {
    pages(filters: { Slug: { eq: $slugUrl } }) {
      data {
        id
        attributes {
          Title
          Content # This is now HTML
          Slug          
        }
      }
    }
  }
`;
