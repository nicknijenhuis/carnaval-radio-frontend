import { gql } from "@apollo/client";

export const GET_THEME_DATA = gql`
query{
  theme{
    data{
      attributes{
        Name
        BaseColor
        Logo{
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