import { getAllUsers } from "@/actions/users";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import UserTable from "@/components/UserTable";
import { Metadata } from "next";

const Users = async () => {
  const users = await getAllUsers();
  return (
    <section className="bg-main-soft-bg">
      <Search placeHolder="Search For A User" href="/dashboard/users/add" />
      {users.map((user) => (
        <UserTable user={user} key={user.id} />
      ))}
      <Pagination />
    </section>
  );
};
export default Users;
export const metadata: Metadata = {
  title: "users",
};
