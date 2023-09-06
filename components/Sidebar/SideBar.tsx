"use client";
import { useRef, useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import Image from "next/image";
import SidebarLinks from "./SidebarLinks";
import Socials from "../Socials";
import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_THEME_DATA } from "@/GlobalState/ApiCalls/graphql/theme_queries";
import { useDispatch, useSelector } from "react-redux";
import { getThemeData } from "@/GlobalState/features/themeSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const [themeData, setThemeData] = useState<any>();

  const fetchTheme = async () => {
    const { data: themeDataStrapi } = await client.query({
      query: GET_THEME_DATA,
    });
    setThemeData(themeDataStrapi.theme.data);
    dispatch(getThemeData(themeDataStrapi.theme.data));
  };
  useEffect(() => {
    fetchTheme();
  }, []);

  return (
    <div className="max-h-screen md:sticky md:top-0 z-50 h-full bg-white flex-col hidden sm:hidden md:flex lg:flex xl:flex sm:w-0 md:w-[240px] lg:w-[250px] xl:w-[250px] absolute left-0 md:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.05)] md:max-h-screen md:min-h-screen">
      <div className="flex flex-col p-4 bg-gradient-to-r from-[#FFF8F9] to-[#F8FFF9]">
        <div
          className="flex items-center
    justify-between"
        >
          <Image
            className="h-[100px] sm:h-[150px] md:h-[150px] lg:h-[120px] w-[150px] sm:w-[330px] md:w-[200px] lg:w-[200px] ml-2"
            src={themeData?.attributes?.Logo?.data?.attributes?.url}
            width={200}
            height={200}
            alt="Logo"
          />
        </div>
        <div className="flex items-center justify-between mt-4 mx-2">
          <p>Nu Op De Radio</p>
          <Image src="/radio.png" height={20} width={20} alt="" />
        </div>
        {/* <SidebarPlayer /> */}
      </div>
      <div className="mt-8">
        <SidebarLinks />
      </div>
      <Socials options="sidebar" />
    </div>
  );
};

export default SideBar;
