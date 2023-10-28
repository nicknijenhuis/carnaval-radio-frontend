"use client";
import React, { useState } from "react";
import {
  MdHome,
  MdError,
  MdPhoneEnabled,
  MdApi,
  MdAssignmentInd,
  MdMusicNote,
  MdBusiness,
  MdKeyboardArrowDown,
  MdCreditCard,
  MdKeyboardArrowUp,
} from "react-icons/md";
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
  "<MdCreditCard />": <MdCreditCard />,
};

interface props {
  item: any;
  index: any;
  toogleSideBar: any;
}

const SidebarLinkItem = ({ item, index, toogleSideBar }: props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const activeTab = useSelector((state: RootState) => state.Tab);

  if (item.items.length == 0) {
    return (
      <div
        onClick={() => {
          router.push(item.path);
          dispatch(setActiveTab(index));
          toogleSideBar && toogleSideBar();
        }}
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
                {item.Icon && IconMapping[item.Icon]}
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
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => {
          dispatch(setActiveTab(index));
          setOpen(!open);
        }}
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
                {item.Icon && IconMapping[item.Icon]}
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
            <span className="text-2xl">
              {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </span>
          </div>
        </div>

        <div
          className={` ${
            open
              ? "flex flex-col bg-gray-50 rounded-md ml-8 mr-2 pl-8 pt-2 overflow-hidden"
              : "hidden"
          }`}
        >
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
      </div>
    );
  }
};

export default SidebarLinkItem;
