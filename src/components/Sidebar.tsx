import Image from "next/image";
import SidebarLink from "./SidebarLink";
import { menuItems } from "./sidebar-data";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <section className="flex-1 bg-main-soft-bg p-5 md:block hidden">
      <div className="flex items-center gap-[20px] mt-[20px]">
        <Image
          src={"/noavatar.png"}
          alt=""
          width={"50"}
          height={"50"}
          className="object-cover rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-[500]">user name</span>
          <span className="text-[12px] text-soft-text">admin</span>
        </div>
      </div>
      <ul className="mt-5">
        {menuItems.map((menuItem) => (
          <li key={menuItem.title}>
            <span className="text-soft-text font-bold text-[13px] my-[10px]">
              {menuItem.title}
            </span>
            <div className="mt-3">
              {menuItem.list.map((menuLink) => (
                <SidebarLink menuItem={menuLink} key={menuLink.title} />
              ))}
            </div>
          </li>
        ))}
      </ul>
      <form action="">
        <button className="w-full p-[10px] flex items-center gap-[10px] hover:bg-red-500 my-[5px] rounded-md">
          <MdLogout />
          Logout
        </button>
      </form>
    </section>
  );
};
export default Sidebar;
