import React from "react";
import { Sponsor, SponsorType } from "../../types/sponsorTypes";
import SectionTitle from "../constants/SectionTitle";
import SponsorCard from "./SponsorCard";
import sponsors_icon from "../../public/sponsors.png";

interface Props {
  sponsorTypes: SponsorType[];
  sponsors: Sponsor[];
}

const Sponsors = ({ sponsorTypes, sponsors }: Props) => {
  return (
    <div className="text-black px-10 bg-gradient-to-r from-[#FFF8F9] to-[#F8FFF9]">
      <SectionTitle title="sponsoren" icon={sponsors_icon} />
      <SponsorCard sponsorTypes={sponsorTypes} sponsors={sponsors} />
    </div>
  );
};

export default Sponsors;
