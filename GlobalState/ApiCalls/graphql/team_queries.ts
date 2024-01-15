import { gql } from "@apollo/client";

export const GET_TEAM_DATA = gql`
query {
    team (sort: "DateJoined", pagination: { limit: 100 }) {
        data {
          attributes {
            Name
            Email
            Phone
            DateJoined
            Birthdate
            NickName
            Role
            Slug
            City
            Color
            Story
            Photo {
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