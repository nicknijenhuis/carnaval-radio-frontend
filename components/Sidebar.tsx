import Image from "next/image";
import React from "react";

import logo from "../public/assets/logo-2.png";
import SidebarLinks from "./SidebarLinks";
import SidebarPlayer from "./SidebarPlayer";
import Socials from "./Socials";
import SidebarSponsors from "./Sponsors/SidebarSponsors";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[240px] py-2 border-r-2 shadow-2xl">
      <div className="flex items-center justify-center w-50 h-50 p-0">
        <Image src={logo} width={200} height={200} alt="Logo" />
      </div>
      <div>
        <SidebarPlayer />
      </div>
      <div className="min-w-full">
        <SidebarLinks />
      </div>
      <div className="w-50 h-50">
        <SidebarSponsors />
      </div>
      <div>
        <Socials />
      </div>
    </div>
  );
};

export default Sidebar;
