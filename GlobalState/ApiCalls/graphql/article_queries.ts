import { gql } from "@apollo/client";

export const GET_ALL_SLUGS = gql`
query{
    articles{
      data{
        attributes{   
          Slug
        }
      }
    }
  }
`;

export const GET_ALL_ARTICLES = gql`
query{
  articles{
    data{
      id,
      attributes{
        Title
        Slug
        Content
        publishedAt
        CoverImage{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}
`;

export const GET_SINGLE_POST = gql`
query($slugUrl: String!)
{
  articles(filters: { Slug: { eq: $slugUrl }}){
    data{
      attributes{
        Title
        Content
        publishedAt
        CoverImage{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}
`