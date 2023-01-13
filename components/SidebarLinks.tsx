import React from "react";
import Link from "next/link";
import {
  MdHome,
  MdError,
  MdPhoneEnabled,
  MdApi,
  MdAssignmentInd,
  MdMusicNote,
  MdBusiness,
} from "react-icons/md";

const SidebarLinks = () => {
  const data = [
    {
      text: "Home",
      src: "/",
      icon: <MdHome size={30} className="mr-2" />
    },
    {
      text: "Over ons",
      src: "/",
      icon: <MdError size={30} className="mr-2" />
    },
    {
      text: "Luisteren",
      src: "/",
      icon: <MdMusicNote size={30} className="mr-2" />
    },
    {
      text: "Sponsoren",
      src: "/sponsors",
      icon: <MdBusiness size={30} className="mr-2" />
    },
    {
      text: "Gastenboek",
      src: "/",
      icon: <MdAssignmentInd size={30} className="mr-2" />
    },
    {
      text: "Overig",
      src: "/",
      icon: <MdApi size={30} className="mr-2" />
    },
    {
      text: "Contact",
      src: "/pages/contact",
      icon: <MdPhoneEnabled size={30} className="mr-2" />,
      className: "border-b"
    },
  ];


  return (
    <div className="text-[#9F9F9F]">
      <ul className="flex flex-col">
        {data.map((link) => {
          const className = "md:border-t border-[#9F9F9F] py-2 " + link.className
          
          return (
          <Link key={link.text} href={link.src} className={className}>
            <div className=" mr-4 hover:rounded-r-lg hover:shadow-md hover:shadow-gray-400 hover:text-[#FFA500]">
            <li className="flex flex-row md:pl-14 justify-center md:justify-start">
              <div>{link.icon}</div> <p>{link.text}</p>
            </li>
            </div>
          </Link>
        )})}
      </ul>
    </div>
  );
};

export default SidebarLinks;
