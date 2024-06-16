import SidebarLinkItem from "./SidebarLinkItem";

interface props {
  menu?: any;
  toggleSidebar?: any;
}
const SidebarLinks = ({ menu, toggleSidebar }: props) => {
  return (
    <div className="flex flex-col gap-3 text-[#9F9F9F]">
      {menu &&
        menu.map((item: any, index: any) => {
          return (
            <SidebarLinkItem
              key={index}
              item={item}
              index={index}
              toggleSidebar={toggleSidebar}
            />
          );
        })}
    </div>
  );
};

export default SidebarLinks;
