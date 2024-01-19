import { gql } from "@apollo/client";

export const GET_ALL_EVENTS = gql`
    query {
        events(sort: "Date:asc") {
            data {
                id
                attributes {
                    Title
                    Date
                    Address
                    Link
                    IsHighlighted
                }
            }
        }
    }
`;