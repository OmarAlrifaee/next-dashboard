import { addProduct } from "@/actions/products";

const AddProduct = () => {
  return (
    <div className="bg-main-soft-bg p-[10px] rounded-md mt-[20px]">
      <form action={addProduct}>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10">
          <input
            type="text"
            placeholder="Title"
            name="title"
            required
            className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold"
          />
          <select
            name="category"
            id="category"
            className=" p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold"
          >
            <option value="general" className="bg-main-soft-bg">
              Choose A Category
            </option>
            <option value="kitchen" className="bg-main-soft-bg">
              Kitchen
            </option>
            <option value="phone" className="bg-main-soft-bg">
              Phone
            </option>
            <option value="computer" className="bg-main-soft-bg">
              Computer
            </option>
          </select>
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
            placeholder="image url"
            name="img"
            className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold"
          />
        </div>
        <div className="mt-10 flex flex-col gap-5">
          <textarea
            name="desc"
            id="desc"
            placeholder="Description"
            className="p-[15px] focus:outline-none rounded-md bg-main-bg text-white font-semibold min-h-[200px]"
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
export default AddProduct;
