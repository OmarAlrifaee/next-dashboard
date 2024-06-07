import Image from "next/image";
type Props = {
  status: "pending" | "done" | "cancelled";
};
const Tr = ({ status }: Props) => {
  return (
    <tr>
      <td>
        <div className="flex items-center justify-center gap-[10px]">
          <Image
            src={"/noavatar.png"}
            alt=""
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span>Omar Alrifai</span>
        </div>
      </td>
      <td>
        <span
          className={`px-2 py-1 rounded-md ${
            status === "pending" && "bg-[#f7cb7375]"
          } ${status === "done" && "bg-[#afd6ee75]"} ${
            status === "cancelled" && "bg-[#f7737375]"
          }`}
        >
          {status}
        </span>
      </td>
      <td>14.02.2002</td>
      <td>$600</td>
    </tr>
  );
};
export default Tr;
