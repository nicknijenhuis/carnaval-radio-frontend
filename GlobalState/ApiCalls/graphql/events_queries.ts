import { gql } from "@apollo/client";

export const GET_ALL_EVENTS = gql`
    query{
        events {
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