import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "../GlobalState/features/TabSlice";
import Image from "next/image";
import sideCone from "../public/sideCone.png";
import {
  MdHome,
  MdError,
  MdPhoneEnabled,
  MdApi,
  MdAssignmentInd,
  MdMusicNote,
  MdBusiness,
} from "react-icons/md";
import { RootState } from "../GlobalState/store";
const SidebarLinks = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.Tab);

  const data = [
    {
      text: "Home",
      src: "/",
      icon: <MdHome />,
    },
    {
      text: "Over ons",
      src: "/",
      icon: <MdError />,
    },
    {
      text: "Luisteren",
      src: "/",
      icon: <MdMusicNote />,
    },
    {
      text: "Sponsoren",
      src: "/sponsors",
      icon: <MdBusiness />,
    },
    {
      text: "Gastenboek",
      src: "/",
      icon: <MdAssignmentInd />,
    },
    {
      text: "Overig",
      src: "/",
      icon: <MdApi />,
    },
    {
      text: "Contact",
      src: "/pages/contact",
      icon: <MdPhoneEnabled />,
      className: "border-b",
    },
  ];

  const handleNavigate = (index: any) => {
    dispatch(setActiveTab(index));
  };
  return (
    <div className="text-[#9F9F9F]">
      <ul className="flex flex-col">
        {data.map((link, index) => {
          return (
            <Link
              onClick={() => handleNavigate(index)}
              key={link.text}
              href={link.src}
              className=" relative"
            >
              {index === activeTab.index && (
                <div
                  className={`absolute left-0 top-0 bottom-0 
                  }`}
                >
                  <Image
                    className="h-12 w-3"
                    src={sideCone}
                    height={100}
                    width={20}
                    alt=""
                  />
                </div>
              )}
              <div
                className={`flex items-center justify-start hover:rounded-r-lg w-[300px] sm:w-[350px] md:w-[200px] lg:w-[200px] py-2 px-4 ml-7 rounded-xl ${
                  index === activeTab.index && "bg-primaryShade_2"
                }`}
              >
                <li className="flex items-center gap-2">
                  <span
                    className={`text-3xl ${
                      index === activeTab.index && "text-secondary"
                    } `}
                  >
                    {link.icon}
                  </span>
                  <span
                    className={`text-[16px] font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary ${
                      index === activeTab.index &&
                      "text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                    }`}
                  >
                    {link.text}
                  </span>
                </li>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarLinks;
