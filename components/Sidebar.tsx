import Image from "next/image";
import { MdMenu } from 'react-icons/md'
import { useRef } from 'react'

import logo from "../public/assets/logo-3.png";
import SidebarLinks from "./SidebarLinks";
import SidebarPlayer from "./SidebarPlayer";
import Socials from "./Socials";
import SidebarSponsors from "./Sponsors/SidebarSponsors";

export default function Sidebar() {

  const sideBarRef = useRef<HTMLDivElement>(null)

  function toogleSideBar() {
    if(sideBarRef.current)
    {
      sideBarRef.current.classList.toggle('-translate-y-full')
    }
  }

  return (
    <div className="max-h-screen md:sticky md:top-0 z-30 border-r-2 h-full">
      {/* MOBILE SIDEBAR */}
      <div className="md:hidden flex justify-between p-2 items-center sticky top-0 z-30">
      <Image src={logo} width={200} height={200} alt="Logo" />
        <button

          className="rounded"
          onClick={toogleSideBar}
        >
          <MdMenu size={32} />
        </button>
      </div>
      {/* MAIN SIDEBAR */}
      <div
        ref={sideBarRef}
        className=" bg-white w-[400px] md:w-[240px] space-y-10 py-3  absolute inset-y-0 left-0 transform -translate-y-full md:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.7)]
         md:translate-y-0 z-30 transition duration-500 ease-in-out flex flex-col child:transition-all md:max-h-screen md:min-h-screen md:sticky md:top-0"
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