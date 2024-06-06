"use client";

import { usePathname } from "next/navigation";

const NavbarPathname = () => {
  const pathname = usePathname();
  return (
    <div className="text-white font-bold capitalize">
      {pathname.split("/").pop()}
    </div>
  );
};
export default NavbarPathname;