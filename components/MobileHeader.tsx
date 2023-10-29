"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import SidebarLinks from "./Sidebar/SidebarLinks";
import Socials from "./Socials";
import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_UI_NAVIGATION } from "@/GlobalState/ApiCalls/graphql/navigation_queries";
import SidebarPlayer from "./Sidebar/SidebarPlayer";
import Link from "next/link";

interface props {
  themeData: any;
}

const MobileHeader = ({ themeData }: props) => {
  const sideBarRef = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState<any>();

  const fetchMenu = async () => {
    const { data } = await client.query({
      query: GET_UI_NAVIGATION,
      variables: { menuName: "main" },
    });
    setMenu(data.renderNavigation);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  function toogleSideBar() {
    if (sideBarRef.current) {
      sideBarRef.current.classList.toggle("translate-y-0");
    }
  }

  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-[#FFF8F9] to-[#F8FFF9] md:hidden lg:hidden xl:hidden flex sm:flex justify-between p-2 pb-4 items-center sticky top-0 z-30">
        <Link href="/">
          <Image
            src={themeData.attributes.Logo.data.attributes.url}
            width={120}
            height={120}
            alt="Logo"
          />
        </Link>
        <button className="rounded" onClick={toogleSideBar}>
          <MdMenu size={50} />
        </button>
      </div>
      <div
        ref={sideBarRef}
        className="w-ful absolute top-25 left-0 transform -translate-y-[120%] md:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.1)]
       z-50 transition duration-500 ease-in-out flex flex-col child:transition-all  bg-white w-full pb-2"
      >
        <div className="flex flex-col p-4 bg-gradient-to-r from-[#FFF8F9] to-[#F8FFF9]">
          <div className="flex items-center justify-between mt-4 mx-2">
            <p>Nu op de radio:</p>
            <Image src="/radio.png" height={20} width={20} alt="radio" />
          </div>
        </div>
        <SidebarPlayer />
        <div className="mt-8 bg-white">
          <SidebarLinks menu={menu} toogleSideBar={toogleSideBar} />
        </div>
        <Socials options="sidebar" />
      </div>
    </div>
  );
};

export default MobileHeader;
