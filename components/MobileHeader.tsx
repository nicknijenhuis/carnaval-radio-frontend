"use client";
import { RootState } from "@/GlobalState/store";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdMenu } from "react-icons/md";
import SidebarLinks from "./Sidebar/SidebarLinks";
import Socials from "./Socials";
import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_THEME_DATA } from "@/GlobalState/ApiCalls/graphql/theme_queries";

const MobileHeader = () => {
  const sideBarRef = useRef<HTMLDivElement>(null);
  const [themeData, setThemeData] = useState<any>();

  const fetchTheme = async () => {
    const { loading, error, data } = await client.query({
      query: GET_THEME_DATA,
    });
    setThemeData(data.theme.data);
  };

  useEffect(() => {
    fetchTheme();
  }, []);

  function toogleSideBar() {
    if (sideBarRef.current) {
      sideBarRef.current.classList.toggle("translate-y-0");
    }
  }
  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-[#FFF8F9] to-[#F8FFF9] md:hidden lg:hidden xl:hidden flex sm:flex justify-between p-2 pb-4 items-center sticky top-0 z-30">
        <Image
          src={themeData?.attributes?.Logo?.data?.attributes?.url}
          className="h-20"
          width={200}
          height={200}
          alt="Logo"
        />
        <button className="rounded" onClick={toogleSideBar}>
          <MdMenu size={50} />
        </button>
      </div>
      <div
        ref={sideBarRef}
        className="w-ful absolute top-25 left-0 transform -translate-y-[120%] md:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.1)]
       z-50 transition duration-500 ease-in-out flex flex-col child:transition-all md:max-h-screen md:min-h-screen bg-white"
      >
        <div className="flex flex-col p-4 bg-gradient-to-r from-[#FFF8F9] to-[#F8FFF9]">
          <div className="flex items-center justify-between mt-4 mx-2">
            <p>Nu Op De Radio</p>
            <Image src="/radio.png" height={20} width={20} alt="" />
          </div>
          {/* <SidebarPlayer /> */}
        </div>
        <div className="mt-8 bg-white">
          <SidebarLinks />
        </div>
        <Socials options="sidebar" />
      </div>
    </div>
  );
};

export default MobileHeader;
