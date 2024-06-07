import { MdSupervisedUserCircle } from "react-icons/md";
type Props = {
  nagitive?: boolean;
};
const Card = ({ nagitive = false }: Props) => {
  return (
    <div className="bg-main-soft-bg hover:bg-[#2e374a] p-[10px] rounded-md flex flex-grow gap-[20px] cursor-pointer">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-[20px]">
        <span>Total users</span>
        <span className="text-[24px] font-bold">10,200</span>
        <span className="text-[14px] font-[300]">
          <span className={`${nagitive ? "text-red-500" : "text-green-500"}`}>
            12%
          </span>{" "}
          more than previous week
        </span>
      </div>
    </div>
  );
};
export default Card;
