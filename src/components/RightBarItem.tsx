import { MdPlayCircleFilled } from "react-icons/md";
import Image from "next/image";
const RightBarItem = () => {
  return (
    <div className="relative bg-gradient-to-tr from-[#182237] to-[#253352] py-[20px] px-[10px] rounded-md mt-[20px]">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
        <Image
          className="object-contain opacity-20"
          src="/astronaut.png"
          alt=""
          fill
        />
      </div>
      <div className="flex flex-col gap-[24px]">
        <span className="font-bold">🔥 Available Now</span>
        <h3 className="text-soft-text font-[300] text-[12px]">
          How to use the new version of the admin dashboard?
        </h3>
        <span className="">Takes 4 minutes to learn</span>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          eius libero perspiciatis recusandae possimus.
        </p>
        <button className="p-[10px] flex items-center gap-[10px] text-white border-none rounded-sm cursor-pointer bg-[#5d57c9] w-fit">
          <MdPlayCircleFilled />
          Watch
        </button>
      </div>
    </div>
  );
};
export default RightBarItem;
