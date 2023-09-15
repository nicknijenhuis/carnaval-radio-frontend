import Image from "next/image";
import SidebarLinks from "./SidebarLinks";
import Socials from "../Socials";
import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_THEME_DATA } from "@/GlobalState/ApiCalls/graphql/theme_queries";
import { GET_UI_NAVIGATION } from "@/GlobalState/ApiCalls/graphql/navigation_queries";

const SideBar = async () => {
  const { data: themeDataStrapi } = await client.query({
    query: GET_THEME_DATA,
  });

  const { data } = await client.query({
    query: GET_UI_NAVIGATION,
    variables: { menuName: "main" },
  });
  let menu: any;
  menu = data.renderNavigation;

  return (
    <div className=" max-h-screen md:sticky md:top-0 z-50 h-full bg-white flex-col hidden sm:hidden md:flex lg:flex xl:flex sm:w-0 md:w-[100%] lg:w-[100%] xl:w-[100%] absolute left-0 md:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.05)] md:max-h-screen md:min-h-screen">
      <div className="flex flex-col p-4 bg-gradient-to-r from-[#FFF8F9] to-[#F8FFF9]">
        <div
          className="flex items-center
    justify-between"
        >
          <Image
            className="h-[100px] sm:h-[150px] md:h-[150px] lg:h-[120px] w-[150px] sm:w-[330px] md:w-[200px] lg:w-[200px] ml-2"
            src={
              themeDataStrapi?.theme?.data?.attributes?.Logo?.data?.attributes
                ?.url
            }
            width={200}
            height={200}
            alt="Logo"
          />
        </div>
        <div className="flex items-center justify-between mt-4 mx-2">
          <p>Nu Op De Radio</p>
          <Image src="/radio.png" height={20} width={20} alt="" />
        </div>
      </div>
      <div className="mt-8">
        <SidebarLinks menu={menu} />
      </div>
      <Socials options="sidebar" />
    </div>
  );
};

export default SideBar;
