import { ApolloClient, InMemoryCache } from "@apollo/client";
import Image from "next/image";
import React from "react";
import { GET_ALL_SPONSORS } from "../graphql/sponsor_queries";
import {
  Sponsor,
  SponsorType,
  GraphQLSponsor,
  GraphQLSponsorType,
} from "../types/sponsorTypes";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_STRAPI_URL,
  cache: new InMemoryCache(),
});

interface Props {
  sponsorTypes: SponsorType[];
  sponsors: Sponsor[];
}

const logoSizeMapping: {
  [id: string]: string
} = {
  'S': 'w-16',
  'M': 'w-24',
  'L': 'w-32',
  'XL': 'w-40',
  'XXL': 'w-48',
}

const LogosPerType = ({ sponsors, logoSize }: { sponsors: Sponsor[], logoSize: string }) => {
  const logoSizeClass = logoSizeMapping[logoSize];

  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 md:space-x-10">
      {sponsors.map((x) => {
        return (
          <li key={x.Name}>
            <Image
              className={logoSizeClass}
              src={x.Logo.Url}
              width={x.Logo.Width}
              height={x.Logo.Height}
              alt={`Logo van ${x.Name}`}
            />
            {x.Name}
          </li>
        );
      })}
    </ul>
  );
};

const Sponsors = ({ sponsorTypes, sponsors }: Props) => {
  return (
    <ul>
      {sponsorTypes
        .sort((st) => st.Order)
        .map((st) => {
          const sponsorsPerType = sponsors.filter((x) => x.TypeID === st.Id);
          return (
            <div key={st.Name} className=" pt-12 px-5">
              <h1>{st.Name}</h1>
              <LogosPerType sponsors={sponsorsPerType} logoSize={st.LogoSize} />
            </div>
          );
        })}
    </ul>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_ALL_SPONSORS });

  const sponsors: Sponsor[] = data.sponsors.data.map((x: GraphQLSponsor) => {
    return {
      Name: x.attributes.Name,
      Logo: {
        Width: x.attributes.Logo.data.attributes.width,
        Height: x.attributes.Logo.data.attributes.height,
        Url: x.attributes.Logo.data.attributes.url,
      },
      TypeID: x.attributes.Type.data.id,
    } as Sponsor;
  });

  const sponsorTypes: SponsorType[] = data.sponsorTypes.data.map(
    (x: GraphQLSponsorType) => {
      return {
        Id: x.id,
        Name: x.attributes.Name,
        Order: x.attributes.Order,
        LogoSize: x.attributes.LogoSize,
      } as SponsorType;
    }
  );

  return {
    props: {
      sponsorTypes,
      sponsors,
    },
  };
}

export default Sponsors;
