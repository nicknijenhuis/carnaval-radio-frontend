import { gql } from "@apollo/client";

export const GET_ALL_SPONSORS = gql`
  query {
    sponsorTypes(sort: "Order:asc") {
      data {
        id
        attributes {
          Name
          Order
          LogoSize
        }
      }
    }
    # filters: { ActiveFrom: { gt: $now }, ActiveUntil: { lt: $now } }
    sponsors(pagination: { limit: 100 }) {
      data {
        id
        attributes {
          Name
          Link
          Logo {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          Type {
            data {
              id
            }
          }
        }
      }
    }
  }
`;
