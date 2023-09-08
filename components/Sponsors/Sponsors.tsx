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
  const [sponsorsAll, setSponsors] = useState<Sponsor[]>();
  const fetchSponsors = async () => {
    const { data: sponsorData } = await client.query({
      query: GET_ALL_SPONSORS,
    });

    console.log(sponsorData);
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
    setSponsors(sponsors);
  };

  useEffect(() => {
    fetchSponsors();
  }, []);

  return (
    <div className="text-black px-10 py-2 bg-gradient-to-r from-[#FFF8F9] to-[#F8FFF9]">
      <SectionTitle title="sponsoren" icon={sponsors_icon} />
      {sponsorsAll && <SponsorCard sponsors={sponsorsAll} />}
    </div>
  );
};

export default Sponsors;
