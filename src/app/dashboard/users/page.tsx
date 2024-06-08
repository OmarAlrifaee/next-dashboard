import { getAllUsers } from "@/actions/users";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import UserTable from "@/components/UserTable";
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
      {users.map((user) => (
        <Suspense key={user.id}>
          <UserTable user={user} />
        </Suspense>
      ))}
      <Pagination count={count} />
    </section>
  );
};
export default Users;
export const metadata: Metadata = {
  title: "users",
};
