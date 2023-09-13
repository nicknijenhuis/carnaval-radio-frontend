import { gql } from "@apollo/client";

export const GET_UI_NAVIGATION = gql`
  query($menuName: String!) {
    renderNavigation(
      navigationIdOrSlug: $menuName
      type: TREE
      menuOnly: false
    ) {
      title
      path
      related {
        attributes {
          ... on Page {
            Slug
          }
        }
      }
      items {
        title
        path
        related {
          attributes {
            ... on Page {
              Slug
            }
          }
        }
        items {
          title
          path
          related {
            attributes {
              ... on Page {
                Slug
              }
            }
          }
          items {
            title
            path
            related {
              attributes {
                ... on Page {
                  Slug
                }
              }
            }
          }
        }
      }
    }
  }
`;