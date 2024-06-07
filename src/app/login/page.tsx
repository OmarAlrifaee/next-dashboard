const Login = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <form
        action=""
        className="flex flex-col gap-5 p-[30px] rounded-md bg-main-soft-bg"
      >
        <h3 className="text-4xl font-bold text-center">Login</h3>
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold"
        />{" "}
        <button
          type="submit"
          className="border-none w-full text-center text-white font-bold bg-teal-500 py-3 rounded-md mb-5"
        >
          Login
        </button>
      </form>
    </section>
  );
};
export default Login;
