import Image from "next/image";
import SidebarLinks from "./SidebarLinks";
import Socials from "../Socials";
import SidebarPlayer from "./SidebarPlayer";
import Link from "next/link";

interface props {
  menu: any;
  themeData: any;
}

const SideBar = ({ menu, themeData }: props) => {
  return (
    <div className="max-h-screen md:sticky md:top-0 z-50 h-full bg-white flex-col hidden sm:hidden md:flex lg:flex xl:flex sm:w-0 md:w-[100%] lg:w-[100%] xl:w-[100%] absolute left-0 md:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.05)] md:max-h-screen md:min-h-screen">
      <div className="flex flex-col p-4 bg-gradient-to-r from-[#FFF8F9] to-[#F8FFF9]">
        <div
          className="flex items-center
    justify-center"
        >
          <Link href="/" className="flex items-center justify-center">
            <Image
              src={themeData.attributes.Logo.data.attributes.url}
              width={200}
              height={200}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex items-center justify-between mt-4 mx-2">
          <p>Nu op de radio</p>
          <Image src="/radio.png" height={20} width={20} alt="" />
        </div>
      </div>
      <SidebarPlayer />
      <div className="mt-4">
        <SidebarLinks menu={menu} />
      </div>
      <Socials options="sidebar" />
    </div>
  );
};

export default SideBar;
