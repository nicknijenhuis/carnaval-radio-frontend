import { gql } from "@apollo/client";

export const GET_MAIN_NAVIGATION = gql`
  query {
    renderNavigation(
      navigationIdOrSlug: "main"
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

export const GET_FOOTER_NAVIGATION = gql`
  query {
    renderNavigation(
      navigationIdOrSlug: "footer"
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
        }
      }
    }
  }
`;

export const GET_UI_NAVIGATION = gql`
  query {
    renderNavigation(navigationIdOrSlug: "1", type: TREE, menuOnly: false) {
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
