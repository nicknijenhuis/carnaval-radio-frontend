import React from "react";
import SectionTitle from "../constants/SectionTitle";
import SponsorCard from "./SponsorCard";



const Sponsors = () => {

  return (
    <div className=" text-black py-10 px-10">
      <SectionTitle title="Onze sponsoren" />
      <SponsorCard />
    </div>
  );
};

export default Sponsors;
