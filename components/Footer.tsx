import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/assets/logo-3.png";
import Socials from "./Socials";

import { TbMinusVertical } from "react-icons/tb";
import { GET_UI_NAVIGATION } from "@/GlobalState/ApiCalls/graphql/navigation_queries";
import { GET_THEME_DATA } from "@/GlobalState/ApiCalls/graphql/theme_queries";
import { client } from "@/GlobalState/ApiCalls/api.config";

const Footer = async () => {
  const { data: footerData } = await client.query({
    query: GET_UI_NAVIGATION,
    variables: { menuName: "footer" },
  });
  const { data: themeDataStrapi } = await client.query({
    query: GET_THEME_DATA,
  });

  console.log(footerData.renderNavigation);

  return (
    <footer className="pt-10 text-black">
      <div className="flex flex-col items-center md:flex-row py-10 md:px-10 gap-7">
        <div className="">
          <Link href="/">
            <Image
              src={
                themeDataStrapi?.theme?.data?.attributes?.Logo?.data?.attributes
                  ?.url
              }
              width={200}
              height={200}
              alt="Logo"
            />
          </Link>
          <Socials options="footer" />
        </div>

        <div className="flex flex-wrap items-start gap-14 sm:gap-16 md:gap-16 lg:gap-16 xl:gap-44 px-10">
          {footerData.renderNavigation.map((item: any, index: any) => (
            <div key={index}>
              <h2 className="font-bold">{item.title}</h2>
              <ul className="text-sm space-y-4">
                {item.items.map((item: any, index: any) => (
                  <li key={index}>
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row pt-8 pb-28 sm:pb-16 md:pb-10 lg:pb-8 xl:pb-8 items-center justify-between px-10 gap-2 ">
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
