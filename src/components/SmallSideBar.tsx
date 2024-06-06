"use client";
import { MdLogout, MdMenu } from "react-icons/md";
import { menuItems } from "./sidebar-data";
import SidebarLink from "./SidebarLink";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { usePathname } from "next/navigation";
const SmallSideBar = () => {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <div className="md:hidden block">
      <button
        className="z-20 absolute right-[50px] top-[100px]"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <FaXmark size={30} /> : <MdMenu size={30} />}
      </button>
      <section
        className={`flex-1 bg-main-soft-bg p-5 absolute min-h-screen top-0 w-full z-10  ${
          open ? "left-0" : "left-[-100%]"
        }`}
      >
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
    </div>
  );
};
export default SmallSideBar;
