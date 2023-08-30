import Image from "next/image";
import { MdMenu } from "react-icons/md";
import { useRef } from "react";

import SidebarLinks from "./SidebarLinks";
import SidebarPlayer from "./SidebarPlayer";
import Socials from "./Socials";
import carnival_logo from "../public/carnival_logo.png";

export default function Sidebar({ themeData }: { themeData: any }) {
  const sideBarRef = useRef<HTMLDivElement>(null);

  function toogleSideBar() {
    if (sideBarRef.current) {
      sideBarRef.current.classList.toggle("-translate-y-full");
    }
  }

  return (
    <div className="max-h-screen md:sticky md:top-0 z-30 border-r-2 h-full bg-sideBbarBackground">
      {/* MOBILE SIDEBAR */}
      <div className="bg-gradient-to-r from-[#FFF8F9] to-[#F8FFF9] md:hidden flex justify-between p-2 items-center sticky top-0 z-30">
        <Image
          src={themeData?.attributes?.Logo?.data?.attributes?.url}
          width={200}
          height={200}
          alt="Logo"
        />
        <button className="rounded" onClick={toogleSideBar}>
          <MdMenu size={32} />
        </button>
      </div>
      {/* MAIN SIDEBAR */}
      <div
        ref={sideBarRef}
        className="w-full sm:w-[400px] bg-gradient-to-r from-secondayShade_2 to-greenShade_2 md:w-[240px] lg:w-[240px] absolute inset-y-0 left-0 transform -translate-y-full md:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.1)]
         md:translate-y-0 z-30 transition duration-500 ease-in-out flex flex-col child:transition-all md:max-h-screen md:min-h-screen md:sticky md:top-0"
      >
        <div className="flex flex-col p-2 ">
          <div
            className="flex items-center
        justify-between"
          >
            <Image
              className="h-[100px] sm:h-[150px] md:h-[150px] lg:h-[120px] w-[150px] sm:w-[330px] md:w-[190px] lg:w-[190px]"
              src={themeData?.attributes?.Logo?.data?.attributes?.url}
              width={200}
              height={200}
              alt="Logo"
            />
            <button
              className="block sm:hidden md:hidden lg:hidden  rounded"
              onClick={toogleSideBar}
            >
              <MdMenu size={32} />
            </button>
          </div>
          <div className="flex items-center justify-between mx-4">
            <p>Nu Op De Radio</p>
            <Image src="/radio.png" height={30} width={30} alt="" />
          </div>
        </div>
        <div>
          <SidebarPlayer />
        </div>
        <div className="min-w-full">
          <SidebarLinks />
        </div>
        {/* <div className="">
          <SidebarSponsors />
        </div> */}
        <div>
          <Socials options="sidebar" />
        </div>
      </div>
    </div>
  );
}
