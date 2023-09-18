import { Sponsor } from "../../types/sponsorTypes";
import SectionTitle from "../constants/SectionTitle";
import SponsorCard from "./SponsorCard";
import sponsors_icon from "../../public/sponsors.png";
import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_ALL_SPONSORS } from "@/GlobalState/ApiCalls/graphql/sponsor_queries";
import { GraphQLSponsor } from "../../types/sponsorTypes";

const Sponsors = async () => {
  const { data: sponsorData } = await client.query({
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

  // console.log(sponsorData.sponsors.data);

  return (
    <div className="text-black py-2 px-4 sm:px-4 md:px-8 lg:px-8 xl:px-8 bg-gradient-to-r from-[#FFF8F9] to-[#F8FFF9]">
      <SectionTitle title="Sponsoren" icon={sponsors_icon} />
      <SponsorCard sponsors={sponsors} />
    </div>
  );
};

export default Sponsors;
