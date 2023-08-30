import { gql } from "@apollo/client";

export const GET_ALL_SPONSORS = gql`
  query {
    sponsorTypes {
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
    sponsors {
      data {
        attributes {
          Name
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
