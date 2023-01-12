import Link from 'next/link'
import Image from "next/image";
import { MdMenu } from 'react-icons/md'
import { useRef } from 'react'

import logo from "../public/assets/logo-2.png";
import SidebarLinks from "./SidebarLinks";
import SidebarPlayer from "./SidebarPlayer";
import Socials from "./Socials";
import SidebarSponsors from "./Sponsors/SidebarSponsors";

export default function Sidebar() {

  const sideBarRef = useRef()

  function toogleSideBar() {
    sideBarRef.current.classList.toggle('-translate-x-full')
  }

  return (
    <div className="max-h-screen md:sticky md:top-0 z-50">
      {/* MOBILE SIDEBAR */}
      <div className="md:hidden flex justify-between p-2 items-center sticky top-0 z-30">
      <Image src={logo} width={150} height={150} alt="Logo" />
        <button

          className="rounded focus:bg-yellow-800"
          onClick={toogleSideBar}
        >
          <MdMenu size={32} />
        </button>
      </div>
      {/* MAIN SIDEBAR */}
      <div
        ref={sideBarRef}
        className=" bg-white w-[240px] space-y-10 py-3  absolute inset-y-0 left-0 transform -translate-x-full
         md:translate-x-0 z-50 transition duration-200 ease-in-out flex flex-col child:transition-all md:max-h-screen md:min-h-screen md:sticky md:top-0"
      >
        <div className="flex items-center justify-center w-50 h-50 p-0">
          <Image src={logo} width={200} height={200} alt="Logo" />
        </div>
        <div>
          <SidebarPlayer />
        </div>
        <div className="min-w-full">
          <SidebarLinks />
        </div>
        <div className="w-50 h-50">
          <SidebarSponsors />
        </div>
        <div>
          <Socials />
        </div>
      </div>
    </div>
  )
}