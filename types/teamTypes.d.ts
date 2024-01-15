 

  export interface TeamMember {
    attributes: {
      Name: string
      NickName: string
      DateJoined: string
      Birthdate: string
      Email: string      
      Phone: string
      Slug: string
      Role: string
      City: string
      Color: string
      Story: string
      Photo: {
        data: {
          attributes: {
            url: string
          }
        }
      }
    }
  }
  
  