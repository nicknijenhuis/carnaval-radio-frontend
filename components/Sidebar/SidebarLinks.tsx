"use client";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "../../GlobalState/features/TabSlice";
import Image from "next/image";
import { navBarData } from "../../public/ProjectData/navBarData";
import { MdKeyboardArrowDown } from "react-icons/md";

import { RootState } from "../../GlobalState/store";
import { useRouter } from "next/navigation";
import { spawn } from "child_process";
import Link from "next/link";
const SidebarLinks = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [toggleMenu, setToggleMenu] = useState(null);
  const [subMenu_one, setToggleMenu_one] = useState(false);
  const [subMenu_two, setToggleMenu_two] = useState(false);
  const activeTab = useSelector((state: RootState) => state.Tab);

  const handleNavigate = (index: any, link: any) => {
    dispatch(setActiveTab(index));
    if (link) {
      router.push(`${link}`);
      setToggleMenu(null);
    } else if (index == 1 && !subMenu_one) {
      setToggleMenu_one(!subMenu_one);
      setToggleMenu(index);
    } else {
      setToggleMenu(index);
      setToggleMenu_two(!subMenu_two);
    }
  };

  return (
    <div className="flex flex-col gap-3 text-[#9F9F9F]">
      {navBarData.map((link, index) => {
        return (
          <div
            onClick={() => handleNavigate(index, link.src)}
            key={index}
            className="relative cursor-pointer"
          >
            {index === activeTab.index && (
              <Image
                className="h-10 w-2 absolute left-0 top-0 bottom-0 "
                src="/sideCone.png"
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
              <div className="flex items-center justify-between w-full">
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
                {!link.src && (
                  <span className="text-2xl">
                    <MdKeyboardArrowDown />
                  </span>
                )}
              </div>
            </div>
            {link.subMenu && toggleMenu === index && (
              <div className="flex flex-col ml-7 mr-6 pl-12 pt-2 bg-gray-50 rounded-md">
                {link.subMenu.map((link, index) => (
                  <Link
                    href={link.src}
                    key={index}
                    className="p-2 hover:bg-primaryShade_2"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SidebarLinks;
