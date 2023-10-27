"use client";

import React, { useState, useEffect } from "react";
import { Sponsor, SponsorType } from "../../types/sponsorTypes";
import SectionTitle from "../constants/SectionTitle";
import SponsorCard from "./SponsorCard";
import sponsors_icon from "../../public/sponsors.png";
import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_ALL_SPONSORS } from "@/GlobalState/ApiCalls/graphql/sponsor_queries";
import { GraphQLSponsor } from "../../types/sponsorTypes";

const Sponsors = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();
  const [sponsorsAll, setSponsors] = useState<Sponsor[]>([]);
  const fetchSponsors = async () => {
    const {
      loading,
      error,
      data: sponsorData,
    } = await client.query({
      query: GET_ALL_SPONSORS,
    });

    const sponsorTypes: any = sponsorData.sponsorTypes.data.map((x: any) => {
      return {
        Id: x.id,
        Name: x.attributes.Name,
        Order: x.attributes.Order,
        LogoSize: x.attributes.LogoSize,
      } as SponsorType;
    });

    sponsorData.sponsors.data.map((x: GraphQLSponsor) => {
      sponsorTypes.map((st: any) => {
        if (st.Id == x.attributes.Type.data.id) {
          const sponsorSingle = {
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
            Order: st.Order,
          } as Sponsor;
          setSponsors((sponsorsAll) => [...sponsorsAll, sponsorSingle]);
        }
      });
    });
    setLoading(loading);
    setError(error);
  };

  useEffect(() => {
    fetchSponsors();
  }, [error]);

  const arr = [1, 2, 3, 4];

  return (
    <div className="text-black px-10 py-2 bg-gradient-to-r from-[#FFF8F9] to-[#F8FFF9]">
      <SectionTitle title="sponsoren" image={sponsors_icon} />
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
