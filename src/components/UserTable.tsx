import Link from "next/link";
import Image from "next/image";
import { UserType } from "@/types";
import { deleteUserAction } from "@/actions/users";

type Props = {
  user: UserType;
};
const UserTable = ({ user }: Props) => {
  return (
    <table className="w-full mt-5">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Created At</th>
          <th>Role</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="text-center">
        <tr>
          <td>
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
          <td>{user.email}</td>
          <td>{user.createdAt?.toLocaleDateString()}</td>
          <td>{user.isAdmin ? "Admin" : "Not Admin"}</td>
          <td>{user.isActive ? "Active" : "Not Active"}</td>
          <td>
            <div className="flex items-center justify-center gap-[20px]">
              <Link href={`/dashboard/users/${user.id}`}>
                <button className="bg-[teal] py-[5px] px-[10px] rounded-sm border-none cursor-pointer">
                  View
                </button>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await deleteUserAction(user.id);
                }}
              >
                <button className="bg-[crimson] py-[5px] px-[10px] rounded-sm border-none cursor-pointer">
                  Delete
                </button>
              </form>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default UserTable;
