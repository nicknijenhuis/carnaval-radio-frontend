import React from "react";
import Link from "next/link";
import {
  MdHome,
  MdError,
  MdPhoneEnabled,
  MdApi,
  MdAssignmentInd,
  MdMusicNote,
} from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";

const SidebarLinks = () => {
  return (
    <div className="text-[#9F9F9F]">
      <ul className="flex flex-col">
        <Link href="/" className="border-[1px] border-[#9F9F9F] py-2">
          <li className="flex flex-row pl-14">
            <MdHome size={30} className='mr-2' /> Home
          </li>
        </Link>
        <Link href="/" className="border-[1px] border-[#9F9F9F] py-2">
          <li className="flex flex-row pl-14">
            <MdError size={30} className='mr-2' /> Over ons
          </li>
        </Link>
        <Link href="/" className="border-[1px] border-[#9F9F9F] py-2">
          <li className="flex flex-row pl-14">
            <MdMusicNote size={30} className='mr-2' /> Luisteren
          </li>
        </Link>
        <Link href="/" className="border-[1px] border-[#9F9F9F] py-2">
          <li className="flex flex-row pl-14">
            <MdAssignmentInd size={30} className='mr-2' /> Gastenboek
          </li>
        </Link>
        <Link href="/" className="border-[1px] border-[#9F9F9F] py-2">
          <li className="flex flex-row pl-14">
            <MdApi size={30} className='mr-2' /> Overig
          </li>
        </Link>
        <Link href="/pages/contact" className="border-[1px] border-[#9F9F9F] py-2">
          <li className="flex flex-row pl-14">
            <MdPhoneEnabled size={30} className='mr-2' /> Contact
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SidebarLinks;
