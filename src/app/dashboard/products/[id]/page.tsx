import Image from "next/image";
type Props = {
  params: {
    id: string;
  };
};
const ProductDetails = ({ params }: Props) => {
  return (
    <section className="flex gap-10">
      <div className="bg-main-soft-bg p-[10px] rounded-md mt-[20px] h-fit">
        <div className="size-[300px] relative rounded-md overflow-hidden">
          <Image src={"/noproduct.jpg"} alt="" fill />
        </div>
        <p className="mt-3 font-semibold">Phone</p>
      </div>
      <div className="flex-grow bg-main-soft-bg p-[10px] rounded-md mt-[20px]">
        <form action="" className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Title"
            name="title"
            required
            className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold"
          />

          <input
            type="number"
            placeholder="Price"
            name="price"
            className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold"
          />
          <input
            type="number"
            placeholder="stock"
            name="stock"
            className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold"
          />
          <input
            type="text"
            placeholder="Color"
            name="color"
            className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold"
          />
          <input
            type="text"
            placeholder="Size"
            name="size"
            className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold"
          />
          <input
            type="text"
            placeholder="Description"
            name="desc"
            className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold"
          />
          <select
            name="category"
            id="category"
            className=" p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold"
          >
            <option value="kitchen" className="bg-main-soft-bg" selected>
              Kitchen
            </option>
            <option value="phone" className="bg-main-soft-bg">
              Phone
            </option>
            <option value="computer" className="bg-main-soft-bg">
              Computer
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
export default ProductDetails;
