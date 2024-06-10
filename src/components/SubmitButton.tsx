"use client";
import { useFormStatus } from "react-dom";
type Props = {
  title: string;
};
const SubmitButton = ({ title }: Props) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="border-none w-full text-center text-white font-bold bg-teal-500 py-3 rounded-md mb-5"
    >
      {pending ? "loading..." : title}
    </button>
  );
};
export default SubmitButton;