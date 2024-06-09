import Link from "next/link";
import Image from "next/image";
import { UserType } from "@/types";
import { deleteUser } from "@/actions/users";

type Props = {
  user: UserType;
};
const UserRow = ({ user }: Props) => {
  return (
    <tr>
      <td className="p-3">
        <div className="flex items-center justify-center gap-[10px]">
          <Image
            src={user.avatar || "/noavatar.png"}
            alt={`${user.username} image`}
            width={40}
            height={40}
            className="rounded-full flex-shrink-0"
          />
          <span>{user.username}</span>
        </div>
      </td>
      <td className="p-3">{user.email}</td>
      <td className="p-3">{user.createdAt?.toLocaleDateString()}</td>
      <td className="p-3">{user.isAdmin === "true" ? "Admin" : "Not Admin"}</td>
      <td className="p-3">
        {user.isActive === "true" ? "Active" : "Not Active"}
      </td>
      <td className="p-3">
        <div className="flex items-center justify-center gap-[20px]">
          <Link href={`/dashboard/users/${user.id}`}>
            <button className="bg-[teal] py-[5px] px-[10px] rounded-sm border-none cursor-pointer">
              View
            </button>
          </Link>
          <form
            action={async () => {
              "use server";
              await deleteUser(user.id);
            }}
          >
            <button className="bg-[crimson] py-[5px] px-[10px] rounded-sm border-none cursor-pointer">
              Delete
            </button>
          </form>
        </div>
      </td>
    </tr>
  );
};
export default UserRow;
