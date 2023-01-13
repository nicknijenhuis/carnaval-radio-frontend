import React from "react";
import { Sponsor, SponsorType } from "../../types/sponsorTypes";
import SectionTitle from "../constants/SectionTitle";
import SponsorCard from "./SponsorCard";

interface Props {
  sponsorTypes: SponsorType[];
  sponsors: Sponsor[];
}


const Sponsors = ({sponsorTypes, sponsors}: Props) => {

  return (
    <div className=" text-black py-10 px-10">
      <SectionTitle title="Onze sponsoren" />
      <SponsorCard sponsorTypes={sponsorTypes} sponsors={sponsors} />
    </div>
  );
};

export default Sponsors;
