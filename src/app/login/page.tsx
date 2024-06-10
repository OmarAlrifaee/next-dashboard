import { login } from "@/actions/users";
import SubmitButton from "@/components/SubmitButton";
const Login = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <form
        action={login}
        className="flex flex-col gap-5 p-[30px] rounded-md bg-main-soft-bg"
      >
        <h3 className="text-4xl font-bold text-center">Login</h3>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold"
        />{" "}
        <SubmitButton title="Login" />
      </form>
    </section>
  );
};
export default Login;
