import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import NavbarPathname from "./NavbarPathname";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-main-soft-bg p-[10px] rounded-md">
      <NavbarPathname />
      <div className="flex items-center gap-[20px]">
        <div className="flex items-center gap-[10px] p-[10px] rounded-md bg-[#2e374a]">
          <MdSearch />
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent border-none focus:outline-none text-white"
          />
        </div>
        <div className="md:flex items-center gap-[20px] hidden">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
