import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import UserTable from "@/components/UserTable";
import { Metadata } from "next";

const Users = () => {
  return (
    <section className="bg-main-soft-bg">
      <Search placeHolder="Search For A User" href="/dashboard/users/add" />
      <UserTable />
      <Pagination />
    </section>
  );
};
export default Users;
export const metadata: Metadata = {
  title: "users",
};
