import Image from "next/image";
import SidebarLink from "./SidebarLink";
import { MdLogout } from "react-icons/md";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
} from "react-icons/md";
import { getCurrentUser, logout } from "@/actions/users";
import { UserType } from "@/types";
import { cookies } from "next/headers";

const Sidebar = async () => {
  // to prevent a preredering error cuz next will prefetch the currentUser but there is no token before login
  let user: UserType | undefined = undefined;
  if (cookies().get("token")?.value) {
    user = await getCurrentUser();
  }
  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];
  return (
    <section className="flex-1 bg-main-soft-bg p-5 md:block hidden">
      <div className="flex items-center gap-[20px] mt-[20px]">
        <Image
          src={user?.avatar || "/noavatar.png"}
          alt={user?.username + "image"}
          width={"50"}
          height={"50"}
          className="object-cover rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-[500]">{user?.username}</span>
          <span className="text-[12px] text-soft-text">
            {user?.isAdmin === "true" ? "admin" : "not admin"}
          </span>
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
      <form action={logout}>
        <button className="w-full p-[10px] flex items-center gap-[10px] hover:bg-red-500 my-[5px] rounded-md">
          <MdLogout />
          Logout
        </button>
      </form>
    </section>
  );
};
export default Sidebar;
