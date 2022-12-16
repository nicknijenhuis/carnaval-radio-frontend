import { gql } from "@apollo/client";

const GET_ALL_SLUGS = gql`
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
          coverPhoto{
              data{
              attributes{
                url
              }
            }
          }
          title
          publishedAt
          Slug
        }
      }
    }
  }
`;

const GET_SINGLE_ARTICLE = gql`
query{
  articles(filters: {Slug: { in: "second-post"}}){
    data{
      attributes{
        title
        content
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