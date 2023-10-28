import SidebarLinkItem from "./SidebarLinkItem";

interface props {
  menu?: any;
  toogleSideBar?: any;
}
const SidebarLinks = ({ menu, toogleSideBar }: props) => {
  return (
    <div className="flex flex-col gap-3 text-[#9F9F9F]">
      {menu &&
        menu.map((item: any, index: any) => {
          return (
            <SidebarLinkItem
              key={index}
              item={item}
              index={index}
              toogleSideBar={toogleSideBar}
            />
          );
        })}
    </div>
  );
};

export default SidebarLinks;
