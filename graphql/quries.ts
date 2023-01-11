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
      attributes{
        Title
        Slug
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

export const GET_SINGLE_ARTICLE = gql`
query{
  articles(filters: {Slug: { in: "second-post"}}){
    data{
      attributes{
        title
        content
        publishedAt
        coverPhoto{
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