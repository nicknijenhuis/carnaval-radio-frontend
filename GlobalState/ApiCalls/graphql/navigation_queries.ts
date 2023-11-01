import { gql } from "@apollo/client";

export const GET_UI_NAVIGATION = gql`
  fragment navigationAttributes on NavigationItem{
			title
      path
  		Icon
      related {
        attributes {
          ... on Page {
            Slug
            Title
          }
          ... on Article {
            Slug
            Title
          }
        }
      }
} 

  query ($menuName: String!) {
    renderNavigation(
      navigationIdOrSlug: $menuName
      type: TREE
      menuOnly: false
    ) {
      ...navigationAttributes
      items {
        ...navigationAttributes
        items {
          ...navigationAttributes
          items {
            ...navigationAttributes
          }
        }
      }
    }
  }
`;
