const AddUser = () => {
  return (
    <div className="bg-main-soft-bg p-[10px] rounded-md mt-[20px]">
      <form action="">
        <div className="grid grid-cols-2 gap-x-5 gap-y-10">
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
          <select
            name="isAdmin"
            id="isAdmin"
            className=" p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold "
          >
            <option value="false" className="bg-main-soft-bg" selected>
              Is Admin?
            </option>
            <option value="true" className="bg-main-soft-bg">
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
            <option value="true" className="bg-main-soft-bg" selected>
              Is Active?
            </option>
            <option value="true" className="bg-main-soft-bg">
              Yes
            </option>
            <option value="false" className="bg-main-soft-bg">
              No
            </option>
          </select>
        </div>
        <div className="mt-10 flex flex-col gap-5">
          <textarea
            name="address"
            id="address"
            placeholder="Address"
            className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold  min-h-[200px]"
          ></textarea>
          <button
            type="submit"
            className="border-none w-full text-center text-white font-bold bg-teal-500 py-3 rounded-md mb-5"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddUser;
