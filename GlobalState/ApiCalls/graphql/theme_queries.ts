import { gql } from "@apollo/client";

export const GET_THEME_DATA = gql`
query{
  theme{
    data{
      attributes{
        Name
        BaseColor
        Primary 
        PrimaryShade_1
        PrimaryShade_2
        PrimaryShade_3        
        Secondary
        SecondaryShade_1
        SecondaryShade_2
        HeroBackground
        SideBarBackground
        ActiveTab
        Tertiary
        TertiaryShade_1
        TertiaryShade_2
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