import { gql } from "@apollo/client";

export const GET_TEAM_DATA = gql`
query {
    teams (sort: "displayPriority", pagination: { limit: 100 }) {
        data {
          attributes {
            name
            email
            phone
            desc
            url
            img {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
}
`;