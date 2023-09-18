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
    Type: { data: { id: string } };
  };
};

export type GraphQLSponsorType = {
  id: string;
  attributes: {
    Name: string;
    Order: number;
    LogoSize: string;
  };
};

export interface SponsorType {
  Id: string;
  Name: string;
  Order: number;
  LogoSize: string;
}

export interface Sponsor {
  Id: string;
  Name: string;
  Logo?: Image;
  Link?: string;
  TypeID: string;
}

export interface Image {
  Url: string;
  Width: number;
  Height: number;
}
