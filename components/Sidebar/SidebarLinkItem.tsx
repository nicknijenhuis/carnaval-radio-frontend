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
  MdOutlineArticle,
} from "react-icons/md";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const IconMapping: any = {
  "<MdHome />": <MdHome />,
  "<MdError />": <MdError />,
  "<MdPhoneEnabled />": <MdPhoneEnabled />,
  "<MdApi />": <MdApi />,
  "<MdAssignmentInd />": <MdAssignmentInd />,
  "<MdMusicNote />": <MdMusicNote />,
  "<MdBusiness />": <MdBusiness />,
  "<MdCreditCard />": <MdCreditCard />,
  "<MdOutlineArticle />": <MdOutlineArticle />,
};

interface props {
  item: any;
  index: any;
  toogleSideBar: any;
}

const SidebarLinkItem = ({ item, index, toogleSideBar }: props) => {
  const path = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  if (item.items.length == 0) {
    return (
      <div
        onClick={() => {
          router.push(item.path);
          toogleSideBar && toogleSideBar();
        }}
        key={"sideBarLink" + index}
        className="relative cursor"
      >
        {path == item.path && (
          <Image
            className="h-10 w-2 absolute left-0 top-0 bottom-0 "
            src="/sideCone.png"
            height={100}
            width={20}
            alt=""
          />
        )}
        <div
          className={`flex items-center justify-start p-4 sm:px-4 md:p-2 lg:p-2 xl:p-2 2xl:p-[10px] ml-7 mr-2 rounded-xl hover:bg-primaryShade_2 ${
            path == item.path && "bg-primaryShade_2"
          }`}
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <span
                className={`text-2xl ${path == item.path && "text-secondary"} `}
              >
                {item.Icon && IconMapping[item.Icon]}
              </span>
              <p
                className={`text-[16px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary ${
                  path == item.path &&
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
          setOpen(!open);
        }}
        key={"sideBarLink" + index}
        className="relative cursor-pointer"
      >
        {path == item.path && (
          <Image
            className="h-10 w-2 absolute left-0 top-0 bottom-0 "
            src="/sideCone.png"
            height={100}
            width={20}
            alt=""
          />
        )}
        <div
          className={`flex items-center justify-start p-4 sm:px-4 md:p-2 lg:p-2 xl:p-2 2xl:p-[10px] ml-7 mr-2 rounded-xl hover:bg-primaryShade_2 ${
            path == item.path && "bg-primaryShade_2"
          }`}
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <span
                className={`text-2xl ${path == item.path && "text-secondary"} `}
              >
                {item.Icon && IconMapping[item.Icon]}
              </span>
              <p
                className={`text-[16px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary ${
                  path == item.path &&
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
            <div
              onClick={() => {
                const path = item.path.split("/");
                const formatedPath = `${path[path.length - 1]}`;
                router.push(formatedPath);
                toogleSideBar && toogleSideBar();
              }}
              key={"sideBarLink-Sub" + index}
              className="p-2 hover:bg-primaryShade_2"
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default SidebarLinkItem;
