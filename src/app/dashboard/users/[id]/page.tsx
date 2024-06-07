import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};
const UserDetails = ({ params }: Props) => {
  return (
    <section className="flex gap-10">
      <div className="bg-main-soft-bg p-[10px] rounded-md mt-[20px] h-fit">
        <div className="size-[300px] relative rounded-md overflow-hidden">
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
        <p className="mt-3 font-semibold">Omar Alrifai</p>
      </div>
      <div className="flex-grow bg-main-soft-bg p-[10px] rounded-md mt-[20px]">
        <form action="" className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Username"
            name="username"
            required
            className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold "
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold "
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold "
          />
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold "
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            required
            className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold "
          />
          <select
            name="isAdmin"
            id="isAdmin"
            className=" p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold "
          >
            <option selected value="true" className="bg-main-soft-bg">
              Yes
            </option>
            <option value="false" className="bg-main-soft-bg">
              No
            </option>
          </select>{" "}
          <select
            name="isActive"
            id="isActive"
            className=" p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold "
          >
            <option selected value="true" className="bg-main-soft-bg">
              Yes
            </option>
            <option value="false" className="bg-main-soft-bg">
              No
            </option>
          </select>
          <button
            type="submit"
            className="border-none w-full text-center text-white font-bold bg-teal-500 py-3 rounded-md mb-5"
          >
            Update
          </button>
        </form>
      </div>
    </section>
  );
};
export default UserDetails;
