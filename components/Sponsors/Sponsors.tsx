"use client";

import React, { useState, useEffect } from "react";
import { Sponsor } from "../../types/sponsorTypes";
import SectionTitle from "../constants/SectionTitle";
import SponsorCard from "./SponsorCard";
import sponsors_icon from "../../public/sponsors.png";
import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_ALL_SPONSORS } from "@/GlobalState/ApiCalls/graphql/sponsor_queries";
import { GraphQLSponsor } from "../../types/sponsorTypes";

const Sponsors = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();
  const [sponsorsAll, setSponsors] = useState<Sponsor[]>();
  const fetchSponsors = async () => {
    const {
      loading,
      error,
      data: sponsorData,
    } = await client.query({
      query: GET_ALL_SPONSORS,
    });
    const sponsors: Sponsor[] = sponsorData.sponsors.data.map(
      (x: GraphQLSponsor) => {
        return {
          Name: x.attributes.Name,
          Link: x.attributes.Link,
          Logo: x.attributes.Logo?.data
            ? {
                Width: x.attributes.Logo.data.attributes.width,
                Height: x.attributes.Logo.data.attributes.height,
                Url: x.attributes.Logo.data.attributes.url,
              }
            : null,
          TypeID: x.attributes.Type.data.id,
        } as Sponsor;
      }
    );
    setLoading(loading);
    setError(error);
    setSponsors(sponsors);
  };

  useEffect(() => {
    fetchSponsors();
  }, [error]);

  const arr = [1, 2, 3];

  return (
    <div className="text-black px-10 py-2 bg-gradient-to-r from-[#FFF8F9] to-[#F8FFF9]">
      <SectionTitle title="sponsoren" icon={sponsors_icon} />
      {!loading ? (
        <> {sponsorsAll && <SponsorCard sponsors={sponsorsAll} />}</>
      ) : (
        <div className="flex items-center gap-4 my-6 ">
          {arr.map((_, index) => (
            <div
              key={index}
              className="h-[150px] w-[250px] bg-gray-300 rounded-lg animate-pulse"
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sponsors;
