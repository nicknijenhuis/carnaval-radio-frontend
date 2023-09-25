"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Socials from "./Socials";

import { TbMinusVertical } from "react-icons/tb";
import { GET_UI_NAVIGATION } from "@/GlobalState/ApiCalls/graphql/navigation_queries";
import { GET_THEME_DATA } from "@/GlobalState/ApiCalls/graphql/theme_queries";
import { client } from "@/GlobalState/ApiCalls/api.config";
import { useSelector } from "react-redux";
import { RootState } from "@/GlobalState/store";

const Footer = () => {
  const [menu, setMenu] = useState<any>();

  const themeData = useSelector((state: RootState) => state.Theme.themeData);

  const fetchMenu = async () => {
    const { data, error } = await client.query({
      query: GET_UI_NAVIGATION,
      variables: { menuName: "footer" },
    });
    setMenu(data.renderNavigation);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <footer className="pt-10 text-black">
      <div className="flex flex-col items-center md:flex-row py-10 md:px-10 gap-7">
        <div>
          {themeData && (themeData?.attributes?.Logo?.data?.attributes?.url) ? (
            <Link href="/" className="flex items-center justify-center">
              <Image
                src={themeData.attributes.Logo.data.attributes.url}
                width={200}
                height={200}
                alt="Logo"
              />
            </Link>
          ) : (
            <span className="flex items-center justify-center h-[100px] sm:h-[150px] md:h-[150px] lg:h-[120px] w-[150px] sm:w-[330px] md:w-[200px] lg:w-[200px] ml-2 bg-gray-300 animate-pulse rounded-lg">
              laoding Logo
            </span>
          )}

          <Socials options="footer" />
        </div>

        <div className="flex flex-wrap items-start gap-14 sm:gap-16 md:gap-16 lg:gap-16 xl:gap-44 px-10">
          {menu &&
            menu.map((item: any, index: any) => (
              <div key={"footerMenu" + index}>
                <h2 className="font-bold mb-4">{item.title}</h2>
                <ul className="text-sm flex flex-col gap-1">
                  {item.items.map((item: any, index: any) => (
                    <li key={"footerItem" + index}>
                      <Link href={item.path}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row pt-8 pb-0 sm:pb-16 md:pb-10 lg:pb-8 xl:pb-8 items-center justify-between px-10 gap-2">
        <p className=" text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg">
          2023 Copyright Carnaval-Radio. All rights Reserved.
        </p>
        <ul className="flex gap-2 text-xs sm:text-lg md:text-lg lg:text-lg xl:text-lg">
          <li>
            <Link href="/privacy-beleid">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/" className="flex items-center justify-center">
              <TbMinusVertical /> <p> Terms & Condition</p>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center justify-center">
              <TbMinusVertical /> <p> Cookies Policy</p>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
