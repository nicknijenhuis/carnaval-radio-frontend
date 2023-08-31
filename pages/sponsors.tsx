import { ApolloClient, InMemoryCache } from "@apollo/client";
import Image from "next/image";
import React, { Fragment } from "react";
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
  [id: string]: string;
} = {
  S: "w-16",
  M: "w-24",
  L: "w-32",
  XL: "w-40",
  XXL: "w-48",
};

const LogosPerType = ({
  sponsors,
  logoSize,
}: {
  sponsors: Sponsor[];
  logoSize: string;
}) => {
  const logoClassName = `${logoSizeMapping[logoSize]} border border-[#FFA500]`;

  return (
    <div className="flex flex-wrap gap-4">
      {sponsors.map((x) => {
        return (
          <a href={x.Link} target="_blank" key={x.Name}>
            {x.Logo ? (
              <Image
                key={x.Name}
                className={logoClassName}
                src={x.Logo.Url}
                width={x.Logo.Width}
                height={x.Logo.Height}
                alt={`Logo van ${x.Name}`}
              />
            ) : (
              <div className="p-2 border border-[#FFA500]">{x.Name}</div>
            )}
          </a>
        );
      })}
    </div>
  );
};

const Sponsors = ({ sponsorTypes, sponsors }: Props) => (
  <div className="m-10">
    <h1>Sponsoren</h1>
    {sponsorTypes.map((st) => {
      const sponsorsPerType = sponsors.filter((x) => x.TypeID === st.Id);
      return (
        <div key={st.Name}>
          <h2 className="my-3 text-lg">{st.Name}</h2>
          <LogosPerType sponsors={sponsorsPerType} logoSize={st.LogoSize} />
        </div>
      );
    })}
  </div>
);

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_ALL_SPONSORS });

  const sponsors: Sponsor[] = data.sponsors.data.map((x: GraphQLSponsor) => {
    return {
      Name: x.attributes.Name,
      Link: x.attributes.Link,
      Logo: x.attributes.Logo.data
        ? {
            Width: x.attributes.Logo.data.attributes.width,
            Height: x.attributes.Logo.data.attributes.height,
            Url: x.attributes.Logo.data.attributes.url,
          }
        : null,
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
