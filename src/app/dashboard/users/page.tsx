import { getAllUsers } from "@/actions/users";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import UserRow from "@/components/UserRow";
import { Metadata } from "next";

type Props = {
  searchParams: {
    q: string;
    page: string;
  };
};
const Users = async ({ searchParams }: Props) => {
  const { users, count } = await getAllUsers(
    searchParams.q || "",
    searchParams.page || "1"
  );
  return (
    <section className="bg-main-soft-bg">
      <Search placeHolder="Search For A User" href="/dashboard/users/add" />
      <table className="w-full mt-5">
        <thead>
          <tr>
            <td className="p-3">Name</td>
            <td className="p-3">Email</td>
            <td className="p-3">Created At</td>
            <td className="p-3">Role</td>
            <td className="p-3">Status</td>
            <td className="p-3">Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow user={user} key={user.id} />
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </section>
  );
};
export default Users;
export const metadata: Metadata = {
  title: "users",
};
