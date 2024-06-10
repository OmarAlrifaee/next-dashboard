import { UserType } from "@/types";
import Image from "next/image";
import { getOneUser, updateUser } from "@/actions/users";
import SubmitButton from "@/components/SubmitButton";
type Props = {
  params: {
    id: string;
  };
};
const UserDetails = async ({ params }: Props) => {
  const user = (await getOneUser(params.id)) as UserType;
  return (
    <section className="flex gap-10">
      <div className="bg-main-soft-bg p-[10px] rounded-md mt-[20px] h-fit">
        <div className="size-[300px] relative rounded-md overflow-hidden">
          <Image src={user.avatar || "/noavatar.png"} alt="" fill />
        </div>
        <p className="mt-3 font-semibold">{user.username}</p>
      </div>
      <div className="flex-grow bg-main-soft-bg p-[10px] rounded-md mt-[20px]">
        <form
          action={async (data) => {
            "use server";
            await updateUser(data, user.id);
          }}
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            placeholder={user.username}
            name="username"
            className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold "
          />
          <input
            type="email"
            placeholder={user.email}
            name="email"
            className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold "
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold "
          />
          <input
            type="number"
            placeholder={user.phone.toString()}
            name="phone"
            className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold "
          />
          <input
            type="text"
            placeholder={user.address}
            name="address"
            className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold "
          />
          <select
            name="isAdmin"
            id="isAdmin"
            className=" p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold "
          >
            <option
              selected={user.isAdmin === "true" ? true : false}
              value="true"
              className="bg-main-soft-bg"
            >
              Yes
            </option>
            <option
              value="false"
              className="bg-main-soft-bg"
              selected={user.isAdmin === "true" ? false : true}
            >
              No
            </option>
          </select>{" "}
          <select
            name="isActive"
            id="isActive"
            className=" p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold "
          >
            <option
              value="true"
              className="bg-main-soft-bg"
              selected={user.isActive === "true" ? true : false}
            >
              Yes
            </option>
            <option
              value="false"
              className="bg-main-soft-bg"
              selected={user.isActive === "true" ? false : true}
            >
              No
            </option>
          </select>
          <SubmitButton title="Update User" />
        </form>
      </div>
    </section>
  );
};
export default UserDetails;
