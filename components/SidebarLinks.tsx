"use client";

import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "../GlobalState/features/TabSlice";
import Image from "next/image";
import sideCone from "../public/sideCone.png";
import { navBarData } from "../public/ProjectData/navBarData";

import { RootState } from "../GlobalState/store";
const SidebarLinks = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.Tab);

  const handleNavigate = (index: any) => {
    dispatch(setActiveTab(index));
  };
  return (
    <div className="flex flex-col gap-3 text-[#9F9F9F]">
      {navBarData.map((link, index) => {
        return (
          <Link
            onClick={() => handleNavigate(index)}
            key={link.text}
            href={link.src}
            className=" relative"
          >
            {index === activeTab.index && (
              <Image
                className="h-10 w-2 absolute left-0 top-0 bottom-0 "
                src={sideCone}
                height={100}
                width={20}
                alt=""
              />
            )}
            <div
              className={`flex items-center justify-start w-[300px] sm:w-[350px] md:w-[190px] lg:w-[200px] xl:w-[200px] py-2 px-4 ml-7 mr-2 rounded-xl ${
                index === activeTab.index && "bg-primaryShade_2"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`text-2xl ${
                    index === activeTab.index && "text-secondary"
                  } `}
                >
                  {link.icon}
                </span>
                <p
                  className={`text-[16px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary ${
                    index === activeTab.index &&
                    "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                  }`}
                >
                  {link.text}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarLinks;
