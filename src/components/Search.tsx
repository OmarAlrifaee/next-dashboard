import Link from "next/link";
import { MdSearch } from "react-icons/md";

type Props = {
  placeHolder: string;
  href: string;
};
const Search = ({ placeHolder, href }: Props) => {
  return (
    <div className="flex items-center justify-between mt-[20px] p-[10px] rounded-md ">
      <div className="flex items-center gap-[10px] bg-[#2e374a] p-[10px] rounded-md w-fit">
        <MdSearch />
        <input
          type="text"
          placeholder={placeHolder}
          className="bg-transparent border-none text-white outline-none focus:outline-none"
        />
      </div>
      <Link href={href}>
        <button className="px-[10px] py-[5px] bg-[#5d57c9] text-white border-none rounded-sm cursor-pointer">
          Add
        </button>
      </Link>
    </div>
  );
};
export default Search;
