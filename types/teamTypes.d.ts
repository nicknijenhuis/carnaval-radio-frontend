 
  export interface TeamPage {
    teampage: {
       data: {
        attributes: {
          title: string
          desc: string
          seo: Seo
        }
      }
    }
    teams: {
      data: Team[]
    }
  }
  
  export interface Team {
    attributes: {
      name: string
      email: string
      phone: string
      bigRegistrationNumber: string,
      desc: string
      url: string
      img: {
        data: {
          attributes: {
            url: string
          }
        }
      }
    }
  }
  
  