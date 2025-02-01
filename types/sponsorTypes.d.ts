export type GraphQLSponsor = {
  id: string;
  attributes: {
    Name: string;
    Logo: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
    Link: string;
    DisplayPriority?: number;
    Type: { data: { id: string } };
  };
};

export type GraphQLSponsorType = {
  id: string;
  attributes: {
    Name: string;
    Order: number;
    LogoSize: string;
    ShowOnHomePage: boolean;
  };
};

export interface SponsorType {
  Id: string;
  Name: string;
  Order: number;
  LogoSize: string;
  ShowOnHomePage: boolean;
}

export interface Sponsor {
  Id: string;
  Name: string;
  Logo?: Image;
  Link?: string;
  TypeID?: string;
  Order: number;
  ShowOnHomePage: boolean;
}

export interface Image {
  Url: string;
  Width: number;
  Height: number;
}
