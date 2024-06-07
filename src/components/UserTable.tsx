import Link from "next/link";
import Image from "next/image";
const UserTable = () => {
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
                src={"/noavatar.png"}
                alt=""
                width={40}
                height={40}
                className="object-cover rounded-full"
              />
              <span>Omar Alrifai</span>
            </div>
          </td>
          <td>jivara211@gmail.com</td>
          <td>21.12.2003</td>
          <td>Admin</td>
          <td>Active</td>
          <td>
            <div className="flex items-center justify-center gap-[20px]">
              <Link href={`/dashboard/users/${1}`}>
                <button className="bg-[teal] py-[5px] px-[10px] rounded-sm border-none cursor-pointer">
                  View
                </button>
              </Link>
              <button className="bg-[crimson] py-[5px] px-[10px] rounded-sm border-none cursor-pointer">
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default UserTable;
