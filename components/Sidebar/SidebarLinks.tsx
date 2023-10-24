"use client";
import {
  MdHome,
  MdError,
  MdPhoneEnabled,
  MdApi,
  MdAssignmentInd,
  MdMusicNote,
  MdBusiness,
  MdKeyboardArrowDown,
} from "react-icons/md";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "../../GlobalState/features/TabSlice";
import Image from "next/image";

import { RootState } from "../../GlobalState/store";
import { useRouter } from "next/navigation";
import Link from "next/link";

const IconMapping: any = {
  "<MdHome />": <MdHome />,
  "<MdError />": <MdError />,
  "<MdPhoneEnabled />": <MdPhoneEnabled />,
  "<MdApi />": <MdApi />,
  "<MdAssignmentInd />": <MdAssignmentInd />,
  "<MdMusicNote />": <MdMusicNote />,
  "<MdBusiness />": <MdBusiness />,
};

interface props {
  menu?: any;
  toogleSideBar?: any;
}
const SidebarLinks = ({ menu, toogleSideBar }: props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [toggleMenu, setToggleMenu] = useState(null);
  const activeTab = useSelector((state: RootState) => state.Tab);

  const handleNavigate = (index: any, link: any) => {
    dispatch(setActiveTab(index));
    if (index == 1 || index == 3) {
      setToggleMenu(index);
    } else {
      router.push(`${link}`);
      toogleSideBar && toogleSideBar();
      setToggleMenu(null);
    }
  };

  return (
    <div className="flex flex-col gap-3 text-[#9F9F9F]">
      {menu &&
        menu.map((item: any, index: any) => {
          return (
            <div
              onClick={() => handleNavigate(index, item.path)}
              key={"sideBarLink" + index}
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
                className={`flex items-center justify-start p-4 sm:px-4 md:p-2 lg:p-2 xl:p-2 2xl:p-[10px] ml-7 mr-2 rounded-xl ${
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
                      {IconMapping[item.Icon]}
                    </span>
                    <p
                      className={`text-[16px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary ${
                        index === activeTab.index &&
                        "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>
                  {item.items.length !== 0 && (
                    <span className="text-2xl">
                      <MdKeyboardArrowDown />
                    </span>
                  )}
                </div>
              </div>
              {item.items.length != 0 && toggleMenu === index && (
                <div className="flex flex-col ml-7 mr-6 pl-12 pt-2 bg-gray-50 rounded-md">
                  {item.items.map((item: any, index: any) => (
                    <Link
                      href={item.path}
                      key={"sideBarLink-Sub" + index}
                      onClick={toogleSideBar}
                      className="p-2 hover:bg-primaryShade_2"
                    >
                      {item.title}
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
