import { gql } from "@apollo/client";

export const GET_UI_NAVIGATION = gql`
  query {
    renderNavigation(
      navigationIdOrSlug: "main-navigation"
      type: TREE
      menuOnly: false
    ) {
      id
      title
      path
      related {
        id
        attributes {
          __typename

          ... on Page {
            Title
          }

          ... on WithFlowType {
            Name
          }
        }
      }
      items {
        id
        title
        path
        related {
          id
          attributes {
            __typename

            ... on Page {
              Title
            }

            ... on WithFlowType {
              Name
            }
          }
        }
      }
    }
  }
`;
