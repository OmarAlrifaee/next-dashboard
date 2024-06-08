import { getAllUsers } from "@/actions/users";
import Loader from "@/components/Loader";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import UserRow from "@/components/UserRow";
import { Metadata } from "next";
import { Suspense } from "react";
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
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users.map((user) => (
            <Suspense key={user.id} fallback={<Loader />}>
              <UserRow user={user} />
            </Suspense>
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
